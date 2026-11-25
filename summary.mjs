// Summarize quests.json: done vs pending, points earned vs total.
import { readFileSync } from "node:fs";

const data = JSON.parse(readFileSync(new URL("./quests.json", import.meta.url), "utf8"));
const quests = data.quests || [];
const done = quests.filter((q) => q.done);
const pending = quests.filter((q) => !q.done);
const earned = done.reduce((sum, q) => sum + (q.points || 0), 0);
const total = quests.reduce((sum, q) => sum + (q.points || 0), 0);

console.log("Quests: " + quests.length + " total, " + done.length + " done, " + pending.length + " pending");
console.log("Points: " + earned + " / " + total);
if (pending.length > 0) {
  console.log("Pending:");
  for (const q of pending) {
    console.log("- " + q.project + ": " + q.task + " (" + (q.points || 0) + " pts)" + (q.due ? " due " + q.due : ""));
  }
}
