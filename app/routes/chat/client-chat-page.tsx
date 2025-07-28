import { useState } from "react";
import type { Route } from "./+types/client-chat-page";
import { Button } from "~/components/ui/button";
import { ScrollArea } from "~/components/ui/scroll-area";
import {
  Copy,
  Download,
  ThumbsUp,
  ThumbsDown,
  Send,
  MessageSquareOff,
} from "lucide-react";
import { Textarea } from "~/components/ui/textarea";
import { getClientMessages, sendMessage } from "~/fake/fake-data";
import { formatDate } from "~/lib/date-formatter";
import { Form } from "react-router";

export const loader = async ({ params }: Route.LoaderArgs) => {
  const { id } = params;

  const messages = await getClientMessages(id);
  return { messages };
};

export const action = async ({ request, params }: Route.ActionArgs) => {
  const { id } = params;

  const formData = await request.formData();
  const content = (formData.get("content") as string) ?? "";

  if (!id || !content) return;

  const newMessage = await sendMessage({
    sender: "agent",
    content,
    clientId: id,
    createdAt: new Date(),
  });
};

const ClientChatPage = ({ loaderData }: Route.ComponentProps) => {
  const { messages } = loaderData;
  const [input, setInput] = useState("");

  return (
    <div className="flex-1 flex flex-col">
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4">
              <MessageSquareOff className="h-12 w-12 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">
                No hay mensajes aún
              </p>
            </div>
          ) : (
            messages.map((message, index) => (
              <div key={index} className="w-full">
                {message.sender === "client" ? (
                  // Agent message - left aligned
                  <div className="flex gap-2 max-w-[80%]">
                    <div className="h-8 w-8 rounded-full bg-primary flex-shrink-0" />
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">NexTalk</span>
                        <span className="text-sm text-muted-foreground">
                          {formatDate(message.createdAt)}
                        </span>
                      </div>
                      <div className="p-3 bg-muted/50 rounded-lg">
                        <p className="text-sm whitespace-pre-wrap">
                          {message.content}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Copy className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <ThumbsUp className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <ThumbsDown className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : (
                  // User message - right aligned
                  <div className="flex flex-col items-end">
                    <div className="text-right mb-1">
                      <span className="text-sm font-medium mr-2">G5</span>
                      <span className="text-sm text-muted-foreground">
                        {formatDate(message.createdAt)}
                      </span>
                    </div>
                    <div className="bg-black text-white p-3 rounded-lg max-w-[80%]">
                      <p className="text-sm whitespace-pre-wrap">
                        {message.content}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </ScrollArea>
      <div className="p-4 border-t">
        <Form method="post" className="flex items-center gap-2">
          <Textarea
            placeholder="Type a message as a customer"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="min-h-[44px] h-[44px] resize-none py-3"
            name="content"
          />
          <Button
            type="submit"
            className="h-[44px] px-4 flex items-center gap-2"
          >
            <Send className="h-4 w-4" />
            <span>Send</span>
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ClientChatPage;
