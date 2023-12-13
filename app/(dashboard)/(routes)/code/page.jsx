"use client";

import { Code } from "lucide-react";
import { useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { useChat } from "ai/react";

import toast from "react-hot-toast";
import { Heading } from "@/components/heading";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Empty } from "@/components/empty";
import { Loader } from "@/components/loader";
import { UserAvatar } from "@/components/user-avatar";
import { BotAvatar } from "@/components/bot-avatar";
import { cn } from "@/lib/utils";
import { useProModal } from "@/hooks/use-pro-modal";
import CursorSvg from "@/components/cursor-svg";

const CodePage = () => {
  const router = useRouter();
  const proModal = useProModal();

  const { messages, isLoading, input, handleInputChange, handleSubmit } =
    useChat({
      api: "/api/conversation",
      onError: (err) => {
        console.log(err);
        toast.error(err.message);
      },
      onFinish: () => {
        console.log("Finished");
        router.refresh();
      },
      onResponse: (response) => {
        if (response?.status === 403) {
          proModal.onOpen();
          router.refresh();
        }
      },
    });

  const lastId =
    messages[messages.length - 1]?.role === "assistant"
      ? messages[messages.length - 1]?.id
      : null;
  return (
    <div>
      <Heading
        title="Code Generation"
        description="Generate code using descriptive text."
        icon={Code}
        iconColor="text-green-700"
        bgColor="bg-green-700/10"
      />
      <div className="px-4 lg:px-8">
        <form
          onSubmit={handleSubmit}
          className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
        >
          <div className="col-span-12 lg:col-span-10">
            <Input
              className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
              disabled={isLoading}
              placeholder="Simple toggle button using react hooks."
              value={input}
              onChange={handleInputChange}
            />
          </div>
          <Button
            className="col-span-12 lg:col-span-2 w-full"
            type="submit"
            disabled={isLoading}
            size="icon"
          >
            Generate
          </Button>
        </form>
        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <Loader horizontal={true} />
            </div>
          )}
          {messages.length === 0 && !isLoading && (
            <Empty label="No conversation started." />
          )}
          <div className="flex flex-col-reverse gap-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "p-8 w-full flex items-start gap-x-8 rounded-lg",
                  message.role === "user"
                    ? "bg-white border border-black/10"
                    : "bg-muted"
                )}
              >
                {message.role === "user" ? <UserAvatar /> : <BotAvatar />}
                <ReactMarkdown
                  components={{
                    pre: ({ node, ...props }) => (
                      <div className="overflow-auto w-full my-2 bg-black/10 p-2 rounded-lg">
                        <pre {...props} />
                      </div>
                    ),
                    code: ({ node, ...props }) => (
                      <code className="bg-black/10 rounded-lg p-1" {...props} />
                    ),
                  }}
                  className="text-sm flex flex-col gap-y-2 overflow-hidden leading-7"
                >
                  {message.content || ""}
                </ReactMarkdown>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CodePage;
