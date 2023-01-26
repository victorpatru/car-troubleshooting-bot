import React from "react";
import { stepTree } from "../utils/tree";

function Controls({ setUserAnswer, setCurrentTree, currentTree }: any) {
  const handleChange = (e: any) => {
    setUserAnswer(e.target.value);
    setCurrentTree(stepTree(currentTree, e.target.value.toLowerCase()));
  };

  return (
    <div className="card-actions flex justify-center">
      {currentTree.yesNode && (
        <button className="btn btn-primary" onClick={handleChange} value="Yes">
          Yes
        </button>
      )}
      {currentTree.noNode && (
        <button className="btn btn-secondary" onClick={handleChange} value="No">
          No
        </button>
      )}
    </div>
  );
}

export default Controls;
