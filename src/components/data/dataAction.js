
function getData(url) {
    
   let result = fetch(url, {
        headers: { "Content-Type": "application/json" },
        method: `GET`,
        credentials: "include",
    }).then(res => res.json())
    .then(data => {
        return data
    })
    .catch(err => {
        return err
    })

    return result
};

function appointmentMake(url,data) {
    
    let result = fetch(url, {
        headers: {"Content-Type": "application/json"},
        method: "POST",
        credentials: "include",
        body: JSON.stringify(data)
    }).then(res => res.json())
    .then(data => {return data})
    .then(err => {return err}) 

    return result
};


export {
    getData,
    appointmentMake,
}