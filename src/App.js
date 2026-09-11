import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>👋 Hello Thinakaran!</h1>
        <p style={{ fontSize: '18px', color: '#61dafb' }}>
          Welcome to Your React Learning Journey 🚀
        </p>
        
        <div style={{ 
          backgroundColor: '#282c34', 
          padding: '20px', 
          borderRadius: '10px',
          marginTop: '20px'
        }}>
          <h2>Interactive Counter</h2>
          <p style={{ fontSize: '24px', color: '#61dafb' }}>
            Count: <strong>{count}</strong>
          </p>
          <button 
            onClick={() => setCount(count + 1)}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#61dafb',
              color: '#282c34',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginRight: '10px'
            }}
          >
            Click Me! ➕
          </button>
          
          <button 
            onClick={() => setCount(0)}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#ff7675',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Reset 🔄
          </button>
        </div>

        <p style={{ marginTop: '30px', fontSize: '14px', color: '#aaa' }}>
          ✨ This is your first interactive React component!
        </p>
      </header>
    </div>
  );
}

export default App;
