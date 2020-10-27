import React, { useEffect } from 'react';
import axios from 'axios';
import Question from "./Question";

// export default class New extends Component {
//     state = {
//         name: "",
//         title: "",
//         questions: []
//     }
//     componentDidMount() {
//         axios.get(window.location.href)
//             .then(res => {
//                 // console.log(res.data);
//                 this.setState({
//                     name: res.data.user_data[0].name.toString(),
//                     title: res.data.user_data[0].title.toString(),
//                     questions: [...res.data.quiz_data]
//                 })
//             }).catch("error")
//     }
//     render() {
//         return (
//             <>
//                 {console.log(this.state.title)}
//                 {/* <Question file="" title={this.state.title} name={this.state.name} userSet={this.state.userQuestions} /> */}
//                 <span className="header">{this.state.title}</span>
//                 <div className="name">
//                     <b name="master_name">Created by : <input type="text" className="name input" name="master" value={this.state.name} /></b>
//                 </div>
//                 <input type="submit" className="btn-small" value="Submit" />
//             </>
//         );
//     }
// }

const New = () => {
    var data = `data${Math.ceil(Math.random() * 1000 + 1)}`;

    useEffect(() => {
        axios.get(window.location.href)
            .then(res => {
                sessionStorage.setItem("title", res.data.user_data[0].title.toString());
                sessionStorage.setItem("name", res.data.user_data[0].name.toString());
                sessionStorage.setItem(data, JSON.stringify(res.data.quiz_data));
            }).catch("error");
    })

    return (
        <>
            <Question file={3} data={data} />
        </>
    )
}

export default New;