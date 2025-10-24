import { useState } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Send, User } from "lucide-react";

const mockChats = [
  { id: 1, user: "MotorSzrot Warsaw", lastMessage: "Is the price negotiable?", unread: 2 },
  { id: 2, user: "AutoParts Krakow", lastMessage: "When can I pick it up?", unread: 0 },
];

const mockMessages = [
  { id: 1, sender: "them", text: "Hi, I'm interested in the BMW engine block", time: "10:30" },
  { id: 2, sender: "me", text: "Hello! Yes, it's still available.", time: "10:32" },
  { id: 3, sender: "them", text: "Is the price negotiable?", time: "10:35" },
  { id: 4, sender: "me", text: "I can go down to 2300 PLN", time: "10:36" },
];

export default function Chat() {
  const [message, setMessage] = useState("");
  const [selectedChat, setSelectedChat] = useState(1);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Messages</h1>

        <div className="grid lg:grid-cols-3 gap-6 h-[calc(100vh-250px)]">
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Conversations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {mockChats.map((chat) => (
                <div
                  key={chat.id}
                  onClick={() => setSelectedChat(chat.id)}
                  className={`p-4 rounded-lg cursor-pointer transition-colors ${
                    selectedChat === chat.id
                      ? "bg-accent/20 border border-accent"
                      : "bg-muted/50 hover:bg-muted"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                        <User className="w-5 h-5 text-accent" />
                      </div>
                      <span className="font-semibold">{chat.user}</span>
                    </div>
                    {chat.unread > 0 && (
                      <Badge className="gradient-accent">{chat.unread}</Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground truncate">
                    {chat.lastMessage}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="lg:col-span-2 flex flex-col">
            <CardHeader>
              <CardTitle>MotorSzrot Warsaw</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <div className="flex-1 space-y-4 overflow-y-auto mb-4 p-4 bg-muted/30 rounded-lg">
                {mockMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[70%] rounded-lg p-3 ${
                        msg.sender === "me"
                          ? "bg-accent text-primary-foreground"
                          : "bg-secondary"
                      }`}
                    >
                      <p>{msg.text}</p>
                      <p className="text-xs opacity-70 mt-1">{msg.time}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-2">
                <Input
                  placeholder="Type your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="flex-1"
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      setMessage("");
                    }
                  }}
                />
                <Button className="gradient-accent">
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
