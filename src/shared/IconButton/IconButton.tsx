import React from "react";
import "./IconButton.scss";

interface Props {
    iconPath: string,
    expandedText: string
}

class IconButton extends React.Component<Props> {
    state = {};

    render() {
        return (
            <>
            <div className="btn interactive-button">
                <img className="icon-button-icon" src={ this.props.iconPath } alt=""></img> 
                <p className="icon-button-expanded-text">{this.props.expandedText}</p>
            </div>
            </>
        )
    }
}

export default IconButton;