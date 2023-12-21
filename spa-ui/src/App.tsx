import { useState } from "react";
import "./App.css";
import { tw } from "./utils/tw";
import { useWs } from "./utils/useWs";

function App() {
  const { is_online, turn, on } = useWs(
    `ws://${new URL(import.meta.url).host}/api/ws`,
  );
  const [messages, set_messages] = useState<string[]>([]);

  on("message", ({ data }: MessageEvent) => {
    set_messages((prev) => [...prev, data]);
  });

  return (
    <div className={tw("h-[100%] flex flex-col items-center justify-center")}>
      <a href="https://nik-kita.deno.dev">Back to Home</a>
      <h1 className={tw("text-2xl")}>Ask about me</h1>
      <p className={tw("italic")}>
        This chat is served by CHAT-GPT bot that already know all required
        information about me and even little more. So you can economy your time
        and instead to explore all related to information ask at once exactly
        what you are interested in.
      </p>
      <div
        className={tw(
          "w-full h-full",
          "flex flex-col content-center",
          is_online ? "bg-green-500" : "bg-slate-500",
        )}
      >
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
            <button onClick={() => turn("on")}>Start chatting</button>
          )}
      </div>
    </div>
  );
}

export default App;
