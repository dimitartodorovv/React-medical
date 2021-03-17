import {URL,END_POINT} from '../../config/configVar';


async function makeRegister({email,username,password,rePass}) {

    let result = await fetch(`${URL}${END_POINT.REGISTER}`,{
      headers: {"Content-Type": "application/json"},
      method: "POST",
      credentials: "include",
      body: JSON.stringify({email,username,password,rePass})})
        .then(res => res.json())
        .then(data => {return data})
   
        return result      
}

async function signIn({email,password,rePass}) {

    let result = await fetch(`${URL}${END_POINT.LOGIN}`,{
      headers: {"Content-Type": "application/json"},
      method: "POST",
      credentials: "include",
      body: JSON.stringify({email,password,rePass})}).then(res => res.json())
        .then(data => {return data})

        return result
}

async function signOut() {
  
  let result = await fetch(`${URL}${END_POINT.LOGOUT}`,{
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