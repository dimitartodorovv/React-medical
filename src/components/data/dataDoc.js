import {useState, useEffect} from "react";
import {URL,END_POINT} from "../../config/configVar";


export const useFetch = () => {
        const [loading,setLoading] = useState(true);
        const [data,setData] = useState([]);


        const getData = async () => {
               await fetch(`${URL}${END_POINT.DOCTORS}`,{
                headers: {"Content-Type": "application/json"},
                method: 'GET',
                credentials: "include", 
                }).then(res => res.json())
                    .then(data => {
                        console.log(data);
                        setData(data)
                        setLoading(false)
                    }).catch(err => {
                        console.log(err);
                        setLoading(true)
                    })
        }

        useEffect(() => {
            getData()
        },[])

        return {loading,data}
}
