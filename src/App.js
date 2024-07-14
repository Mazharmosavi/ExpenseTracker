import logo from './logo.svg';
import './App.css';
import ExpenseApp from './components/ExpenseApp';

function App() {
  return (
    <div className="App">
      <header>
          <h2>Expense tracker</h2>
          <ExpenseApp/>
      </header>
    </div>
  );
}

export default App;
