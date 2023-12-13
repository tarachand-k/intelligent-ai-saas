"use client";

import { MessageSquare } from "lucide-react";
import { useRouter } from "next/navigation";
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

const ConversationPage = () => {
  const router = useRouter();
  const proModal = useProModal();
  // const [messages, setMessages] = useState([]);
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

  // const isLoading = form.formState.isSubmitting;
  const lastId =
    messages[messages.length - 1]?.role === "assistant"
      ? messages[messages.length - 1]?.id
      : null;
  // const isTyping =
  //   isLoading &&
  //   messages.length > 0 &&
  //   messages[messages.length - 1].role === "assistant";

  return (
    <div>
      <Heading
        title="Conversation"
        description="Our most advanced conversation model"
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <div className="px-4 lg:px-8">
        <form
          onSubmit={handleSubmit}
          className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
        >
          <div className="col-span-12 lg:col-span-10">
            <Input
              className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent pl-0"
              disabled={isLoading}
              placeholder="How do I calculate the radius of a circle?"
              onChange={handleInputChange}
              value={input}
            />
          </div>
          <Button className="col-span-12 lg:col-span-2" disabled={isLoading}>
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
            <Empty label="No conversation started" />
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
                <div className="text-sm">
                  {message.content.split("\n").map((line, index) =>
                    line === "" ? (
                      <p key={message.id + index}>&nbsp;</p>
                    ) : (
                      <p
                        key={message.id + index}
                        className="text-sm w-fit inline mr-1"
                      >
                        {line}
                      </p>
                    )
                  )}
                  {isLoading && message.id === lastId && <CursorSvg />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversationPage;
