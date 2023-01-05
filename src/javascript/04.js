const arr1 = [
    {
        name: "Enzo",
    },
    {
        name: "Messi",
        goals: 10,
        assists: 50,
        games: 20,
    },
    {
        name: "Ronaldo",
        goals: 50,
        assists: 10,
        games: 20,
    },
    {
        name: "Felix",
        goals: 40,
        assists: 40,
        games: 20,
    },
    {
        name: "Neymar",
        goals: 20,
        assists: 10,
        games: 20,
    },
];

const arr2 = [
    {
        name: "Messi",
        goals: 2,
        assists: 0,
        games: 20,
        reds: 0,
        yellows: 1,
    },
    {
        name: "Ronaldo",
        goals: 0,
        assists: 1,
        games: 20,
        reds: 1,
        yellows: 2,
    },
    {
        name: "Enzo",
        goals: 1,
    },
    {
        name: "Felix",
        goals: 1,
        assists: 2,
        games: 20,
        reds: 0,
        yellows: 0,
    },
    {
        name: "Neymar",
        goals: 20,
        assists: 10,
        games: 20,
        reds: 1,
        yellows: 4,
    },
];

function addItUp(...arrays) {
    return arrays.flat().reduce((prev, curr) => {
        const { name, ...points } = curr;
        // first check if this person is new
        prev[name] = prev[name] || {};
        // Loop over each of their properties and add them up
        Object.entries(points).forEach(([key, value]) => {
            prev[name][key] = prev[name][key] || 0;
            prev[name][key] += value;
        });
        return prev;
    }, {});
}

const result = addItUp(arr1, arr2);
console.table(result);
