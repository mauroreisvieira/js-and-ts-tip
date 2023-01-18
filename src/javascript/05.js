const letters = ["B", "a", "C", "d", "á", "b", 1, 2, 3, 22];

letters.sort(); //?

letters.sort((a, b) => typeof a === "string" && b === "string" ? a.localeCompare(b) : a - b) //?


