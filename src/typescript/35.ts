// ---- Object Types ---------------------------------------------------
type User = {
    id: string;
    name: string;
    age: number;
};

// all options will be optional
export type PartialUser = Partial<User>;

// all options will be required
export type RequiredUser = Required<User>;

// remove properties from object
export type OmitUser = Omit<User, "id" | "name">;

// get properties from object
export type PickUser = Pick<User, "id" | "name">;

// get properties from object and make it optional
export type PartiallyPickerUser = Partial<Pick<User, "id" | "name">>;

// make object read only
export type ReadonlyUser = Readonly<User>;

type Mutable<T> = {
    -readonly [K in keyof T]: T[K];
};

// take object read only and make it  mutable
export type MutableUser = Mutable<ReadonlyUser>;

// ---- Union Types ---------------------------------------------------
type Role = "admin" | "user" | "anonymous";

// remove multiple members from union
export type NonAdminRole = Exclude<Role, "admin" | "user">;

type RoleAttributes =
    | { role: "admin"; orgId: string }
    | { role: "user" }
    | { role: "anonymous" };

// grab out specific member of union
export type AdminRole = Extract<RoleAttributes, { role: "admin" }>;

// ---- Functions ---------------------------------------------------
type Func = (a: number, b: string) => number;

// get access to return type
export type ReturnValue = ReturnType<Func>;

// get a tuple of the functions parameters
export type Params = Parameters<Func>;


// ---- Types for Types ---------------------------------------------------
type MaybeString = string | null | undefined;

// remove null or undefined
export type DefinitelyString = NonNullable<MaybeString>;

type PromiseString = Promise<string>;

// unwrap the promises
export type Result = Awaited<PromiseString>;

// ---- Challenge ---------------------------------------------------
const func = async () => {
    return {
        id: 123,
    };
};

export type ExtractType = Awaited<ReturnType<typeof func>>;
