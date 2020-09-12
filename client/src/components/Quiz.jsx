import React, { Component } from 'react'
import ReactDom from 'react-dom';
import Random from '../quizService/random';
import Aptitude from '../quizService/aptitude';
import Question from '../components/Question';
import Create from './Create';
import Result from './Result';
import '../stylesheets/shared.css'

export default class Quiz extends Component {
    state = {
        random_data: [],
        aptitude_data: [],
        new_data: [],
        submit: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
    };

    getQ = () => {
        Random().then(question => {
            this.setState({
                random_data: question
            });
        });
        Aptitude().then(question => {
            this.setState({
                aptitude_data: question
            });
        });

    };

    componentDidMount = () => {
        this.getQ();
    }
    render() {
        if (!this.props.isOpen) return null;
        else if (this.props.source === 'random') {
            if (this.state.submit === true) {
                //Random module submitted
                return ReactDom.createPortal(
                    <>
                        <div className='container' />
                        <div className='quiz-modal'>
                            <Result />
                            {/* <span onClick={this.props.Isclose}><i className="material-icons" onClick={() => {
                                this.setState({
                                    submit: false
                                })
                            }}>close</i></span>
                            <div className="center-align">
                                <h5>Random quiz successfully created</h5>
                                <p>Your score out of 5</p>
                            </div> */}
                        </div>
                    </>,
                    document.getElementById('portal')
                )
            } else {
                //Random (First)
                return ReactDom.createPortal(
                    <>
                        <div className='container' />
                        <div className='quiz-modal'>
                            <span><i className="material-icons" onClick={this.props.Isclose}>close</i></span>
                            <h5 className='center-align'>Random</h5>
                            <hr />
                            {this.state.random_data.length > 0 && this.state.random_data.map(({
                                question, answers, correct, questionId }) => <Question question={question} options={answers} correct={correct} key={questionId} />
                            )}
                            <hr />
                            <div>
                                <button className='btn-small' onClick={() => {
                                    this.setState({
                                        submit: true
                                    })
                                }}>Submit</button>
                            </div>
                        </div>
                    </>,
                    document.getElementById('portal')
                )
            }

        } else if (this.props.source === 'aptitude') {
            if (this.state.submit === true) {
                //Aptitude module submitted
                return ReactDom.createPortal(
                    <>
                        <div className='container' />
                        <div className='quiz-modal'>
                            <span onClick={this.props.Isclose}><i className="material-icons" onClick={() => {
                                this.setState({
                                    submit: false
                                })
                            }}>close</i></span>
                            <div className="center-align">
                                <h5>Aptitude quiz successfully created</h5>
                                <p>Your score out of 5</p>
                            </div>
                        </div>
                    </>,
                    document.getElementById('portal')
                )
            } else {
                //Aptitude (Second)
                return ReactDom.createPortal(
                    <>
                        <div className='container' />
                        <div className='quiz-modal'>
                            <span><i className="material-icons" onClick={this.props.Isclose}>close</i></span>
                            <h5 className='center-align'>Aptitude</h5>
                            <hr />
                            {this.state.aptitude_data.length > 0 && this.state.aptitude_data.map(({
                                question, answers, correct, questionId }) => <Question question={question} options={answers} key={questionId} />
                            )}
                            <hr />
                            <div>
                                <button className='btn-small' onClick={() => {
                                    this.setState({
                                        submit: true
                                    })
                                }}>Submit</button>
                            </div>
                        </div>
                    </>,
                    document.getElementById('portal')
                )
            }

        } else {
            //Create quiz (Third)
            return ReactDom.createPortal(
                <>
                    <div className='container' />
                    <div className='quiz-modal'>
                        <Create set={0} />
                    </div>
                </>,
                document.getElementById('portal')
            )
        }

    }

}