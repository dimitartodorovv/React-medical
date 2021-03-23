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
                        setDataBE()
                        setLoading(true)
                    })

    
    }, [url]);

    return { loading, dataBE }
};
