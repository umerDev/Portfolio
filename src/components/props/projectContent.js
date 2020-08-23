import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';

const ProjectContent = (props) => {
    return(
        <div className = "projectContent">
            <Link to ={props.link}>
                <div className = "project-image">
                    <img src ={props.image} alt="ProjectImage"/>
                </div>
                <div className = "project-title">{props.title}</div>
                <div className = "project-category">{props.category}</div>
            </Link> 
        </div>
    );
}

export default ProjectContent;