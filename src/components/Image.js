/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
class Image extends React.Component {

    render() {
        return (
            <div>
                <img src={this.props.src} hidden={this.props.hidden} className="img-fluid" alt="Responsive image" />
            </div>
        )
    }
}
export default Image;
