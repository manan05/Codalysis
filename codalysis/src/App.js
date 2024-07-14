import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Codalysis</h1>
        <h4>Time analysis of your code</h4>
      </div>
      <div>
          <textarea name = "analyseCode" rows={20} cols={70}/>
      </div>
      <div>
        <button>
          Analyse
        </button>
      </div>
    </div>
  );
}

export default App;
