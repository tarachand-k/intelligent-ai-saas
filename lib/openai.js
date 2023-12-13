import { createParser } from "eventsource-parser";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function parseData(payload) {
  const response = await openai.chat.completions.create(payload);

  const chunks = [];
  const decoder = new TextDecoder("utf-8");

  for await (const chunk of response) {
    console.log(chunk.choices[0].delta);
    chunks.push(decoder.decode(chunk.choices[0].delta));
  }

  return chunks;
}

export async function parseOpenAIStream(payload) {
  const encoder = new TextEncoder();
  const decoder = new TextDecoder("utf-8");

  let counter = 0;

  const response = await openai.chat.completions.create(payload);

  const stream = new ReadableStream({
    async start(controller) {
      function onParse(event) {
        if (event.type === "event") {
          const data = event.data;

          if (data === "[DONE]") {
            controller.close();
            return;
          }

          try {
            const json = JSON.parse(data);
            const text = json.choices[0]?.delta || "";

            if (counter < 2 && (text.match(/\n/) || []).length) {
              return;
            }

            const queue = encoder.encode(text);
            controller.enqueue(queue);

            counter++;
          } catch (err) {
            controller.error(err);
          }
        }
      }

      const parser = createParser(onParse);

      for (const chunk of response) {
        parser.feed(decoder.decode(chunk));
      }
    },
  });

  return stream;
}

export async function streamData(payload) {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify(payload),
    });

    // const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");

    for await (const chunk of response.body) {
      const decoded = decoder.decode(chunk);
      console.log(decoded);
    }

    // while (true) {
    //   const chunk = await reader.read();
    //   // console.log(chunk);
    //   const { done, value } = chunk;

    //   if (done) {
    //     break;
    //   }
    //   const decodedChunk = decoder.decode(value);
    //   const lines = decodedChunk.split("\n");

    //   const parsedLines = lines
    //     .map((line) => line.replace(/^data: /, ""))
    //     .filter((line) => line !== "" && line !== "[DONE]")
    //     .map((line) => JSON.parse(line));

    //   console.log(parsedLines);
    // }
  } catch (err) {
    console.log("error", err);
  }
}
