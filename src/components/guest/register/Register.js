import "./Register.css";
import {useHistory, Link} from "react-router-dom"
import {useState,useEffect} from "react";
import {makeRegister} from "../../data/dataAuth";

function Register() {

    const [data,setData] = useState({
            email: '',
            username: '',
            password: '',
            rePass: ''
    });


    let history = useHistory();


    const [messages,setMessages] = useState("");
    const [showM,setShowMessage] = useState(false);
    
    const handleFormData =  (e) => {
        const name = e.target.name;
        const value = e.target.value;
            setData({...data,[name]:value})
    }; 

  

    const handleSubmit =  (e) => {
            e.preventDefault();
            if(data.email && data.username && data.password && data.rePass){
               
              makeRegister(data).then(data => {
                console.log(data);
                if(data.error) {
                    setShowMessage(true)
                    setMessages(data.error);
                    setTimeout(() => {
                        setShowMessage(false);    
                    }, 2000);
                    return;
                }
               
                    setData({email: '',username: '',password: '',rePass: ''})
                    history.push("/login")
              })
             

            }
    };


    return (
        <section className="reg">
        <div className="registration">
            <div className="header">
                <h1>Happy Healthy</h1>
            </div>
            <p className="paragraph">Registration</p>
            <form >
                <div className="field">
                    <input type="text" className="email-field" placeholder="Email adress" name="email" value={data.email} onChange={(e) => {handleFormData(e)}} />           
                    <input type="text" className="email-field" placeholder="Username" name="username" value={data.username} onChange={(e) => {handleFormData(e)}}/>           
                    <input type="password" className="pass-field" placeholder="Password" name="password" value={data.password} onChange={(e) => {handleFormData(e)}}/>          
                    <input type="password" className="repPass-field" placeholder="Repeat Password" name="rePass" value={data.rePass} onChange={(e) => {handleFormData(e)}}/>  
                
                {showM ?   <span className="check-pass">{messages}</span> : null}
                    
                    <button type="submit" className="btn-registration" onClick={handleSubmit}>Forward</button>
                    <p>If you have registration: <Link  className="tologin" to="/login">Sign in</Link> 
                        </p> 
                </div>
            </form>
        </div>
    </section>
        
    );
}

export default Register;