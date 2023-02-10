import './App.css';

import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h1>Form em React</h1>
      <MyForm user={{name: "Enzo", email: "enzo@gmail.com", bio: "Sou novo", role: "admin"}} />
    </div>
  );
}

export default App;
