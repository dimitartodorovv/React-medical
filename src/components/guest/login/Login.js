import {signIn} from "../../data/data";
import {useState} from "react";

function Login(props) {
    console.log("FROM NOT LOGED USER");
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



    const handleSubmit =  (e) => {
        e.preventDefault();
        if(data.email &&  data.password && data.rePass){
           
            console.log(data);
            props.handleLogin.handleLoged(true);
            localStorage.setItem("logedUser", "userLog")
        //   signIn(data).then(data => {

        //     if(data.error) {
        //         setShowMessage(true)
        //         setMessages(data.error);
        //         setTimeout(() => {
        //             setShowMessage(false);    
        //         }, 1000);
        //         return;
        //     }
               
        //     setData({email: '',password: '',rePass: ''})
              
        //   })
         

    }
};


    return (
        <section className="reg">
            <div className="registration">
                <div className="header">
                    <h1>Happy Healthy</h1>
                    <h4>Login</h4>
                </div>
                <p className="paragraph">For patients</p>
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