// export function returnWhatIPassIn(input: unknown): unknown {
//     return input;
// };

export function returnWhatIPassIn<T>(input: T): T {
    return input;
};

export const result = returnWhatIPassIn(12);
