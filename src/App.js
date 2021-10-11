import './App.css';
import AddTask from './addTask';
import ShowTask from './ShowTask';

function App() {
  return (
    <div className="App">

      <header className = "_header">
        <h1>TO DO LIST</h1>
      </header>

      <AddTask/>
      <ShowTask/>

    </div>
  );
}

export default App;

