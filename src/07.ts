export const myObject = {
    a: 1,
    b: 2,
    c: 3,
};

const objectKeys: <Obj>(o: Obj) => (keyof Obj)[] = Object.keys;

objectKeys(myObject).forEach((key) => {
    console.log(myObject[key]);
});
