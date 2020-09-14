import React, { Component } from 'react'
import Result from './Result';

export default class Question extends Component {
    state = {
        answer: this.props.options,
        correct: this.props.correct,
        seleted: []
    };
    render() {
        if (this.props.done === "no") {
            return (
                <>
                    <h6>{this.props.question}</h6>
                    {this.state.answer.map((data, index) =>
                        <button key={index} id="btn" value={data} className="btn-small" onClick={() => {
                            this.setState({
                                answer: [data],
                                seleted: [data]
                            })
                        }}>
                            {data}
                        </button>
                    )
                    }
                </>
            )
        } else {
            return (
                <Result answer={this.state.answer} correct={this.state.correct} seleted={this.state.seleted} />
            )
        }

    }
}