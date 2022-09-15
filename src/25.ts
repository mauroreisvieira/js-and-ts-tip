export interface ColorVariants {
    primary: "blue";
    secondary: "red";
    tertiary: "green";
}

export type PrimaryColor = ColorVariants["primary"];

export type NonPrimaryColor = ColorVariants["secondary" | "tertiary"];

export type EveryColor = ColorVariants[keyof ColorVariants];

export type Letters = ["a", "b", "c"] ;

export type AOrB = Letters[0 | 1];

export type Letter = Letters[number];

interface UserRoleConfig {
    user: ["view", "create", "update"],
    superAdmin: ["view", "create", "update", "delete"],
}

export type Role = UserRoleConfig[keyof UserRoleConfig][number];
