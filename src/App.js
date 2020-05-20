import React, {Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
    state = {
        userOutputName: [
            {name:"stateSurya"},
            {name:"stateChan"}
        ]
    }

    userNameChangeHandler = (event) => {
        this.setState({
            userOutputName: [
                {name:event.target.value},
                {name:"handlerChan"}
            ]
        })
    }
    render() {
        return (
            <div className="App">
                <UserInput
                change={this.userNameChangeHandler}
                otherName={this.state.userOutputName[0].name}/>
                <UserOutput
                    name={this.state.userOutputName[0].name}/>
                <UserOutput
                    change={this.userNameChangeHandler}
                    name={this.state.userOutputName[0].name}/>
                <UserOutput name="Chan"/>
            </div>
        );
    }
}

export default App;
