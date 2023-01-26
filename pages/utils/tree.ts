interface DecisionNode {
  message: string;
  noNode?: DecisionNode;
  yesNode?: DecisionNode;
}

function isLeafNode(node: DecisionNode) {
  return !(node.noNode || node.yesNode); // deMorgan rule
}

/**
 * Function that takes a step and returns new tree
 */
function stepTree(
  decisionTree: DecisionNode,
  step: "yes" | "no"
): DecisionNode | undefined {
  return step === "yes" ? decisionTree.yesNode : decisionTree.noNode;
}

const decisionTree: DecisionNode = {
  message: "Is the car silent when you turn the key?",
  yesNode: {
    message: "Are the battery terminals corroded?",
    yesNode: {
      message: "Clean terminals and try starting again.",
    },
    noNode: {
      message: "Replace cables and try again.",
    },
  },
  noNode: {
    message: "Does the car make a clicking noise?",
    yesNode: {
      message: "Replace the battery.",
    },
    noNode: {
      message: "Does the car crank up but fail to start?",
      yesNode: {
        message: "Check the spark plug connections.",
      },
      noNode: {
        message: "Does the engine start and then die?",
        yesNode: {
          message: "Does your car have fuel injection?",
          yesNode: {
            message: "Get it in for service.",
          },
          noNode: {
            message: "Check to ensure the choke is opening and closing",
          },
        },
      },
    },
  },
};

/**
 * {
    message: "Let's be friends",
  }
 */
stepTree(decisionTree, "yes");

export { decisionTree, stepTree };
