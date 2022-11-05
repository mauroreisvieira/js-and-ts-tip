export interface APIData {
    "maps:longitude": string;
    "maps:latitude": string;
}

type RemoveMaps<T> = T extends `maps:${infer U}` ? U: T;

type RemoveMapsFromObj<T> = {
    [K in keyof T as RemoveMaps<K>]: T[K];
}

export type DesiredShape = RemoveMapsFromObj<APIData>;

