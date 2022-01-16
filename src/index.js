import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = { latitude: null, errorMessage: ''  }
    // longitude: null
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({latitude: position.coords.latitude})
      },
      (error) =>
  {
    this.setState({errorMessage: error.message})
  }  );
  }
  render() {
    return (
      <div>
        {this.state.latitude}
        {this.state.errorMessage}
        {/* You are in the nothern hemisphere */}
      </div>
    )
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
