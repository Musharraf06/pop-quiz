import React, { useEffect, useState } from 'react';
import { Spinner } from 'reactstrap';
import classnames from 'classnames';
import '../stylesheets/questions.css';

function Questions({ data }) {
  const [loading, setLoading] = useState(true);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const userInput = [];

  const checkAnswer = (questionId, selectedOption) => {
    const currentQuestion = data.filter(
      (question) => question.questionId === questionId
    );
    if (selectedOption == currentQuestion?.[0].correct) {
      return true;
    } else {
      return false;
    }
  };

  const endTest = () => {
    setShowResult(true);
    window.scrollTo(0, 0);
    const duplicatesRemoved = {};
    userInput.filter((currScore) =>
      Object.assign(duplicatesRemoved, currScore)
    );
    setScore(
      Object.values(duplicatesRemoved)?.filter(
        (trueValues) => trueValues === true
      )?.length
    );
  };

  const alertUser = (e) => {
    e.preventDefault();
    e.returnValue = '';
  };

  useEffect(() => {
    window.addEventListener('beforeunload', alertUser);
    return () => {
      window.removeEventListener('beforeunload', alertUser);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <div style={{ height: '84vh' }} className='main-body-constainer'>
          <Spinner color='secondary' />
        </div>
      ) : (
        <div className='question-container px-2 py-2'>
          <div className='result-container'>
            <h1>{showResult ? `${score} / ${data?.length}` : null}</h1>
          </div>
          {data.map((question, questionIndex) => (
            <div className='question px-2 py-2' key={questionIndex}>
              <span>{question.questionNo}. </span>
              <span className='question'>{question.question}</span>{' '}
              {question.answers.map((answer, answerIndex) => (
                <div key={answerIndex} className='form-check'>
                  <label
                    className={classnames(
                      {
                        correct: showResult
                          ? checkAnswer(question?.questionId, answer)
                          : false,
                        wrong: showResult
                          ? !checkAnswer(question?.questionId, answer)
                          : false,
                        disabled: showResult,
                      },
                      'form-control',
                      'px-4'
                    )}
                    style={{ userSelect: 'none' }}
                    htmlFor={`id${question?.questionId}index${answerIndex}`}
                  >
                    <input
                      name={`${question.questionNo}`}
                      className='form-check-input'
                      type='radio'
                      id={`id${question?.questionId}index${answerIndex}`}
                      onClick={() => {
                        if (checkAnswer(question?.questionId, answer)) {
                          userInput.push({ [question?.questionId]: true });
                        } else {
                          userInput.push({ [question?.questionId]: false });
                        }
                      }}
                      disabled={showResult}
                    />
                    <span>{answer}</span>
                  </label>
                </div>
              ))}
            </div>
          ))}
          <div className='d-flex justify-content-center'>
            <button
              className='btn btn-primary'
              onClick={() => {
                !showResult ? endTest() : window.scrollTo(0, 0);
              }}
            >
              View result
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Questions;
