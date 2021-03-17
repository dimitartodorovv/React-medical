import { signIn } from "../../data/dataAuth";
import { useState, useEffect } from "react";

function Login(props) {

    const [data, setData] = useState({
        email: '',
        password: '',
        rePass: ''
    });

    const [messages, setMessages] = useState("");
    const [showM, setShowMessage] = useState(false);

    const handleFormData = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData({ ...data, [name]: value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.email && data.password && data.rePass) {

           

            signIn(data).then(data => {
                console.log(data);
                if (data.error) {
                    setShowMessage(true)
                    setMessages(data.error);
                    setTimeout(() => {
                        setShowMessage(false);
                    }, 2000);
                    return;
                }

                
                // localStorage.setItem("logedUser", `${data.username}`)
                setData({ email: '', password: '', rePass: '' })
                props.handleLogin.handleLoged(data.username);
            })

           
        }
    };

    useEffect(() => {
        // handleSubmit(data)
        
    },[])

    return (
        <section className="reg">
            <div className="registration">
                <div className="header">
                    <h1>Happy Healthy</h1>

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