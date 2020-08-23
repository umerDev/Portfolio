import React from "react"
import Thumbnail from '../props/thumbnail';

function projects(props) {
  return (
    <div>
      <h1>Projects</h1>
        <Thumbnail
            link="/twitter"
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FicFjvXdrGdQ%2Fmaxresdefault.jpg&f=1&nofb=1"
            title="Twitter Newsfeed"
            category="Mobile App"
        />
        <Thumbnail
            link="/photoshop"
            image="https://www.w3schools.com/images/colorpicker.gif"
            title="Photoshop Redesign"
            category="Desktop App"
        />
    </div>
  )
}
 
export default projects;