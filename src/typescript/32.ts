// NOT CORRECT
// export type Result<T> = {
//     error?: string;
//     data?: T;
// };

// CORRECT - ISH
export type Result<T> =
    | {
          error: string;
      }
    | {
          data: T;
      };

export const test = (result: Result<number>) => {
    if ("error" in result) {
        result.error;
    } else {
        result.data;
    }
};

// DISCRIMINATED UNION
export type Result2<T> =
    | {
          type: "error";
          error: string;
      }
    | {
          type: "success";
          data: T;
      };

export const test2 = (result: Result2<number>) => {
    if (result.type === "error") {
        result.error;
    } else {
        result.data;
    }
};

// TYPE PREDICATE
const isError = <T>(result: Result<T>): result is { error: string } => {
    return "error" in result;
}

export const test3 = (result: Result2<number>) => {
    if (isError(result)) {
        result.error;
    } else {
        result.data;
    }
};
