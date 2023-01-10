const removeKey = (key, obj) => {
    const { [key]: omitted, ...res } = obj;

    console.log("omitted", omitted); // omitted 2
    return res;
};

const obj = {
    foo: 1,
    bar: 2,
};

console.log(removeKey("bar", obj));// { foo: 1 }
