import React from 'react';
import axios from 'axios';

// Create an instance of Axios with the provided configuration
const instance = axios.create({
  baseURL: 'http://localhost:3001/api/',
  timeout: 5000,
});

class App extends React.Component {
  handleClick = async (delay) => {
    try {
      const response = await instance.post('delay', { delay });
      console.log(response.data.message);
    } catch (error) {
      console.error('Timeout error:', error);
    }
  };

  render() {
    return (
      <div style={{display:'flex',height:'auto',width:'auto'}}>
        <button onClick={() => this.handleClick(1)} style={{display:'flex',height:'80px',width:'165px'}}>1 Second</button>
        <button onClick={() => this.handleClick(2)} style={{display:'flex',height:'80px',width:'165px'}}>2 Seconds</button>
        <button onClick={() => this.handleClick(3)} style={{display:'flex',height:'80px',width:'165px'}}>3 Seconds</button>
        <button onClick={() => this.handleClick(4)} style={{display:'flex',height:'80px',width:'165px'}}>4 Seconds</button>
        <button onClick={() => this.handleClick(5)} style={{display:'flex',height:'80px',width:'165px'}}>5 Seconds</button>
      </div>
    );
  }
}

export default App;
