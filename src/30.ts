type Fruit =
    | {
          name: "apple";
          color: "red";
      }
    | {
          name: "banana";
          color: "yellow";
      }
    | {
          name: "orange";
          color: "orange";
      };

export type TransformedFruit = {
    [F in Fruit as F["name"]]: `${F["name"]}:${F["color"]}`;
}[Fruit["name"]];

export type Expected = "apple:red" | "banana:yellow" | "orange:orange";
