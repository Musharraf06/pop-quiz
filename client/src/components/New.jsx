import React from 'react';
// import ReactDom from 'react-dom';
// import '../stylesheets/shared.css';

const New = (props) => {
    return (    
        <>
            <input type="text" className="header input" name="title" />
            <div className="name">
                <b name="master_name">Created by : <input type="text" className="name input" name="master" /></b>
            </div>
            <input type="text" name="question" />
            <input type="submit" className="btn-small" value="Submit" />
        </>
    )
    // return ReactDom.createPortal(
    //     <>
    //         <div className='container' />
    //         <div className='quiz-modal'>
    //             <input type="text" className="header input" name="title" />
    //             <div className="name">
    //                 <b name="master_name">Created by : <input type="text" className="name input" name="master" /></b>
    //             </div>
    //             <input type="text" name="question" />
    //             <input type="submit" className="btn-small" value="Submit" />
    //             <form action="/result" method="post">
    //                 <h3 name="header">Quiz</h3>
    //                 <input type="text" name="master_user" id="" />
    //                 <input type="text" name="question" id="" />
    //                 <input type="submit" className="btn-small" value="Submit" />
    //             </form>
    //         </div>
    //     </>,
    //     document.getElementById('portal')
    // )
}

export default New;