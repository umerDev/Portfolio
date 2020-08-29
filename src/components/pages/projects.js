import React from "react"
import Thumbnail from '../props/thumbnail';
import Header from '../props/header';
import UnityIcon from '../../images/unity-512.png'

function Projects(props) {
  return (
    <div>
      <Header name = "Projects"/>
        <Thumbnail
            link="https://www.google.com " target="_blank"
            image={UnityIcon}
            title="iOS native plugin"
            category="Unity"
        />
        <Thumbnail
            link="/photoshop"
            image= {UnityIcon}
            title="Android native plugin"
            category="Unity"
        />
    </div>
  )
}
 
export default Projects;