import React from "react"
import Thumbnail from '../props/thumbnail';
import Nav from '../../images/navigation-black-48dp.svg'
import Header from '../props/header';

function projects(props) {
  return (
    <div>
      <Header name = "Projects"/>
        <Thumbnail
            link="https://www.google.com " target="_blank"
            image={Nav}
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