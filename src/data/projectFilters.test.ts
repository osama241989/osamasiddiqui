import { describe, it as test } from "node:test";
import assert from "node:assert/strict";
import { filterProjects } from "./projectFilters";

const projects = [
  { name: "CRM", industry: "Real Estate & Property", services: ["CRM & Digital Systems"] },
  { name: "Campaign", industry: "Real Estate & Property", services: ["Paid Advertising"] },
  { name: "Agent", industry: "Retail & E-commerce", services: ["AI & Automation", "CRM & Digital Systems"] },
];
describe("combined project filters", () => {
  test("all options show every project", () => assert.equal(filterProjects(projects, "all", "all").length, 3));
  test("industry limits results to that industry", () => assert.deepEqual(filterProjects(projects, "Real Estate & Property", "all").map(p => p.name), ["CRM", "Campaign"]));
  test("service works across industries", () => assert.deepEqual(filterProjects(projects, "all", "CRM & Digital Systems").map(p => p.name), ["CRM", "Agent"]));
  test("both filters must match", () => assert.deepEqual(filterProjects(projects, "Real Estate & Property", "CRM & Digital Systems").map(p => p.name), ["CRM"]));
  test("unmatched combination is empty", () => assert.deepEqual(filterProjects(projects, "Real Estate & Property", "AI & Automation"), []));
});