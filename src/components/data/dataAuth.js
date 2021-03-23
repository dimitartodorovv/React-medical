import {URL,END_POINT} from '../../config/configVar';


 function makeRegister({email,username,password,rePass}) {

    let result = fetch(`${URL}${END_POINT.REGISTER}`,{
      headers: {"Content-Type": "application/json"},
      method: "POST",
      credentials: "include",
      body: JSON.stringify({email,username,password,rePass})})
        .then(res => res.json())
        .then(data => {return data})
   
        return result      
}

 function signIn({email,password,rePass}) {

    let result =  fetch(`${URL}${END_POINT.LOGIN}`,{
      headers: {"Content-Type": "application/json"},
      method: "POST",
      credentials: "include",
      body: JSON.stringify({email,password,rePass})}).then(res => res.json())
        .then(data => {return data})

        return result
}

 function signOut() {
  
  let result =  fetch(`${URL}${END_POINT.LOGOUT}`,{
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