type Name = string;
type GoodName = VeryGoodName | "fred";
type VeryGoodName = "matt";

const isGoodName = (name: VeryGoodName) => name;

isGoodName("matt");

// export type Result = Name extends GoodName ? true : false;
export type Result = VeryGoodName extends GoodName ? true : false;
