import React, { Component } from 'react';
import TextBoxSideBarIconComponent from "./components/TalkBlockComponents/TextBoxSideBarIconComponent/TextBoxSideBarIconComponent.jsx"
import ImageBoxSideBarComponent from "./components/TalkBlockComponents/ImageBoxComponent/ImageBoxSideBarComponent/ImageBoxSideBarComponent.jsx"
import ListenBoxSideBarComponent from "./components/TalkBlockComponents/ListenBoxComponent/ListenBoxSideBarComponent/ListenBoxSideBarComponent.jsx"
import SideBarComponent from "./components/SideBarComponent/sideBarComponent.jsx"
import EventCatchSideBarComponent from "./components/EventBlock/EventCatchSideBarComponent/eventCatchSideBarComponent.jsx"
import EventSendSideBarComponent from "./components/EventBlock/EventSendComponent/EventSendSideBarComponent/EventSendSideBarComponent.jsx"
import SwitchSideBarComponent from "./components/SwitchComponents/SwitchSideBarComponent/SwitchSideBarComponent.jsx"
import FlowBuilderComponent from "./components/FlowBuilderComponent/flowBuilderComponent.jsx"

import "./WorkSpace.css";

class WorkSpace extends Component {
  constructor(props){
    super(props);
    this.state = {
      elemsCount: 0
    };
  }
  drag = (e) => {
    let data =  e.target.id;
      e.dataTransfer.setData("objectData", data, this.state.elemsCount );
      this.setState({
        elemsCount: this.state.elemsCount
      });
    }
  render() {
    return (
      <div className="WorkSpace">
        <SideBarComponent>
        <TextBoxSideBarIconComponent drag={this.drag}/>
        <ImageBoxSideBarComponent drag={this.drag}/>
        <ListenBoxSideBarComponent drag={this.drag}/>
        <EventCatchSideBarComponent drag={this.drag}/>
        <EventSendSideBarComponent drag={this.drag}/>
        <SwitchSideBarComponent drag={this.drag}/>
        </SideBarComponent>
        <FlowBuilderComponent/>
      </div>
    );
  }
}

export default WorkSpace;
