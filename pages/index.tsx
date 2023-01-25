// @ts-ignore
import ChatBot from "react-simple-chatbot";
import { steps } from "./utils/steps";

export default function Home() {
  return (
    <div className="grid place-items-center h-screen">
      <ChatBot steps={steps} />
    </div>
  );
}
