import { Button, Image, Input } from "antd";
import { useState } from "react";
import "./App.css";
import Duck from "./assets/img/duck.svg";
import { tw } from "./utils/tw";
import { useWs } from "./utils/useWs";

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
          <Input
            onChange={(ev) => {
              console.log(ev);
            }}
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
      <Image src={Duck} alt="happy duck" />
    </div>
  );
}

export default App;
