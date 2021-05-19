import React, {useState} from 'react';
import './NewCommentForm.css';


export const NewCommentForm = ({ id, closeHandle }) => {
    const [content, setContent] = useState('');

    function handleTextAreaChange(e) {
        setContent(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault()
        const endpoint = 'http://127.0.0.1:8000/api/comment/';
        const data = {content: content, id: id};
        fetch(endpoint, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => res.json).then((data) => {
            setContent('');
            closeHandle && closeHandle();
        }).catch((e) => {
            alert(e)
        })
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <textarea value={content} onChange={handleTextAreaChange} placeholder="Your comment here..."
                      className="form__textarea"/>
            <input type="submit" value="Submit" className="form__submit"/>
        </form>
    )
}