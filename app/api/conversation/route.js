import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { OpenAI } from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

import { increaseApiLimit, checkApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

// export const runtime = "edge";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req) {
  try {
    const { userId } = auth();
    // const body = await req.json();
    // Extract the `messages` from the body of the request
    const { messages } = await req.json();

    console.log(userId);

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!openai.apiKey) {
      return new NextResponse("OpenAI API Key not configured", { status: 500 });
    }

    if (!messages) {
      return new NextResponse("Messages are required", { status: 400 });
    }

    const freeTrial = await checkApiLimit();
    const isPro = await checkSubscription();

    console.log("free Trial", freeTrial, isPro);

    if (!freeTrial && !isPro)
      return new NextResponse("Free trial has expired.", { status: 403 });

    console.log(messages);
    // Request the OpenAI API for the response based on the prompt
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      stream: true,
      messages: messages,
    });

    // Convert the response into a friendly text-stream
    const stream = OpenAIStream(response);

    if (!isPro) {
      await increaseApiLimit();
    }

    // Respond with the stream
    return new StreamingTextResponse(stream);
  } catch (err) {
    console.log("[CONVERSATION_ERROR]", err);
    return new NextResponse("Internal error", { status: 500 });
  }
}
