// Given an Array of objects:
const blogPosts = [
    { id: 1, name: "one", tags: ["a", "b"], published: "2016-10-31" },
    { id: 38, name: "two", tags: ["c"], published: "2019-01-05" },
    { id: 41, name: "three", tags: ["b"], published: "2021-06-06" },
];

// Create reusable search predicates using `this`:
function hasName(item) {
    return item.name === this.name;
}

function hasTag(item) {
    return item.tags.includes(this.tag);
}

function publishedAfter(item) {
    return new Date(item.published) > this;
}

// ...and specify the comparison value dynamically:
console.log(blogPosts.find(hasName, { name: "one" })); // {name:'one'…}
console.log(blogPosts.findIndex(hasName, { name: "two" })); // 1
console.log(blogPosts.every(hasTag, { tag: "b" })); // false
console.log(blogPosts.filter(hasTag, { tag: "b" })); // [{name:'one'…}, {name:'three'…}]
console.log(blogPosts.filter(publishedAfter, new Date(2020, 12, 25))); // [{name:'three'…}]

// Performance, and word of warning
function matches(item) {
    const actual = item[this.property];
    switch (this.comparator) {
        case "===":
            return actual === this.value;
        case ">":
            return actual > this.value;
        case "<":
            return actual < this.value;
        case "includes":
            return actual.includes(this.value);
    }
}

function compare(property, comparator, value) {
    return { property, comparator, value };
}

console.log(blogPosts.filter(matches, compare("id", ">", 40)));
console.log(blogPosts.filter(matches, compare("tags", "includes", "b")));

