export let age = 31;

age = 30;

export const name = 'Matt';

const tsPeople = ['Andarist', 'Titian', 'Devansh', 'Anurag'] as const;

tsPeople[0] = "Eddy";

const moreTsPeople = {
    Andarist: 'Andarist',
    Titian: 'Titian',
    Devansh: 'Devansh',
    Anurag: 'Anurag',
} as const;

moreTsPeople.Andarist = 'Tom'
