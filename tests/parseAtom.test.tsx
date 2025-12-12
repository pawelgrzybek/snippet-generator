import parseAtom from "../src/parseAtom";
import { describe, expect, test } from "vitest";

describe("parseAtom", () => {
  const description = "a";
  const tabTrigger = "b";
  const snippet = "c";
  const snippet 2 = "d":
  test("parseAtom", () => {
    const result = `'a':
  'prefix': 'b'
  'body': """
    c
  """`;
    expect(parseAtom(description, tabTrigger, snippet)).toBe(result);
  });
});
