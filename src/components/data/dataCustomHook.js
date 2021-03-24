import { useState, useEffect } from "react";

export const useFetch = (url) => {
    
    const [loading, setLoading] = useState(true);
    const [dataBE, setDataBE] = useState([]);

    // const getData = async () => {

    //    await fetch(`${url}`, {
    //         headers: { "Content-Type": "application/json" },
    //         method: `GET`,
    //         credentials: "include",
    //     }).then(res => res.json())
    //         .then(data => {
    //             setDataBE(data)
    //             setLoading(false)
    //         }).catch(err => {
    //             setDataBE()
    //             setLoading(true)
    //         })
    // };
  console.log(url);
    useEffect(() => {
        
        fetch(`${url}`, {
                    headers: { "Content-Type": "application/json" },
                    method: `GET`,
                    credentials: "include",
                }).then(res => res.json())
                    .then(data => {
                        setDataBE(data)
                        setLoading(false)
                    }).catch(err => {
                        setLoading(true)
                    })

    
    }, [url]);
        console.log("COUNT");
    return { loading, dataBE }
};
