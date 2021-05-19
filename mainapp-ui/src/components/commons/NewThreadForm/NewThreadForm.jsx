import React, {useState} from 'react';
import './NewThreadForm.css';


export const NewThreadForm = ({ boardName, closeHandle }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    function handleInputChange(e) {
        setTitle(e.target.value);
    }

    function handleTextAreaChange(e) {
        setContent(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault()
        const endpoint = 'http://127.0.0.1:8000/api/thread/';
        const data = {board_name: boardName, title: title, content: content};
        fetch(endpoint, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => res.json).then((data) => {
            closeHandle && closeHandle()
        }).catch((e) => {
            alert(e)
        })
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <input value={title} onChange={handleInputChange} placeholder="Title" className="form__input"/>
            <textarea value={content} onChange={handleTextAreaChange} placeholder="Your text here..."
                      className="form__textarea"/>
            <input type="submit" value="Submit" className="form__submit"/>
        </form>
    )
}