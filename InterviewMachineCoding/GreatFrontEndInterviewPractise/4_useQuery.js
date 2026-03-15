import {DependencyList, useEffect, useState} from "react";

/**
 * @template T
 * @param {() => Promise<T>} fn
 * @param {import("react").DependencyList} deps
 */
export default function useQuery(fn, deps=[]) {
    const [state, setState]=useState({status: "loading"});

    useEffect(() => {
        setState({status: "loading"});
        let isCancelled=false;
        fn()
            .then((data) => {
                if (!isCancelled) {
                    setState({status: "success", data});
                }
            })
            .catch((error) => {
                if (!isCancelled) {
                    setState({status: "error", error});
                }
            });

        return () => {
            isCancelled=true;
        };
    }, [...deps]);

    return state;
}
