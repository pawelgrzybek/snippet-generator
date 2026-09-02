import parsePulsar from "../src/parsePulsar";
import { describe, expect, test } from "vitest";

describe("parsePulsar", () => {
  const description = "a";
  const tabTrigger = "b";
  const snippet = "c";

  test("parsePulsar", () => {
    const result = `'a':
  'prefix': 'b'
  'body': """
    c
  """`;
    expect(parsePulsar(description, tabTrigger, snippet)).toBe(result);
  });
});
