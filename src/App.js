import './App.css';


import Card from './components/card/card';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <h1 className='header-title'>RANDOM USER GENERATOR</h1>
        <p className='header-description'>A free, <span className='blue'>Open-source</span> API for generating random user data. Like Lorem Ipsum, but for people</p>
        <p className='header-link'>Follow us @randomapi</p>
      </div>
        <Card/>
    </div>
  );
}

export default App;
