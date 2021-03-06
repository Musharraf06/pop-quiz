import React, { useState } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import Questions from './Questions';
import set1 from '../helpers/data';
import set2 from '../helpers/aptitude';

function Quiz() {
  const [activeTab, setActiveTab] = useState('1');

  const toggleTab = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <NavBar />
      <Nav tabs className='sticky-top' style={{ backgroundColor: '#e0aa59' }}>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' }, 'tabs')}
            onClick={() => {
              toggleTab('1');
            }}
          >
            Random
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' }, 'tabs')}
            onClick={() => {
              toggleTab('2');
            }}
          >
            Aptitude
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId='1'>
          <Questions data={set1} />
        </TabPane>
        <TabPane tabId='2'>
          <Questions data={set2} />
        </TabPane>
      </TabContent>
      <Footer />
    </div>
  );
}

export default Quiz;

// question component shit legacy code

// import React, { useState, useEffect } from 'react';
// import getid from '../reuse';
// import '../stylesheets/question.css';

// function Questions({ data }) {
//     let optionNo = 1;
//     var ID = "span1";
//     // var correct;
//     const [currentQuestionNo, setCurrentQuestionNo] = useState(0);
//     const [currentQuestion, setCurrentQuestion] = useState(data[0].question);
//     const [currentOptions, setCurrentOptions] = useState(data[0].answers);
//     const [groupNo, setGroupNo] = useState(1);
//     const [score, setScore] = useState(0);

//     // function callAnswer(number) {
//     //     answer(number);
//     // }

//     // function answer(num) {
//     //     console.log("selected : " + selected);
//     //     console.log("correct : " + data[num - 1].correct);
//     // }

//     function answer() {
//         var selected = getid(ID);
//         console.log("selected : " + selected.innerHTML);
//         console.log("correct : " + data[currentQuestionNo].correct);
//         if (selected.innerHTML === data[currentQuestionNo].correct) {
//             // check_answered.value === "answered" ? setScore(score) : selected.style.color = "green";
//             // var check_answered = getid("check_answered");
//             // if (check_answered.value === "answered") {
//             //     selected.style.color = "rgba(0, 0, 0, 0.87)";
//             // } else {
//             //     selected.style.color = "green";
//             // }
//             selected.style.color = "green";
//             global.alert("green")
//         } else {
//             selected.style.color = "rgba(0, 0, 0, 0.6)";
//         }
//         if (selected.style.color === "green") {
//             setScore(score + 1);
//         }
//     }

//     function previous() {
//         // currentQuestionNo >= 2 ? setCurrentQuestionNo(currentQuestionNo - 1) & setGroupNo(groupNo - 1) & renderQuestion() : null
//         if (currentQuestionNo >= 1) {
//             // check();
//             // var optionColorReset = ["span1", "span2", "span3", "span4"];
//             // optionColorReset.forEach(option => {
//             //     var optionscolorset = getid(option);
//             //     optionscolorset.style.color = "rgba(0, 0, 0, 0.87)";
//             // })
//             setCurrentQuestionNo(currentQuestionNo - 1);
//             console.log(currentQuestionNo);
//             setGroupNo(groupNo + 1);
//             renderQuestion();
//         }
//     }

//     function next() {
//         if (currentQuestionNo <= data.length - 1) {
//             // check();
//             var optionColorReset = ["span1", "span2", "span3", "span4"];
//             optionColorReset.forEach(option => {
//                 var optionscolorset = getid(option);
//                 optionscolorset.style.color = "rgba(0, 0, 0, 0.87)";
//             })
//             setCurrentQuestionNo(currentQuestionNo + 1);
//             // console.log(currentQuestionNo);
//             setGroupNo(groupNo + 1);
//             // var check_answered = getid("check_answered");
//             // check_answered.value = "answered";
//             renderQuestion();
//         } else {
//             finish();
//         }
//     }

//     // function check() {
//     //     if (selected.innerHTML === data[currentQuestionNo - 1].correct) {
//     //         setScore(score + 1);
//     //     }
//     // }

//     function renderQuestion() {
//         setCurrentQuestion(data[currentQuestionNo].question);
//         setCurrentOptions(data[currentQuestionNo].answers);
//     }

//     // const setData = (e) => {
//     //     selected = e.target.innerHTML;
//     //     correct = e.target.id;
//     // }

//     function finish() {
//         var question = getid("question");
//         var options = getid("options");
//         var input = getid("inputs");
//         var result_container = getid("result_container");
//         var result = getid("result");
//         question.style.display = "none";
//         options.style.display = "none";
//         input.style.display = "none";
//         result_container.classList.add("hidden");
//         result.innerHTML = `Your Score : ${score} / ${data.length}`;
//     }

//     const setId = (e) => {
//         ID = e.target.id
//     }
//     useEffect(() => {
//         renderQuestion();
//     })
//     return (
//         <>
//             <div className="quiz-container">
//                 <div id="question" className="question">
//                     {currentQuestionNo + 1 + ". "}{currentQuestion}
//                 </div>

//                 <div name="score" className="score">{"Score : " + score}</div>

//                 <div id="no_option_selected" className="no-option-selected"></div>

//                 <div id="options" className="options">
//                     <ol type="A">
//                         {currentOptions.map((option, index) => {
//                             return <li key={index} className="single-option">
//                                 <div onClick={answer}>
//                                     <span className="options" id={"span" + optionNo} onClick={setId}>{option}</span>
//                                     <span style={{ display: "none" }}>{optionNo > 4 ? optionNo = 1 : optionNo += 1}</span>
//                                 </div>
//                             </li>
//                         }
//                         )}
//                     </ol>
//                 </div>

//                 <div id="inputs" className="action-btn">
//                     <input type="button" className="btn btn-primary" onClick={previous} value="Previous" />
//                     <input type="button" className="btn btn-primary" onClick={finish} value="Quit" />
//                     <input type="button" className="btn btn-primary" onClick={next} value="Next" />
//                 </div>
//                 <div style={{ display: "none" }} id="result_container" className="result-container">
//                     <div id="result" className="result"></div>
//                     <button className="btn btn-primary">Play again</button>
//                     <button className="btn btn-primary">Home</button>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Questions;

// create component shit legacy code

// import React, { useState } from 'react';
// import axios from 'axios';
// import getid from '../reuse';
// import Share from '../components/Share';
// import '../stylesheets/create.css';

// const Create = () => {
//   const [set] = useState(Math.floor(Math.random() * 10000 + 1));
//   const [finish, setFinish] = useState(false);
//   const [close, setClose] = useState(false);
//   const [name, setName] = useState('');
//   const [title, setTitle] = useState('');

//   const close_btn = () => {
//     setClose(true);
//   };

//   const generate = () => {
//     const question_no_generate = parseInt(getid('#questions').value);
//     getid('questionNo').value = question_no_generate;
//     getid('setNO').value = set;
//     var details_form = document.querySelector('.details-container');
//     details_form.classList.add('hide');
//     var container = getid('container');
//     container.classList.add('questions-container');
//     for (let i = 1; i <= question_no_generate; i++) {
//       var inner = `<center class="h4">Question <input type="text" id=question_no${i} name=number${i} class="inline_input" style="font-size: 2.28rem; color:rebeccapurple" value=${i} /></center>
//             <input type="text" name=question${i} class="input" placeholder="Enter your question" required />
//             <ol>
//             <li><input type="text" id=option1${i} name=option1${i} class="options input" required placeholder="Option 1" /> <label> <input name=group${i} type="radio" value=${i} required /> <span>Correct</span> </label> </li>
//             <li><input type="text" id=option2${i} name=option2${i} class="options input" required placeholder="Option 2" /> <label> <input name=group${i} type="radio" value=${i} required /> <span>Correct</span> </label> </li>
//             <li><input type="text" id=option3${i} name=option3${i} class="options input" required placeholder="Option 3" /> <label> <input name=group${i} type="radio" value=${i} required /> <span>Correct</span> </label> </li>
//             <li><input type="text" id=option4${i} name=option4${i} class="options input" required placeholder="Option 4" /> <label> <input name=group${i} type="radio" value=${i} required /> <span>Correct</span> </label> </li> 
//             </ol>
//             <hr/>
//             `;
//       container.innerHTML += inner;
//     }
//     getid('question_submit').classList.toggle('hide');
//     // container.innerHTML += `<input type="submit" id="question_submit" class="btn-small blue" onclick="submit()" value="Submit" />`
//     // window.location = '/create/quiz';
//   };

//   const submit = () => {
//     setFinish(true);
//   };

//   // const test_input = () => {
//   //     var option = ["option1", "option2", "option3", "option4"];
//   //     var question = getid('question');
//   //     var name = getid('name');
//   //     var title = getid('title');
//   //     question.value = "what is the capital city of India ?";
//   //     name.value = "Musharraf";
//   //     title.value = "captital country quiz"
//   //     for (let i = 0; i < option.length; i++) {
//   //         const element = option[i];
//   //         getid(element).value = "Delhi";
//   //         getid(element).checked = "checked";
//   //     }
//   // }

//   function handleChangeName(e) {
//     setName(e.target.value);
//   }

//   function handleChangeTitle(e) {
//     setTitle(e.target.value);
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const data = {
//       name: name,
//       title: title,
//       set: set,
//     };
//     axios
//       .post('http://localhost:5000/init_create', data)
//       .then((res) => console.log(res.data));
//     // .catch(
//     //     console.log("error while posting from axios")
//     // )
//   };

//   if (close === true) window.location = 'http://localhost:3000/';
//   // if (this.state.close === true) return null;
//   // window.location.reload('localhost:3000/');
//   if (finish === true) {
//     return <Share />;
//   } else {
//     return (
//       <div>
//         <div className='center'>
//           <span className='header'>Create your own quiz</span>
//         </div>
//         <hr />
//         <span>
//           <i className='material-icons close_style' onClick={close_btn}>
//             close
//           </i>
//         </span>
//         {/* Details form */}
//         <form action='/init_create' method='post' onSubmit={handleSubmit}>
//           <div className='details-container'>
//             <span className='header'>Details</span>
//             <hr />
//             <span>Set :</span>
//             <input
//               type='text'
//               name='set'
//               className='inline_input'
//               value={set}
//             />
//             <input
//               type='text'
//               name='name'
//               id='name'
//               className='input-style'
//               placeholder='Enter your name'
//               disabled={false}
//               onChange={handleChangeName}
//               required
//             />
//             <input
//               type='text'
//               name='title'
//               id='title'
//               className='input-style'
//               placeholder='Enter a title for your quiz'
//               onChange={handleChangeTitle}
//               required
//             />
//             <input
//               type='text'
//               name='questionsno'
//               id='#questions'
//               className='input-style'
//               placeholder='Enter number of questions to create'
//               required
//             />
//             <input
//               type='button'
//               className='btn-small blue'
//               onClick={close_btn}
//               value='Back'
//             />
//             <input
//               type='submit'
//               className='btn-small blue'
//               onClick={generate}
//               value='Continue'
//             />
//           </div>
//         </form>

//         {/* Questions form */}
//         <form action='/create' method='post'>
//           {/* <button className="btn-small blue" onClick={test_input}>Dummy Input</button> */}
//           <div id='container'>
//             <input
//               type='submit'
//               id='question_submit'
//               className='btn-small blue hide'
//               onClick={submit}
//               value='Submit'
//             />
//           </div>
//           <input
//             type='text'
//             className='hide'
//             name='questionNo'
//             id='questionNo'
//           />
//           <input type='text' className='hide' name='setNO' id='setNO' />
//         </form>
//       </div>
//     );
//   }
// };

// export default Create;
