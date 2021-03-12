
const url = "http://localhost:5050/";

const endpoint = {
    register: "register",
}

async function register () {
  const resData = await fetch(`${url}${endpoint.register}`);
  const data = await resData.json();
  return data;
}



export {
    register,
}