import { useState } from "react";
import "./App.css";
import { tw } from "./utils/tw";
import { useWs } from "./utils/useWs";
import { Button } from "antd";

const url = new URL(import.meta.url);

function App() {
  const { is_online, turn, on } = useWs(
    `ws://${url.host}/api/ws`,
  );
  const [messages, set_messages] = useState<string[]>([]);

  on("message", ({ data }: MessageEvent) => {
    set_messages((prev) => [...prev, data]);
  });

  return (
    <div
      className={tw(
        "h-[100%] flex flex-col items-center justify-center",
        "font-sans",
      )}
    >
      <Button size="large" type="link" href={url.origin}>Back to Home</Button>
      <h1 className={tw("text-2xl")}>Ask about me</h1>
      <p className={tw("italic")}>
        This chat is served by CHAT-GPT bot that already know all required
        information about me and even little more. So you can economy your time
        and instead to explore all related to information ask at once exactly
        what you are interested in.
      </p>

      <ul>
        {messages.map((m, i) => {
          return (
            <li>
              <p key={i + Date.now()}>{m}</p>
            </li>
          );
        })}
      </ul>
      {is_online
        ? (
          <input
            className={tw(
              "py-2 px-1",
              "border rounded-sm border-slate-700",
            )}
            type="text"
          />
        )
        : (
          <Button
            type="primary"
            size="large"
            onClick={() => turn("on")}
          >
            Start chatting
          </Button>
        )}
    </div>
  );
}

export default App;
