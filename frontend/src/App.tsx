import "./App.css";
import MerchProductList from "./components/MerchProductList";

function App() {
  const showAlert = () => {
    alert("bonjour");
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={showAlert}>Show Alert</button>
      </header>
      <main>
        <MerchProductList />
      </main>
    </div>
  );
}

export default App;
