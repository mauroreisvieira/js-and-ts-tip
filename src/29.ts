import { useState } from "react";

const [undefinedThing, setUndefinedThing] = useState();

const [stringThing, setStringThing] = useState<string>();

const [emptyArray, setEmptyArray] = useState([]);
// setEmptyArray([{ id: 1 }])

const [arrayOfIds, setArrayOfIds] = useState<{ id: string }[]>([]);

export { undefinedThing, stringThing, emptyArray, arrayOfIds };
