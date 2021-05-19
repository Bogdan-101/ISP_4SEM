import React from 'react';
import './CommentsBlock.css';
import {Link} from "react-router-dom";


export const CommentsBlock = ({ comments, allComments, id }) => (
    <div className="thread__comments">
        {comments.map((elem) => <div className="thread__comment" key={elem.id} >
                <div className="thread__detail">Anon {new Date(elem.pub_date).toLocaleString()}</div>
                <p className="thread__text">{elem.content}</p>
            </div>
        )}
        {allComments && allComments.length !== comments.length &&
        <div className="thread__allButton">
            <Link to={{pathname: `/thread/${id}`, fromDashboard: false}}
              className='thread__allComments'>view all comments</Link>
        </div>}
    </div>
)
