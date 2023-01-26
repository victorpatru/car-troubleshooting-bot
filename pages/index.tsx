import React, { use, useState } from "react";
import Chat from "./components/Chat";
import Controls from "./components/Controls";
import { decisionTree } from "./utils/tree";

export default function Home() {
  const [currentTree, setCurrentTree] = useState(decisionTree);
  const [userAnswer, setUserAnswer] = useState(null);

  return (
    <main className="flex flex-row min-h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <Chat userAnswer={userAnswer} treeMessage={currentTree.message} />
        <div className="card-body">
          <Controls
            setUserAnswer={setUserAnswer}
            setCurrentTree={setCurrentTree}
            currentTree={currentTree}
          />
        </div>
      </div>
    </main>
  );
}
