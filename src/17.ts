export type Letters = 'a' | 'b' | 'c';

export type RemoveC<T> = T extends 'c' ? never : T;

export type Option1 = Exclude<Letters, 'c'>;
export type Option2 = RemoveC<Letters>;
