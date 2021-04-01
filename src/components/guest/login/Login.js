import { useState, useContext } from "react";
import { signIn } from "../../data/dataAuth";
import { PatientContext } from "../../pationtContext";

function Login(props) {

    const [data, setData] = useState({
        email: '',
        password: '',
        rePass: ''
    });

    const [,setPatientInfo] = useContext(PatientContext);

    const [messages, setMessages] = useState("");
    const [showM, setShowMessage] = useState(false);
    // const [clickBtn,setclickBtn] = useState(false);

    const handleFormData = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData({ ...data, [name]: value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.email && data.password && data.rePass) {

            signIn(data).then(data => {
             
                if (data.error) {
                    setShowMessage(true)
                    setMessages(data.error);
                    setTimeout(() => {
                        setShowMessage(false);
                    }, 2000);
                    return;
                }
                
               
                // setclickBtn(true)
                setPatientInfo(data)
                 localStorage.setItem("logedUser", JSON.stringify(data));
            
                // setData({ email: '', password: '', rePass: '' })
            })
          
            props.handleLogin.handleLoged(true);
        }
    };
    //CHANGE USEEFFECT
    // useEffect(() => {
        
    //     if(clickBtn){
    //         props.handleLogin.handleLoged(true);
    //     }
        
    // },[props,clickBtn])

    return (
        <section className="reg">
            <div className="registration">
                <div className="header">
                    <h1>Superdoc</h1>

                </div>
                <p className="paragraph">Login</p>
                <form >
                    <div className="field">

                        <input type="text" className="email-field" placeholder="Email adress" name="email" value={data.email} onChange={(e) => { handleFormData(e) }} />
                        <input type="password" className="pass-field" placeholder="Password" name="password" value={data.password} onChange={(e) => { handleFormData(e) }} />
                        <input type="password" className="repPass-field" placeholder="Repeat Password" name="rePass" value={data.rePass} onChange={(e) => { handleFormData(e) }} />

                        {showM ? <span className="check-pass">{messages}</span> : null}

                        <button type="submit" className="btn-registration" onClick={handleSubmit}>Forward</button>
                    </div>
                </form>
               
            </div>
        </section>

    );
}

export default Login;