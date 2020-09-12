import React, { Component } from 'react';
import getid from '../reuse';
import Share from '../components/Share';

const input_syle = {
    display: 'inline',
    width: '3rem',
    borderBottom: 'white',
    disabled: 'true',
    color: 'black',
    outline: 'white',
    boxShadow: 'none'
}

const inline_input = {
    display: 'inline',
    width: '14rem',
    margin: '0px 4px',
    borderBottom: 'none',
    border: '2px solid rgb(90, 89, 89)',
    borderRadius: '4px',
    paddingLeft: '4px',
}

const close_style = {
    display: 'inline',
    position: 'relative',
    bottom: '3rem',
    left: '42rem',
    cursor: 'pointer',
}

const input_radio = {
    position: 'relative'
}

const div = {
    right: '1rem',
    position: 'relative',
    display: 'inline',
}

export default class Create extends Component {
    state = {
        number: 0,
        set: Math.floor(Math.random() * 10000 + 1),
        finish: false,
        close: false
    };

    close_btn = () => {
        this.setState({ close: true })
    }

    next = () => {
        this.setState({ number: this.state.number + 1 });
    }

    submit = () => {
        const no = getid("question_no")
        if (no.value <= 1) {
            this.setState({ finish: false });
        } else {
            this.setState({ finish: true });
        }
    }

    test_input = () => {
        var option = ["option1", "option2", "option3", "option4"];
        var question = getid('question');
        var name = getid('name');
        var title = getid('title');
        question.value = "what is the capital city of India ?";
        name.value = "Musharraf";
        title.value = "captital country quiz"
        for (let i = 0; i < option.length; i++) {
            const element = option[i];
            getid(element).value = "Delhi";
            getid(element).checked = "checked";
        }
    }

    render() {
        if (this.state.close === true) window.location = "http://localhost:3000/";
        // if (this.state.close === true) return null;
        // window.location.reload('localhost:3000/');
        if (this.state.finish === true) {
            return (
                <Share set={this.state.set} />
            )
        } else {
            return (
                <>
                    <h5 style={{ margin: '0.093333rem 0 0.656rem 0' }}>Create your own quiz</h5>
                    <span><i className="material-icons" style={close_style} onClick={this.close_btn}>close</i></span>
                    <button className="btn-small" onClick={this.test_input}>Dummy Input</button>
                    <form action="/create" method="post">
                        Question <input
                            type="text"
                            id="question_no"
                            name="number"
                            style={input_syle}
                            value={this.state.number === 0 ? 1 : this.state.number} />
                        <div style={div} >
                            Set <input
                                type="text"
                                name="set"
                                style={input_syle}
                                value={this.state.set} />
                        </div>

                        <input
                            type="text"
                            name="name"
                            id="name"
                            style={inline_input}
                            placeholder="Enter your name"
                            disabled={false}
                            required />
                        <input
                            type="text"
                            name="title"
                            id="title"
                            style={inline_input}
                            placeholder="Enter a title for your quiz"
                            required />
                        <input
                            type="text"
                            name="question"
                            id="question"
                            placeholder="Enter a question"
                            required />
                        <ol>
                            <li><input
                                type="text"
                                id="option1"
                                name="option1"
                                className="options"
                                required />
                                <label>
                                    <input name="group1" type="radio" value='1' style={input_radio} required />
                                    <span>Correct</span>
                                </label>
                            </li>
                            <li><input
                                type="text"
                                id="option2"
                                name="option2"
                                className="options"
                                required />
                                <label>
                                    <input name="group1" type="radio" value='2' style={input_radio} required />
                                    <span>Correct</span>
                                </label>
                            </li>
                            <li><input
                                type="text"
                                id="option3"
                                name="option3"
                                className="options"
                                required />
                                <label>
                                    <input name="group1" type="radio" value='3' style={input_radio} required />
                                    <span>Correct</span>
                                </label>
                            </li>
                            <li><input
                                type="text"
                                id="option4"
                                name="option4"
                                className="options"
                                required />
                                <label>
                                    <input name="group1" type="radio" id='option' style={input_radio} value='4' required />
                                    <span>Correct</span>
                                </label>
                            </li>
                        </ol>
                        <input
                            type="submit"
                            className="btn-small"
                            style={{ margin: '0px 6px' }}
                            onClick={this.next}
                            value="Next" />
                        <form action="/submit" style={{ display: "inline" }} method="post">
                            <button
                                className="btn-small"
                                style={{ margin: '3px' }}
                                onClick={this.submit}
                            >Submit</button>
                        </form>
                        <input type="text" name="hidden" id="hidden" />
                    </form>
                </>
            )
        }
    };
}