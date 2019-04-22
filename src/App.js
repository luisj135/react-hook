import React, { Component } from 'react';
import NavContainer from './components/NavContainer/NavContainer'
import Header from './components/Header/Header'
import ContentPage from './components/ContentPage/ContentPage'
import BuildComponent from './components/BuildComponent/BuildComponent'
import { Statepin } from './components/Context/Statepin'

class App extends Component {
  constructor(props){
    super (props);
    this.state = {
      pinActivate : false,
      buildActivate : false,
      updatePin: this.updatePin,
      updateBuild: this.updateBuild
    }
    this.updatePin = this.updatePin.bind(this);
  }

  updatePin = ()=>{
    this.setState({
      pinActivate: !this.state.pinActivate
    })
  }

  updateBuild = ()=>{
    this.setState({
      buildActivate: !this.state.buildActivate
    })
  }
  render() {
    return (
      <Statepin.Provider
        value={this.state}
      >
        <div className={`App ${(this.state.pinActivate)?'menu-pin':''}`}>
          <Statepin.Consumer>
            {
              context => (
                <NavContainer
                  StatepinProps = {context}
                />
              )
            }
          </Statepin.Consumer>
          <div className="page-container">
            <Header />
            <ContentPage />
          </div>
          <div className="builder">
            <Statepin.Consumer>
              {
                context => (
                  <BuildComponent
                    StatepinProps = {context}
                  />
                )
              }
            </Statepin.Consumer>
          </div>
        </div>
      </Statepin.Provider>
    );
  }
}

export default App;
