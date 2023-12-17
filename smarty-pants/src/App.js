import React, { Component } from 'react';
import './App.css';
import Clarifai,{COLOR_MODEL} from 'clarifai'
import Navigation from './Navigation';
import ImageLinkForm from './ImageLinkForm';
import Logo from './Logo';
import ParticlesBg from 'particles-bg';
import FaceRecognition from './FaceRecognition';
import { FACE_DETECT_MODEL } from 'clarifai';
// const Clarifai = require('clarifai');
const app = new Clarifai.App({
  apiKey : 'e1ac8b8c35e6415f87ddf41d46dd0cf5'
})

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageurl:''
    }
  }
  onInputChange = (event) => {
    this.setState({input :event.value});
  } 

  onButtonSubmit = () => {
    this.setState({imageUrl:this.state.input})
    console.log('click');
    app.models.predict(FACE_DETECT_MODEL,this.state.input).then(
      function(response){
        console.log(response);

      }
      
    );
  }

  render() {
    return(
      <div className="App">
        <ParticlesBg type="cobweb" bg={true} />
        <Navigation/>
        <Logo/>
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition imageUrl={this.state.imageurl}/>
      </div>
    );

  }
}

export default App;
