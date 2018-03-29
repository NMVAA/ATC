import React, { Component } from 'react';
import TalkComponent from "./components/TalkComponent/talkComponent.jsx"
import SideBarComponent from "./components/SideBarComponent/sideBarComponent.jsx"
import AskComponent from "./components/AskComponent/askComponent.jsx"
import ActionComponent from "./components/ActionComponent/actionComponent.jsx"
import FlowBuilderComponent from "./components/FlowBuilderComponent/flowBuilderComponent.jsx"
import "./App.css";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      elemsCount: 0
    };
  }
  drag = (e) => {
      e.dataTransfer.setData("text/plain", e.target.id, this.state.elemsCount );
      this.setState({
        elemsCount: this.state.elemsCount
      });
    }
  render() {
    return (
      <div className="App">
        <SideBarComponent>
        <TalkComponent drag={this.drag}/>
        <AskComponent drag={this.drag}/>
        <ActionComponent drag={this.drag}/>
        </SideBarComponent>
        <FlowBuilderComponent/>
      </div>
    );
  }
}

export default App;
