import React from "react";
import { Event } from "../Timeline";
import { Popover, OverlayTrigger } from "react-bootstrap";
import "./TimelineEvent.scss";

interface Props {
  id: number,
  event: Event,
  handleHover: Function,
  leaveHover: Function
}

class TimelineEvent extends React.Component<Props> {
  state = {
    hidden: true
  };

  showDetails = () => {
    this.setState({hidden: false});
    this.props.handleHover(this.props.event);
  }

  hideDetails = () => {
    this.setState({hidden: true});
    this.props.leaveHover(this.props.event);
  }

  render(): React.ReactNode {
    return (
    <OverlayTrigger
        trigger={["click", "hover", "focus"]}
        placement="bottom"
        overlay={
        <Popover id="popover">
          <Popover.Body>
            {
              this.props.event.details.map(detail => {
                return (<li>{detail}</li>);
              })
            }
          </Popover.Body>
        </Popover>
        }
        rootClose={true}
      ><li id={'' + this.props.id} className={"timeline-event-years-" + this.props.event.years + " offset-" + this.props.event.offset}
        onMouseEnter={this.showDetails} onMouseLeave={this.hideDetails}>
          <div hidden={this.state.hidden}>
            <h2>{this.props.event.dates}</h2>
            <h3>{this.props.event.company}</h3>
            <h4>{this.props.event.title}</h4>
          </div>
          <div hidden={!this.state.hidden}>
            <h3>{this.props.event.company}</h3>
          </div>
        </li>
      </OverlayTrigger>
    );
  }
}

export default TimelineEvent;
