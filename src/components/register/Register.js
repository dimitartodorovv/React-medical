import "./Register.css";
import {useState} from "react";

function Register() {

    const [data,setData] = useState({
            email: '',
            name: '',
            pass: '',
            rePass: ''
    });
    const [user,setUser] = useState([]);

    const handleFormData = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name);
        console.log(value);
            setData({...data,[name]:value})
    }; 

    const handleSubmit = (e) => {
            e.preventDefault();
        setUser(data);
        console.log(user);
    };


    return (
        <section className="reg">
        <div className="registration">
            <div className="header">
                <h1>Happy Healthy</h1>
            </div>
            <p className="paragraph">For patients</p>
            <form >
                <div className="field">
                    <input type="text" className="email-field" placeholder="Email adress" name="email" value={data.email} onChange={(e) => {handleFormData(e)}} />           
                    <input type="text" className="email-field" placeholder="Username" name="name" value={data.name} onChange={(e) => {handleFormData(e)}}/>           
                    <input type="password" className="pass-field" placeholder="Password" name="pass" value={data.password} onChange={(e) => {handleFormData(e)}}/>          
                    <input type="password" className="repPass-field" placeholder="Repeat Password" name="rePass" value={data.rePassword} onChange={(e) => {handleFormData(e)}}/>  
                  
                    <span className="check-pass"></span>  
                    <button type="submit" className="btn-registration" onClick={(e) => {handleSubmit(e)}}>Forward</button>
                </div>
            </form>
        </div>
    </section>
        
    );
}

export default Register;