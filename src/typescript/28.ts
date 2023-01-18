type Name = string;
type GoodName = VeryGoodName | "fred";
type VeryGoodName = "matt";

const isGoodName = (name: VeryGoodName) => name;

isGoodName("matt");

export type Falsy = Name extends GoodName ? true : false;
export type Truly = VeryGoodName extends GoodName ? true : false;
