/* eslint-disable @typescript-eslint/no-unused-vars */
export const getDeepValue = <
    Obj,
    FirstKey extends keyof Obj,
    SecondKey extends keyof Obj[FirstKey]
>(
    obj: Obj,
    firstKey: FirstKey,
    secondKey: SecondKey
): Obj[FirstKey][SecondKey] => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return {} as any;
};

const obj = {
    foo: {
        a: true,
        b: 2,
    },
    bar: {
        c: 'cool',
        d: 3,
    },
};

getDeepValue(obj, 'foo', 'a');
