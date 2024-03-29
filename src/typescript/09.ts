/* eslint-disable @typescript-eslint/no-unused-vars */
export const makeKeyRemover =
    <Key extends string>(keys: Key[]) =>
    <Obj>(obj: Obj): Omit<Obj, Key> => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return {} as any;
    };

const keyRemover = makeKeyRemover(['a', 'b']);

const newObject = keyRemover({ a: 1, b: 2, c: 3 });

newObject.c;
