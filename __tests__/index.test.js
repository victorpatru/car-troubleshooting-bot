import { expect, test } from "@jest/globals";
import { stepTree } from "@/pages/utils/tree";

const decisionTree = {
  message: "initial message",
  noNode: {
    message: "we've just moved to the no branch",
  },
  yesNode: {
    message: "we've just moved to the yes branch",
  },
};

const singleNodeTree = {
  message: "single node tree",
};

describe("decision tree is working as intended", () => {
  test("parse yes action correctly", () => {
    const parsedTree = stepTree(decisionTree, "yes");

    expect(parsedTree).toEqual({
      message: "we've just moved to the yes branch",
    });
  });

  test("parse no action correctly", () => {
    const parseTree = stepTree(decisionTree, "no");

    expect(parseTree).toEqual({ message: "we've just moved to the no branch" });
  });

  test("single node tree returns undefined", () => {
    const parseTree = stepTree(singleNodeTree, "no");

    expect(parseTree).toBe(undefined);
  });
});
