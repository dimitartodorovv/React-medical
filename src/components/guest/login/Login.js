import {signIn} from "../../data/dataAuth";
import {useState} from "react";

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

    // let userSS = 'userSession'
    // var match = document.cookie.match(new RegExp('(^| )' + userSS + '=([^;]+)'));
   

    // if(match[2]) {
    //     localStorage.setItem("logedUser", `outside`)

    // }

    const handleSubmit =  (e) => {
        e.preventDefault();
        if(data.email &&  data.password && data.rePass){
           
           
            
          signIn(data).then(data => {
            console.log(data);
            if(data.error) {
                setShowMessage(true)
                setMessages(data.error);
                setTimeout(() => {
                    setShowMessage(false);    
                }, 2000);
                return;
            }

            props.handleLogin.handleLoged(true);
            localStorage.setItem("logedUser", `${data.username}`)
            setData({email: '',password: '',rePass: ''})
              
          })
         

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