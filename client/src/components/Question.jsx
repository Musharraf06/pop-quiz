import React, { useState } from 'react';
import set1 from '../quizService/random';
import getid from '../reuse';
import '../stylesheets/question.css';

const Question = () => {
    let optionNo = 1;
    let ID = "span1";
    const [currentQuestionNo, setCurrentQuestionNo] = useState(1);
    const [currentQuestion, setCurrentQuestion] = useState(set1[0].question);
    const [currentOptions, setCurrentOptions] = useState(set1[0].answers);
    const [groupNo, setGroupNo] = useState(1);
    const [score, setScore] = useState(0);

    // function previous() {
    //     if (currentQuestionNo <= set1.length - 1) {
    //         if (currentQuestionNo <= 1) return null
    //         setGroupNo(groupNo - 1);
    //         renderQuestion("previous");
    //     }
    // }

    function next() {
        if (currentQuestionNo <= set1.length - 1) {
            check();
            setCurrentQuestionNo(currentQuestionNo + 1);
            setGroupNo(groupNo + 1);
            renderQuestion("next");
        } else {
            finish();
        }
    }

    // function renderQuestion(direction) {
    //     if (direction === "next") {
    //         setCurrentQuestionNo(currentQuestionNo + 1);
    //         setCurrentQuestion(set1[currentQuestionNo].question);
    //         setCurrentOptions(set1[currentQuestionNo].answers);
    // console.log("from next : " + currentQuestionNo);
    // console.log("Question No : " + currentQuestionNo);
    // console.log("from " + direction + " : " + currentQuestionNo);
    // } else if (direction === "previous") {
    //     setCurrentQuestionNo(currentQuestionNo - 1);
    //     setCurrentQuestion(set1[currentQuestionNo].question);
    //     setCurrentOptions(set1[currentQuestionNo].answers);
    // console.log("from previous : " + currentQuestionNo);
    // console.log("Question No : " + currentQuestionNo);
    // console.log("from " + direction + " : " + currentQuestionNo);
    // }
    // console.log("form render : " + currentQuestionNo);
    // }

    function renderQuestion() {
        setCurrentQuestion(set1[currentQuestionNo].question);
        setCurrentOptions(set1[currentQuestionNo].answers);
    }

    function check() {
        var selected = getid(ID);
        // console.log("selected : " + selected.innerHTML);
        // console.log("correct : " + set1[currentQuestionNo - 1].correct);
        if (selected.innerHTML === set1[currentQuestionNo - 1].correct) {
            setScore(score + 1);
            console.log("score : " + score);
        }
    }

    const setId = (e) => {
        ID = e.target.id
    }
    function finish() {
        var question = getid("question");
        var options = getid("options");
        var input = getid("inputs");
        var result_container = getid("result_container");
        var result = getid("result");
        question.style.display = "none";
        options.style.display = "none";
        input.style.display = "none";
        result_container.classList.add("hidden");
        result.innerHTML = `Your Score : ${score === 0 ? score : score + 1} / 50`;
    }

    return (
        <>
            <div className="center-align header">Quiz</div>
            <div className="question-container">
                <div id="question" className="question">
                    {currentQuestionNo + ". "}{currentQuestion}
                </div>

                <div id="options" className="options">
                    <ul>
                        {currentOptions.map((option =>
                            <li>
                                <label>
                                    <input name={"group" + groupNo} id="inp_radio" type="radio" value={optionNo} required />
                                    <span className="options" onClick={setId} id={"span" + optionNo}>{option}</span>
                                    <span style={{ display: "none" }}>{optionNo > 4 ? optionNo = 1 : optionNo += 1}</span>
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
                <div id="inputs" className="inputs">
                    <input type="submit" className="btn-small" onClick={finish} value="Quit" />
                    <input type="submit" className="btn-small" onClick={next} value="Next" />
                </div>
                <div style={{ display: "none" }} id="result_container" className="result-container">
                    <div id="result" className="result"></div>
                    <button className="btn-small" onClick={() => { window.location = '/random' }} >Play again</button>
                    <button className="btn-small" onClick={() => { window.location = '/' }}>Home</button>
                </div>
            </div>
        </>
    )
}

export default Question;