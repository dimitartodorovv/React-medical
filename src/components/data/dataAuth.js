
const url = "http://localhost:5050/";

const endpoint = {
    REGISTER: "auth/registration",
    LOGIN: "auth/login",
    LOGOUT: "auth/logout"
}


async function makeRegister({email,username,password,rePass}) {

    let result = await fetch(`${url}${endpoint.REGISTER}`,{
      headers: {"Content-Type": "application/json"},
      method: "POST",
      credentials: "include",
      body: JSON.stringify({email,username,password,rePass})})
        .then(res => res.json())
        .then(data => {return data})
   
        return result      
}

async function signIn({email,password,rePass}) {

    let result = await fetch(`${url}${endpoint.LOGIN}`,{
      headers: {"Content-Type": "application/json"},
      method: "POST",
      credentials: "include",
      body: JSON.stringify({email,password,rePass})}).then(res => res.json())
        .then(data => {return data})

        return result
}

async function signOut() {
  
  let result = await fetch(`${url}${endpoint.LOGOUT}`,{
    headers: {"Content-Type": "application/json"},
    method: "POST",
    credentials: "include"}).then(res => res.json())
      .then(data => {return data})

      return result
}

export {
    makeRegister,
    signIn,
    signOut,
}