/**
 * Formats an event date string dynamically ensuring timezone-safe calculation of weekday.
 * e.g. "2026-10-13" -> { fullDate: "13 October 2026", weekday: "Tuesday" }
 */
export function formatEventDate(dateString = "2026-10-13") {
  try {
    let year, month, day;
    if (typeof dateString === "string" && dateString.includes("-")) {
      const parts = dateString.split("-").map(Number);
      year = parts[0];
      month = parts[1] - 1;
      day = parts[2];
    } else {
      const d = new Date(dateString);
      year = d.getFullYear();
      month = d.getMonth();
      day = d.getDate();
    }

    const d = new Date(year, month, day);
    if (isNaN(d.getTime())) {
      return {
        fullDate: "13 October 2026",
        fullDateUpper: "13 OCTOBER 2026",
        weekday: "Tuesday",
        weekdayUpper: "TUESDAY",
        combined: "13 October 2026 (Tuesday)",
      };
    }

    const weekday = d.toLocaleDateString("en-US", { weekday: "long" });
    const fullDate = d.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    return {
      fullDate,
      fullDateUpper: fullDate.toUpperCase(),
      weekday,
      weekdayUpper: weekday.toUpperCase(),
      combined: `${fullDate} (${weekday})`,
      combinedUpper: `${fullDate.toUpperCase()} • ${weekday.toUpperCase()}`,
    };
  } catch {
    return {
      fullDate: "13 October 2026",
      fullDateUpper: "13 OCTOBER 2026",
      weekday: "Tuesday",
      weekdayUpper: "TUESDAY",
      combined: "13 October 2026 (Tuesday)",
    };
  }
}
