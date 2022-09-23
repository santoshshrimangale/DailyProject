import "./Login.css"

function Login() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Social media</h3>
                <span className="loginDesc">Connct with friends and the world aound yo on socail media</span>
            </div>
            <div className="loginright">
                <div className="loginBox">
                    <input placeholder="Email" className="loginInput"/>
                      <input placeholder="Password" className="loginInput"/>
                      <button className="loginButton">Log In</button>
                      <span className="loginForgot">Forgot Password?</span>
                      <button className="loginRegisterButton">Create a New Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login