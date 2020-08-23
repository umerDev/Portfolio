import React from 'react';
import {Link} from 'react-router-dom';
import '../../App.css';
import { motion } from "framer-motion";

const Thumbnail = (props) => {
    return(
        <div className = "project">
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

export const AnimateComponent = () => (
    <motion.div
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}
    />
  )

export default Thumbnail;