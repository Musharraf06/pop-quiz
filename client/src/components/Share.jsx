import React, { useState } from 'react';
import getid from '../reuse';

const Share = () => {
    const [close, set_close] = useState(false);

    const close_style = {
        display: 'inline',
        position: 'relative',
        bottom: '4rem',
        left: '9rem',
        cursor: 'pointer'
    }

    const close_btn = () => {
        set_close(true);
    }

    const copy_to_clipboard = () => {
        var copy = getid('copy');
        copy.select();
        copy.setSelectionRange(0, 200);
        document.execCommand("copy");
        document.getElementById("span").innerText = "Copied"
    }

    var add = window.location.href.slice(-4);
    const address = "localhost:3000/quiz/" + add;
    if (close === true) window.location = "http://localhost:3000/"
    return (
        <>
            <div className="center-align">
                <h5>Quiz successfully created</h5>
                <b id="span"></b>
                <i className="material-icons" style={close_style} onClick={close_btn}>close</i>
                <input type="text" id="copy" className="center-align #26a69a teal lighten-1" value={address} />
                <h6>Click <span style={{ cursor: 'pointer', color: '#26a69a' }} onClick={copy_to_clipboard}>here</span> to copy link</h6>
            </div>
        </>
    );
}

export default Share;