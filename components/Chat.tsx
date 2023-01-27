import React from "react";

function Chat({ userAnswer, treeMessage }: any) {
  return (
    <section className="p-10">
      <div className="chat chat-start">
        <div className="chat-bubble">{treeMessage}</div>
      </div>
      {userAnswer && (
        <div className="chat chat-end">
          <div className="chat-bubble">{userAnswer}</div>
        </div>
      )}
    </section>
  );
}

export default Chat;
