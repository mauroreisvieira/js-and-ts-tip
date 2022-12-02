// https://www.linkedin.com/posts/niksumeiko_cleancode-javascript-activity-6985932162764025856-M_pV?utm_source=share&utm_medium=member_desktop

type Person = {
    name: string;
    married?: boolean;
    pair?: Person,
};

const data: Person[] = [
    {
        name: "John",
    },
    {
        name: "Mark",
    },
    {
        name: "Ronny",
    },
    {
        name: "Freed",
        pair: {
            name: "Jane"
        }
    },
    {
        name: "Ronny",
        pair: {
            name: "Peter"
        }
    },
    {
        name: "Ken",
        pair: {
            name: "Mary"
        }
    }
];

export const first = data.filter(({ pair }) => {
    console.log("Filter");
    return pair;
}).map((person) => {
    console.log("Map");
    return {
        ...person,
        pair: {
            ...person.pair,
            married: false,
        }
    }
});

export const second = data.reduce((acc: Person[], cur: Person) => {
    console.log("Reduce");

    if (cur.pair) {
        acc.push({
            ...cur,
            pair: {
                ...cur.pair,
                married: false,
            }
        });
    }

    return acc;
}, []);

