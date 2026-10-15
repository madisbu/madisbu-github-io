import assert from "node:assert/strict";
import test from "node:test";
import { formatDuration, formatYearMonth, initials } from "./resume-dates.ts";

test("formats year-month and ongoing roles", () => {
  assert.equal(formatYearMonth("2022-03"), "Mar 2022");
  assert.equal(formatYearMonth(null), "Present");
});

test("duration includes both start and end months", () => {
  assert.equal(formatDuration("2019-01", "2022-02"), "3 yrs 2 mos");
  assert.equal(formatDuration("2020-05", "2020-05"), "1 mo");
  assert.equal(formatDuration("2020-01", "2020-12"), "1 yr");
  assert.equal(formatDuration("2024-11", null, new Date(2026, 0, 15)), "1 yr 3 mos");
});

test("initials use the first two words", () => {
  assert.equal(initials("Company A"), "CA");
  assert.equal(initials("acme"), "A");
  assert.equal(initials("Big Blue Machines Inc"), "BB");
});
