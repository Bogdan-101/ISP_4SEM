import axios from 'axios';
import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { add_thread } from '../../../reducers/ThreadSlice';
import './NewThreadForm.css';


export const NewThreadForm = ({ boardName, closeHandle }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const dispatch = useDispatch();
    const token = useSelector(state => state.login.token)

    function handleInputChange(e) {
        setTitle(e.target.value);
    }

    function handleTextAreaChange(e) {
        setContent(e.target.value);
    }

    function handleImageChange(e) {
        setImage(e.target.files[0]);
    }

    function handleSubmit(e) {
        e.preventDefault()
        const endpoint = 'http://127.0.0.1:8000/api/thread/';
        const data = new FormData();
        data.append('board_name', boardName);
        data.append('title', title);
        data.append('content', content);
        if (image)
            data.append('image', image, image.name);
        axios.post(endpoint, data, {
            method: "POST",
            headers: {
                'content-type': 'multipart/form-data',
                'Authorization': `token ${token}`
            }
        }).then((data) => {
            dispatch(add_thread({boardName, title, content, image: image ? image.name : null}))
            closeHandle && closeHandle()
        }).catch((e) => {
            alert(e)
        })
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <div className="form__content">
                <div className="form__texts">
                    <input value={title} onChange={handleInputChange} placeholder="Title" className="form__input"/>
                    <textarea value={content} onChange={handleTextAreaChange} placeholder="Your text here..."
                            className="form__textarea"/>
                </div>
                <div className="form__image">
                    <label>Select image...
                        <input type="file" name="image" accept=".jpg, .jpeg, .png" multiple onChange={handleImageChange} />
                    </label>
                </div>
            </div>
            <input type="submit" value="Submit" className="form__submit"/>
        </form>
    )
}