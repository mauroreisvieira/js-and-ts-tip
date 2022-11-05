export type Obj = {
    a: "a";
    a2: "a2";
    a3: "a3";
    b: "b";
    b1: "b2";
}

// type ValuesOfKeysStartingWithA<Obj, _ExtractedKeys extends keyof Obj = Extract<keyof Obj, `a${string}`>> = {
//     [K in _ExtractedKeys]: Obj[K];
// }[_ExtractedKeys];
// export type NewUnion = ValuesOfKeysStartingWithA<Obj>;

// interface Scope<Obj> {
//   LetKeys: Extract<keyof Obj, `a${string}`>;
//   LetMatch: Obj[this["LetKeys"]];
//   LetResult: this["LetMatch"];
// }

// type Thing<Obj> = Scope<Obj>["LetResult"];

type ValuesOfKeysStartingWithA<Obj> = Obj[Extract<keyof Obj, `a${string}`>]
export type NewUnion = ValuesOfKeysStartingWithA<Obj>;
