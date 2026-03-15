import {useState} from "react";

export default function useDefault(defaultValue, initialValue) {
    const [value, setValue]=useState(
        initialValue!==null&&initialValue!==undefined
            ? initialValue
            :defaultValue,
    );

    const setFn=(args) => {
        if (args===null||args===undefined) {
            setValue(defaultValue);
        } else {
            setValue(args);
        }
    };

    return [value, setFn];
}
