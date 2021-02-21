import React, { useState, useEffect } from 'react';
import set1 from '../helpers/data';
import set2 from '../helpers/aptitude';
import getid from '../reuse';
import '../stylesheets/question.css';

function Question(props) {
    var set;
    var title;
    switch (props.file) {
        case 1:
            set = set1;
            title = "Random Quiz";
            break;
        case 2:
            set = set2;
            title = "Aptitude Quiz";
            break;
        default:
            if (props.data !== null) {
                console.log(props.data);
                set = JSON.parse(sessionStorage.getItem(props.data));
                title = sessionStorage.getItem("title");
                console.log(set);
                // set[0].correct = set[0].answers[set[0].correct];
            } else {
                document.innerHTML = "<center><h1>Error ouccured</h1></center>";
                break;
            }
            break;
    }

    let optionNo = 1;
    var ID = "span1";
    // var correct;
    const [currentQuestionNo, setCurrentQuestionNo] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(set[0].question);
    const [currentOptions, setCurrentOptions] = useState(set[0].answers);
    const [groupNo, setGroupNo] = useState(1);
    const [score, setScore] = useState(0);

    // function callAnswer(number) {
    //     answer(number);
    // }

    // function answer(num) {
    //     console.log("selected : " + selected);
    //     console.log("correct : " + set[num - 1].correct);
    // }

    function answer() {
        var selected = getid(ID);
        console.log("selected : " + selected.innerHTML);
        console.log("correct : " + set[currentQuestionNo].correct);
        if (selected.innerHTML === set[currentQuestionNo].correct) {
            // check_answered.value === "answered" ? setScore(score) : selected.style.color = "green";
            // var check_answered = getid("check_answered");
            // if (check_answered.value === "answered") {
            //     selected.style.color = "rgba(0, 0, 0, 0.87)";
            // } else {
            //     selected.style.color = "green";
            // }
            selected.style.color = "green";
            global.alert("green")
        } else {
            selected.style.color = "rgba(0, 0, 0, 0.6)";
        }
        if (selected.style.color === "green") {
            setScore(score + 1);
        }
    }

    function previous() {
        // currentQuestionNo >= 2 ? setCurrentQuestionNo(currentQuestionNo - 1) & setGroupNo(groupNo - 1) & renderQuestion() : null
        if (currentQuestionNo >= 1) {
            // check();
            // var optionColorReset = ["span1", "span2", "span3", "span4"];
            // optionColorReset.forEach(option => {
            //     var optionscolorset = getid(option);
            //     optionscolorset.style.color = "rgba(0, 0, 0, 0.87)";
            // })
            setCurrentQuestionNo(currentQuestionNo - 1);
            console.log(currentQuestionNo);
            setGroupNo(groupNo + 1);
            renderQuestion();
        }
    }

    function next() {
        if (currentQuestionNo <= set.length - 1) {
            // check();
            var optionColorReset = ["span1", "span2", "span3", "span4"];
            optionColorReset.forEach(option => {
                var optionscolorset = getid(option);
                optionscolorset.style.color = "rgba(0, 0, 0, 0.87)";
            })
            setCurrentQuestionNo(currentQuestionNo + 1);
            // console.log(currentQuestionNo);
            setGroupNo(groupNo + 1);
            // var check_answered = getid("check_answered");
            // check_answered.value = "answered";
            renderQuestion();
        } else {
            finish();
        }
    }

    // function check() {
    //     if (selected.innerHTML === set[currentQuestionNo - 1].correct) {
    //         setScore(score + 1);
    //     }
    // }

    function renderQuestion() {
        setCurrentQuestion(set[currentQuestionNo].question);
        setCurrentOptions(set[currentQuestionNo].answers);
    }

    // const setData = (e) => {
    //     selected = e.target.innerHTML;
    //     correct = e.target.id;
    // }

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
        result.innerHTML = `Your Score : ${score} / ${set.length}`;
    }

    const setId = (e) => {
        ID = e.target.id
    }
    useEffect(() => {
        renderQuestion();
    })
    return (
        <>
            {/* <div className="main-container">
                <div className="center-align fixed-head">
                    <span className="header">Quiz</span>
                    <hr />
                    <span className="score">{"Score : " + score}</span>
                </div>
                <div className="question-container">
                    {set.map(question =>
                        <div>
                            <div id="question" className="question">
                                {question.questionNo + ". "}{question.question}
                            </div>

                            <div className="correct">
                                <span>View answer </span>
                                <span id="correct">{question.correct}</span>
                            </div>

                            <div id="options" className="options">
                                <ol type="A">
                                    {question.answers.map((option =>
                                        <li className="single-option">
                                            <div onClick={callAnswer(question.questionNo)}>
                                                <span className="options" id={optionNo} onClick={setData}>{option}</span>
                                                <span style={{ display: "none" }}>{optionNo > 4 ? optionNo = 1 : optionNo += 1}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    )}
                </div> */}

            {/* <div id="inputs" className="inputs">
                    <input type="submit" className="btn-small blue" onClick={finish} value="Quit" />
                    <input type="submit" className="btn-small blue" onClick={next} value="Next" />
                </div> */}
            {/* <div style={{ display: "none" }} id="result_container" className="result-container">
                    <div id="result" className="result"></div>
                    <button className="btn-small" onClick={() => { props.file === 1 ? window.location = '/random' : window.location = '/aptitude' }} >Play again</button>
                    <button className="btn-small" onClick={() => { window.location = '/' }}>Home</button>
                </div>
            </div> */}

            <div className="center-align header blue">{title}</div>
            <div className="quiz-container">
                {/* <form action="/next" method="post"> */}
                <div id="question" className="question">
                    {currentQuestionNo + 1 + ". "}{currentQuestion}
                </div>

                <div name="score" className="score">{"Score : " + score}</div>

                <div id="no_option_selected" className="no-option-selected"></div>

                <div id="options" className="options">
                    <ol type="A">
                        {currentOptions.map((option, index) => {
                            return <li key={index} className="single-option">
                                <div onClick={answer}>
                                    <span className="options" id={"span" + optionNo} onClick={setId}>{option}</span>
                                    <span style={{ display: "none" }}>{optionNo > 4 ? optionNo = 1 : optionNo += 1}</span>
                                </div>
                            </li>
                        }
                        )}
                    </ol>
                </div>

                <div id="inputs" className="action-btn">
                    {/* <input type="text" style={{ display: "none" }} id="check_answered" /> */}
                    <input type="button" className="btn-small blue" onClick={previous} value="Previous" />
                    {/* <input type="button" className="btn-small blue" onClick={() => { currentQuestionNo >= 2 ? setCurrentQuestionNo(currentQuestionNo - 1) : console.log("none from previous") }} value="Previous" /> */}
                    <input type="button" className="btn-small blue" onClick={finish} value="Quit" />
                    <input type="button" className="btn-small blue" onClick={next} value="Next" />
                </div>
                {/* </form> */}
                <div style={{ display: "none" }} id="result_container" className="result-container">
                    <div id="result" className="result"></div>
                    <button className="btn-small blue" onClick={() => { props.file === 1 ? window.location = '/random' : window.location = '/aptitude' }} >Play again</button>
                    <button className="btn-small blue" onClick={() => { window.location = '/' }}>Home</button>
                </div>
            </div>
        </>
    )
}

export default Question;