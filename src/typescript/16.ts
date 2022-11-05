export const myObj: Record<string, string[]> = {};

// set option noUncheckedIndexedAccess to TRUE

if (!myObj.foo) {
    myObj.foo = [];
}

myObj.foo.push("bar");
