import React from "react"
import Iframe from 'react-iframe'
import CVFile from '../../documents/CV.pdf';
import Header from '../props/header';
import '../../css/App.css'

function CV() {
    return (
      <div>
        <Header name = "CV" />
            <div className="App-centre">
              <Iframe url={CVFile}
                  width="650px"
                  height="850px"
                  id="myCV"
                  className="App-centre"
                  display="inline-block"
                  position=""
              />
            </div>
      </div>
    )
  }
   
  export default CV;
