import React from 'react';

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
}

export default New;