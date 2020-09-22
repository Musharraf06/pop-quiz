import React, { useState } from 'react';
import set1 from '../quizService/data';
import set2 from '../quizService/aptitude';
import getid from '../reuse';
import '../stylesheets/question.css';

const Question = (props) => {
    var set;
    switch (props.file) {
        case 1:
            set = set1;
            break;
        case 2:
            set = set2;
            break;
        default:
            console.log("default");
    }
    let optionNo = 1;
    let ID = "span1";
    const [currentQuestionNo, setCurrentQuestionNo] = useState(1);
    const [currentQuestion, setCurrentQuestion] = useState(set[0].question);
    const [currentOptions, setCurrentOptions] = useState(set[0].answers);
    const [groupNo, setGroupNo] = useState(1);

    function next() {
        var no_option_selected = document.getElementById("no_option_selected");
        if (currentQuestionNo <= set.length - 1) {
            check();
            if (no_option_selected.innerHTML === "") {
                setCurrentQuestionNo(currentQuestionNo + 1);
                setGroupNo(groupNo + 1);
                renderQuestion();
            } else {
                return;
            }
        } else {
            finish();
        }
    }

    var score = 0;
    function check() {
        var radioIds = ["inp_radio1", "inp_radio2", "inp_radio3", "inp_radio4"];
        radioIds.forEach(id => {
            if (document.getElementById(id).checked === false) {
                var no_option_selected = document.getElementById("no_option_selected");
                no_option_selected.innerHTML = "Select an option to continue";
            } else {
                return;
            }
        })
        var selected = getid(ID);
        console.log("selected : " + selected.innerHTML);
        console.log("correct : " + set[currentQuestionNo - 1].correct);
        if (selected.innerHTML === set[currentQuestionNo - 1].correct) {
            score += 1;
            console.log("score : " + score);
        }
        radioIds.forEach(id => {
            document.getElementById(id).checked = false;
        })
    }

    function renderQuestion() {
        setCurrentQuestion(set[currentQuestionNo].question);
        setCurrentOptions(set[currentQuestionNo].answers);
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
        result.innerHTML = `Your Score : ${score + 1} / ${set.length}`;
    }

    return (
        <>
            <div className="center-align header">Quiz</div>
            <div className="question-container">
                <div id="question" className="question">
                    {currentQuestionNo + ". "}{currentQuestion}
                </div>

                <div className="score">
                    {/* {`Score : ${score}`} */}
                    {"Score : " + score}
                </div>

                <div id="no_option_selected" className="no-option-selected"></div>

                <div id="options" className="options">
                    <ul>
                        {currentOptions.map((option =>
                            <li>
                                <label>
                                    <input name={"group" + groupNo} id={"inp_radio" + optionNo} type="radio" value={optionNo} />
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
                    <button className="btn-small" onClick={() => { props.file === 1 ? window.location = '/random' : window.location = '/aptitude' }} >Play again</button>
                    <button className="btn-small" onClick={() => { window.location = '/' }}>Home</button>
                </div>
            </div>
        </>
    )
}

export default Question;