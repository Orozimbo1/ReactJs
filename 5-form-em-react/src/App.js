import './App.css';

import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h1>Form em React</h1>
      <MyForm user={{name: "Enzo", email: "enzo@gmail.com"}} />
    </div>
  );
}

export default App;
