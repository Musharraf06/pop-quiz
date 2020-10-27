import React, { useState } from 'react';
import axios from 'axios';
import getid from '../reuse';
import Share from '../components/Share';
import '../stylesheets/create.css';

const Create = () => {
    const [set] = useState(Math.floor(Math.random() * 10000 + 1));
    const [finish, setFinish] = useState(false);
    const [close, setClose] = useState(false);
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");

    const close_btn = () => {
        setClose(true);
    }

    const generate = () => {
        const question_no_generate = parseInt(getid("#questions").value);
        getid("questionNo").value = question_no_generate;
        getid("setNO").value = set;
        var details_form = document.querySelector(".details-container");
        details_form.classList.add("hide");
        var container = getid("container");
        container.classList.add("questions-container");
        for (let i = 1; i <= question_no_generate; i++) {
            var inner = `<center class="h4">Question <input type="text" id=question_no${i} name=number${i} class="inline_input" style="font-size: 2.28rem; color:rebeccapurple" value=${i} /></center>
            <input type="text" name=question${i} class="input" placeholder="Enter your question" required />
            <ol>
            <li><input type="text" id=option1${i} name=option1${i} class="options input" required placeholder="Option 1" /> <label> <input name=group${i} type="radio" value=${i} required /> <span>Correct</span> </label> </li>
            <li><input type="text" id=option2${i} name=option2${i} class="options input" required placeholder="Option 2" /> <label> <input name=group${i} type="radio" value=${i} required /> <span>Correct</span> </label> </li>
            <li><input type="text" id=option3${i} name=option3${i} class="options input" required placeholder="Option 3" /> <label> <input name=group${i} type="radio" value=${i} required /> <span>Correct</span> </label> </li>
            <li><input type="text" id=option4${i} name=option4${i} class="options input" required placeholder="Option 4" /> <label> <input name=group${i} type="radio" value=${i} required /> <span>Correct</span> </label> </li> 
            </ol>
            <hr/>
            `
            container.innerHTML += inner;
        }
        getid("question_submit").classList.toggle("hide");
        // container.innerHTML += `<input type="submit" id="question_submit" class="btn-small blue" onclick="submit()" value="Submit" />`
        // window.location = '/create/quiz';
    }

    const submit = () => {
        setFinish(true);
    }

    // const test_input = () => {
    //     var option = ["option1", "option2", "option3", "option4"];
    //     var question = getid('question');
    //     var name = getid('name');
    //     var title = getid('title');
    //     question.value = "what is the capital city of India ?";
    //     name.value = "Musharraf";
    //     title.value = "captital country quiz"
    //     for (let i = 0; i < option.length; i++) {
    //         const element = option[i];
    //         getid(element).value = "Delhi";
    //         getid(element).checked = "checked";
    //     }
    // }

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeTitle(e) {
        setTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: name,
            title: title,
            set: set,
        }
        axios.post('http://localhost:5000/init_create', data)
            .then(res => console.log(res.data))
        // .catch(
        //     console.log("error while posting from axios")
        // )
    }

    if (close === true) window.location = "http://localhost:3000/";
    // if (this.state.close === true) return null;
    // window.location.reload('localhost:3000/');
    if (finish === true) {
        return (
            <Share />
        )
    } else {
        return (
            <div>
                <div className="center">
                    <span className="header">Create your own quiz</span>
                </div>
                <hr />
                <span><i className="material-icons close_style" onClick={close_btn}>close</i></span>
                {/* Details form */}
                <form action="/init_create" method="post" onSubmit={handleSubmit}>
                    <div className="details-container">
                        <span className="header">Details</span>
                        <hr />
                        <span>Set :</span>
                        <input
                            type="text"
                            name="set"
                            className="inline_input"
                            value={set} />
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="input-style"
                            placeholder="Enter your name"
                            disabled={false}
                            onChange={handleChangeName}
                            required />
                        <input
                            type="text"
                            name="title"
                            id="title"
                            className="input-style"
                            placeholder="Enter a title for your quiz"
                            onChange={handleChangeTitle}
                            required />
                        <input
                            type="text"
                            name="questionsno"
                            id="#questions"
                            className="input-style"
                            placeholder="Enter number of questions to create"
                            required />
                        <input type="button" className="btn-small blue" onClick={close_btn} value="Back" />
                        <input type="submit" className="btn-small blue" onClick={generate} value="Continue" />
                    </div>
                </form>

                {/* Questions form */}
                <form action="/create" method="post">
                    {/* <button className="btn-small blue" onClick={test_input}>Dummy Input</button> */}
                    <div id="container">
                        <input type="submit" id="question_submit" className="btn-small blue hide" onClick={submit} value="Submit" />
                    </div>
                    <input type="text" className="hide" name="questionNo" id="questionNo" />
                    <input type="text" className="hide" name="setNO" id="setNO" />
                </form>
            </div>
        )
    }
}

export default Create;