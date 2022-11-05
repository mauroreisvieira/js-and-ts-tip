const removeKey = (key, obj) => {
    const { [key]: omitted, ...res } = obj;

    console.log("omitted", omitted);
    return res;
};

const obj = {
    foo: 1,
    bar: 2,
};

console.log(removeKey("bar", obj));
