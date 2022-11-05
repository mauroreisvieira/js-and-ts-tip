export const fruitCounts = {
    apple: 1,
    pear: 4,
    banana: 26,
};

type FruitCounts = typeof fruitCounts;

type NewSingleFruitCount = {
    [K in keyof FruitCounts]: {
        [K2 in K]: number
    };
}[keyof FruitCounts];

export const singleFruitCount: NewSingleFruitCount = {
    apple: 1,
};
