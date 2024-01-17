import parseSublimeText from "../src/parseSublimeText";
import { describe, expect, test } from "vitest";

describe("parseSublimeText", () => {
  const description = "a";
  const tabTrigger = "b";
  const snippet = "c";

  test("parses simple snippet", () => {
    const result = `<snippet>
  <content><![CDATA[
c
]]></content>
  <tabTrigger>b</tabTrigger>
  <description>a</description>
  <!-- Optional: Set a scope to limit where the snippet will trigger -->
  <!-- <scope >source.python</scope > -->
</snippet>`;
    expect(parseSublimeText(description, tabTrigger, snippet)).toBe(result);
  });
});
