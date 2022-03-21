export type DeepPartial<T> = T extends Function
    ? T
    : T extends Array<infer InferedArrayMember>
    ? DeepPartialArray<InferedArrayMember>
    : T extends object
    ? DeepPartialObject<T>
    : T | undefined;

interface DeepPartialArray<T> extends Array<DeepPartial<T>> {}

type DeepPartialObject<T> = {
    [key in keyof T]?: DeepPartial<T[key]>;
};

interface Post {
    id: string;
    comments: {
        value: string
    }[];
    meta: {
        name: string;
        description: string;
    };
};

// Since we use meta will be required to add name and description.
const one: Partial<Post> = {
    id: "1",
    meta: {
        name: "Post 1",
    //  description: "Lorem"
    }
};

const two: DeepPartial<Post> = {
    id: "1",
    meta: {
        name: "Post 1"
    }
};
