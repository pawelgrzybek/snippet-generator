import parseVSCode from "../src/parseVSCode";
import { describe, expect, test } from "vitest";

describe("parseVSCode", () => {
  const description = "a";
  const tabTrigger = "b";
  const snippet = "c";

  test("parses simple snippet", () => {
    const result = `"a": {
  "prefix": "b",
  "body": [
    "c"
  ],
  "description": "a"
}`;
    expect(parseVSCode(description, tabTrigger, snippet)).toBe(result);
  });
});
