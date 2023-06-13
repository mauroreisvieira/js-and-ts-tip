class DataStore {
    constructor() {
        this.data = new Map();
        this.change = new Map();
        this.dataEvent = new Map();
    }

    add(key, value) {
        if (this.change.has(key)) {
            if (value !== this.data.get(key)) {
                this.change.get(key).call(this, this.data.get(key), value, key);
            }
        }
        if (this.dataEvent.has(key)) {
            this.dataEvent.get(key).call(this, this.data.get(key), value, key);
        }

        this.data.set(key, value);
    }

    remove(key) {
        this.data.delete(key);
    }

    has(name) {
        if (this.data.has(name)) {
            return true;
        }

        return false;
    }

    on(event, callback) {
        const p = event.indexOf(":");
        if (p != -1) {
            if (event.substring(0, p) === "change") {
                this.change.set(event.substring(p + 1), callback);
            }
        } else {
            this.dataEvent.set(event, callback);
        }
    }
}

const ds = new DataStore();
ds.add("name", "Joe");
ds.add("age", 30);
console.log(`ds.has("name") = ${ds.has("name")}`);
console.log(`ds.add('age', 30)`);

console.log(`ds.has("age") = ${ds.has("age")}`);

console.log(`Sub change:name event`);
ds.on("change:name", (oldVal, newVal, key) => {
    console.log(`The ${key} changes from ${oldVal} to ${newVal}`);
});

console.log(`ds.add('name', 'Tom')`);
ds.add("name", "Tom");

console.log(`Sub name event`);
ds.on("name", (oldVal, newVal, key) => {
    console.log(`Set ${key} to ${newVal}. The old value is ${oldVal}`);
});

console.log(`ds.add('name', 'Nick')`);
ds.add("name", "Nick");
