import { useState, useEffect } from "react";

export const useFetch = (url) => {
    
    const [loading, setLoading] = useState(true);
    const [dataBE, setDataBE] = useState([]);

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
        
    return { loading, dataBE }
};
