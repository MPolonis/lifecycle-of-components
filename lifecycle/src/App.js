import React, { Component } from 'react';
import { Message } from "./Message";
// import { List } from "./List";
// import { ExternalCounter } from "./ExternalCounter";
import { DirectionDisplay } from "./DirectionDisplay";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      // showMessage: true
      //counterLeft: 0,
      //counterRight: 0
    }
  }

  // incrementCounter = (counter) => {
  //   if (counter === "left") {
  //     this.setState({counterLeft: this.state.counterLeft + 1});
  //   } else {
  //     this.setState({counterRight: this.state.counterRight + 1});
  //   }
    
  // }

  // handleChange = () => {
  //   this.setState({showMessage: !this.state.showMessage});
  // }

  changeCounter = (val) => {
    this.setState({counter: this.state.counter + val})
  }

  render() {
    console.log("Komponent App, metoda render");
    return (
      <div className="container text-center">
        <div className="row p-2">
          {/* <div className="col-4">
            <div className="form-check">
              <input type="checkbox" className="form-check-input"
                checked={this.state.showMessage}
                onChange={this.handleChange} />
              <label className="form-check-lebel">Pokaż</label>
            </div>
           {this.state.showMessage &&
            <Message message={`Licznik: ${this.state.counter}`}
              callback={this.incrementCounter}
              text="Inkrementuj licznik!" />
            }
          </div>
          <div className="col-4">
            <List />
          </div>
          <div className="col-4">
            <ExternalCounter />
          </div> */}
          {/* <div className="col-6">
            <Message 
              message={`Lewy: ${this.state.counterLeft}`}
              callback={() => this.incrementCounter("left")}
              text="Inkremetuj lewy licznik" />
          </div>
          <div className="col-6">
            <Message 
              message={`Prawy: ${this.state.counterRight}`}
              callback={() => this.incrementCounter("right")}
              text="Inkremetuj prawy licznik" />
          </div> */}
          <DirectionDisplay value={this.state.counter} />
          <div className="text-center">
            <button className="btn btn-primary m-1"
              onClick={() => this.changeCounter(-1)}>Pomniejsz</button>
            <button className="btn btn-primary m-1"
              onClick={() => this.changeCounter(1)}>Powiększ</button>
          </div>
        </div>
      </div>
    )
  }
}


