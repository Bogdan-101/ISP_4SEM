import React, {useState} from 'react';
import './NewCommentForm.css';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router'


export const NewCommentForm = ({ id, closeHandle }) => {
    const [content, setContent] = useState('');
    const token = useSelector(state => state.login.token)
    const history = useHistory();

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
                'Content-Type': 'application/json',
                'Authorization': `token ${token}`
            },
            body: JSON.stringify(data)
        }).then((res) => res.json).then((data) => {
            setContent('');
            closeHandle && closeHandle();
            history.go(0)
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