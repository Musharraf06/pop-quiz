import React, { useEffect, useState } from 'react';
import crypto from 'crypto';

function Form() {
  const [questionRenderHelper, setQuestionRenderHelper] = useState([]);
  const [randomIds] = useState([
    crypto.randomBytes(4).toString('hex'),
    crypto.randomBytes(4).toString('hex'),
    crypto.randomBytes(4).toString('hex'),
    crypto.randomBytes(4).toString('hex'),
  ]);
  const formData = {};

  const question = (data, index) => (
    <div key={`${data}${require('crypto').randomBytes(4).toString('hex')}`}>
      <span>{index + 1}</span>
      <input
        type='text'
        name='question'
        className='form-control'
        onChange={(e) => {
          handleChange(e);
        }}
        placeholder='Enter question'
        autoComplete='off'
      />
      {randomIds.map((randomId, questionIndex) => (
        <div key={`${data}${require('crypto').randomBytes(4).toString('hex')}`}>
          <input
            type='text'
            className='form-control'
            onChange={(e) => {
              handleChange(
                e,
                'optionInput',
                'question',
                `id${randomId}index${questionIndex}data${data}`
              );
            }}
            placeholder='option'
          />
          <div className='form-check'>
            <label
              htmlFor={`id${randomId}index${questionIndex}data${data}`}
              className='form-check-label'
            >
              Correct
            </label>
            <input
              type='radio'
              className='form-check-radio'
              name={data}
              id={`id${randomId}index${questionIndex}data${data}`}
              onChange={(e) => {
                handleChange(
                  e,
                  'option',
                  'question',
                  `id${randomId}index${questionIndex}data${data}`
                );
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e, item, status, questionId) => {
    if (status === 'question') {
      const questionData = {
        item: e.target.value,
      };
      formData[questionId] = questionData;
    } else {
      formData[item] = e.target.value;
    }
    console.log(formData);
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

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='title'
          className='form-control'
          onChange={(e) => {
            handleChange(e, 'title');
          }}
          placeholder='Title of your quiz'
          autoComplete='off'
        />
        <input
          type='text'
          name='author'
          className='form-control'
          onChange={(e) => {
            handleChange(e, 'author');
          }}
          placeholder='Your name'
          autoComplete='off'
        />
        {questionRenderHelper.map((data, index) => question(data, index))}
        <button
          className='btn btn-primary'
          onClick={() => {
            setQuestionRenderHelper((curr) => [
              ...curr,
              crypto.randomBytes(4).toString('hex'),
            ]);
          }}
        >
          Add question
        </button>
        <input type='submit' className='btn btn-primary' value='Submit' />
      </form>
    </>
  );
}

export default Form;
