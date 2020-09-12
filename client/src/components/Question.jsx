import React, { Component } from 'react'

export default class Question extends Component {
    state = {
        answer: this.props.options,
        correct: this.props.correct,
        seleted: ""
    };
    render() {
        return (
            <>
                <h6>{this.props.question}</h6>
                {this.state.answer.map((data, index) =>
                    <button key={index} id="btn" value={data} className="btn-small" onClick={() => {
                        this.setState({
                            answer: [data],
                            seleted: data
                        })
                    }}>
                        {data}
                    </button>
                )
                }
            </>
        )
    }
}

// const Question = (props) => {
//     const [answer, setanswer] = useState([props.options]);
//     return (
//         <>
//             <h6>{props.question}</h6>
//             {answer.map((data, index) =>
//                 <div><button key={index}>{data}</button></div>
//             )}
//         </>
//     );
// };

// export default Question;