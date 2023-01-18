export type Setting = string | number | { [key: string]: Setting } | Setting[];

type Settings = Record<string, Setting>;

const mySettings = {
    title: "Wes Bos",
    size: 200,
    overrides: [{ "font-size": "20px" }],
    styleConfig: {
        color: "red",
    },
} satisfies Settings;

mySettings.title = "New Title";
console.log(mySettings.size);
// Invalid Proprieties
mySettings.limit = 200;
