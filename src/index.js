import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';


class App extends React.Component {
  
  state = { latitude: null, errorMessage: ''}

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({latitude: position.coords.latitude})
      },
      (error) =>
  {
    this.setState({errorMessage: error.message})
  }  );
  }
  // componentDidUpdate(){
  //   console.log('componentDidUpdate')
  // }
  render() {
    
      if(this.state.errorMessage && !this.state.latitude) {
        return <div>{this.state.errorMessage}</div>
      }
      if(!this.state.errorMessage && this.state.latitude) {
        return <div>{this.state.latitude}</div>
      }
      else {
        return <div>..Loading..</div>
      }
    
  }
}
ReactDOM.render(
  
    <App />
  ,
  document.querySelector('#root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
