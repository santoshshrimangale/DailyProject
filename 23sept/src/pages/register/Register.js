import "./Register.css"

function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Social media</h3>
          <span className="loginDesc">Connct with friends and the world aound yo on socail media</span>
        </div>
        <div className="loginright">
          <div className="loginBox">
            <input placeholder="Uername" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Password Again" className="loginInput" />
            <button className="loginButton">sign Up </button>
            <button className="loginRegisterButton">Log into Account</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register