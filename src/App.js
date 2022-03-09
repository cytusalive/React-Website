import logo from './logo.svg';
import './App.css';

function App() {

  const sayHello = function() {
    alert('You clicked me!');
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={sayHello}>Click Me</button>;
      </header>
    </div>
  );
}

export default App;
