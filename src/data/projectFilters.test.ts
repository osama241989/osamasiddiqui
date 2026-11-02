import { describe, expect, test } from "bun:test";
import { filterProjects } from "./projectFilters";

const projects = [
  { name: "CRM", industry: "Real Estate & Property", services: ["CRM & Digital Systems"] },
  { name: "Campaign", industry: "Real Estate & Property", services: ["Paid Advertising"] },
  { name: "Agent", industry: "Retail & E-commerce", services: ["AI & Automation", "CRM & Digital Systems"] },
];
describe("combined project filters", () => {
  test("all options show every project", () => expect(filterProjects(projects, "all", "all")).toHaveLength(3));
  test("industry limits results to that industry", () => expect(filterProjects(projects, "Real Estate & Property", "all").map(p => p.name)).toEqual(["CRM", "Campaign"]));
  test("service works across industries", () => expect(filterProjects(projects, "all", "CRM & Digital Systems").map(p => p.name)).toEqual(["CRM", "Agent"]));
  test("both filters must match", () => expect(filterProjects(projects, "Real Estate & Property", "CRM & Digital Systems").map(p => p.name)).toEqual(["CRM"]));
  test("unmatched combination is empty", () => expect(filterProjects(projects, "Real Estate & Property", "AI & Automation")).toEqual([]));
});