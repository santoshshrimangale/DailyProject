import axios from "axios";
import React from "react";
import "./App.css";

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            advice: ''
        }
    }
    componentDidMount() {
        this.fetchAdvice()
    }
    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                const advice = response.data.slip.advice
                this.setState({advice:advice})
            })
            .catch((error) => {
                console.log(error)
            })

    }
    render() {
        const {advice}=this.state
        return (
          <div className="app">
            <div className="card">
                <h1 className="heading">{advice}</h1>
                <button className="button" onClick={this.fetchAdvice}>
                    <span>GIVE ME ADVICE!</span>
                </button>
                    
            </div>
          </div>
        )
    }
}
export default App;