import React  from 'react';
import './DraggableBlock.css';
import Draggable from 'react-draggable';


export const DraggableBlock = (props) => (
        <Draggable>
            <div className="draggable">
                <div className="draggable__header">
                    {props.text ? props.text : "Drag around"}
                    <span onClick={() => {props.closeHandle && props.closeHandle()}} className="draggable__close">X</span>
                </div>
                {props.render()}
            </div>
        </Draggable>
    )
