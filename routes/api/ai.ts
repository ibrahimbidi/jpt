import { Handlers } from "$fresh/server.ts";
import { OpenAI } from "openai";

export const handler: Handlers = {
  async GET(_req, _ctx) {
  //  const prompt = await req.text();
    const openAI = new OpenAI(Deno.env.get("KEY_OPEN_AI") ?? "");
/*
    const completion = await openAI.createCompletion({
      model: "davinci",
      prompt: "what about in morocco",
    }) ;
    */
    //console.log(completion.choices);
    const SystemRoleContenet = "شات جي بي تي  انت تفهم جميع اللغاتوفي جميع المجالاتاي نص اعطيته لك افهمه وعالجه وورد على اي إستفسار لك رد باللهجة المغربية يمكنك كتابة كلمات تقنية لكن اكتبها بالدارجة المغربية، ركز الرد بالدارجة المغربية";
    
const userContent = "jock for animal dog";
    const chatCompletion = await openAI.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        { "role": "system", "content": SystemRoleContenet },
        { "role": "user", "content": userContent},
        
      ],
    });
    
    console.log(chatCompletion);

    const choices = chatCompletion?.choices;

const text = choices[0]?.message.content;


    return new Response(text, {
      status: 200,
    });
  },
};



