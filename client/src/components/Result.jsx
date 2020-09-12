import React, { Component } from 'react'

export default class Result extends Component {
    render() {
        return (
            <>
                <span><i className="material-icons">close</i></span>
                <div className="center-align">
                    <h5>Random quiz successfully created</h5>
                    <p>Your score out of 5</p>
                </div>
            </>
        )
    }
}