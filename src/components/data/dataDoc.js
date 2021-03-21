import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [loading, setLoading] = useState(true);
    const [dataDoctors, setdataDoctors] = useState([]);


    const getData = async (url) => {

        fetch(`${url}`, {
            headers: { "Content-Type": "application/json" },
            method: 'GET',
            credentials: "include",
        }).then(res => res.json())
            .then(data => {
                setdataDoctors(data)
                setLoading(false)
            }).catch(err => {

                setLoading(true)
            })
    };

    useEffect(() => {
        getData(url);
    }, [url]);

    return { loading, dataDoctors }
};
