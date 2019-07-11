import React from 'react';
import { connect } from "react-redux";
import Loader from 'react-loader-spinner'
class Loading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        if (this.props.loading) {
            return (
                <Loader
                    type="Circles"
                    color="#00BFFF"
                    height="100"
                    width="100"
                />
            );
        }
        else {
            return <div></div>
        }
    }
}

export default connect(
    state => { return { loading: state.image.loading } }
)(Loading)