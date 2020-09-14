import React, { Component } from 'react'

export default class Result extends Component {
    state = {
        submit: false
    }
    check = () => {
        // var score = 0;
        console.log(this.props.correct);
        // if (this.props.correct == this.props.selected) {
        //     score += 1;
        // }
        // return this.props.correct;
    }
    render() {
        if (this.state.submit === true) return null
        return (
            <>
                {this.check}
                <span onClick={() => { this.setState({ submit: true }) }}><i className="material-icons">close</i></span>
                {/* <span><i className="material-icons">close</i></span> */}
                <div className="center-align">
                    <h4>Your score : {this.check} of 5</h4>
                </div>
            </>
        )
    }
}