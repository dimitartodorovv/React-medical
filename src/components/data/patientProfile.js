

function updSettings(url,data) {

    const result = fetch(url,{
        headers: {"Content-Type": "application/json"},
        method: "POST",
        credentials: "include",
        body: JSON.stringify(data)
    }).then(res => res.json())
        .then(data => {return data})
        .catch(err => {return err})

       return result 
}

function sendSetting(url,data) {

        const result = fetch(url, {
            headers: {"Content-Type": "application/json"},
            method: "POST",
            credentials: "include",
            body: JSON.stringify(data)
        }).then(res => res.json())
        .then(data => {return data})
        .catch(err => {return err})

        return result
}

export {
    updSettings,
    sendSetting,
}