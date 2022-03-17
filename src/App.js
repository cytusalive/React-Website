import './App.css';

function App() {

  const sayHello = function() {
    alert('You clicked me!');
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to React Website</h1>
        <button onClick={sayHello}>Click Me</button>  
      </header>
    </div>
  );
}

export default App;
