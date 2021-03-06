import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import '../stylesheets/home.css';

const Home = () => {
  return (
    <>
      <NavBar />
      <div style={{ height: '84vh' }}>
        <div className='main-body-constainer'>
          <h1>Pop Quiz</h1>
          <p>
            A quiz platform for you. Take quiz, create one and share with your
            others
          </p>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col card mx-3 px-0'>
              <h5 className='card-header'>Take quiz</h5>
              <div className='card-body'>
                <div className='card-text py-4'>
                  Take a quiz with predefined question on various categories
                </div>
                <a href='/quiz' className='btn btn-primary'>
                  Start
                </a>
              </div>
            </div>
            <div className='col card mx-3 px-0'>
              <h5 className='card-header'>Create Quiz</h5>
              <div className='card-body'>
                <div className='card-text'>
                  <p>
                    Create your own custom quiz by dropping files or filling out
                    forms and share with others
                  </p>
                </div>
                <a href='/create' className='btn btn-primary'>
                  Create
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
