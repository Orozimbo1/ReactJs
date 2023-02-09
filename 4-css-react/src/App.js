import './App.css';

import MyComponent from './components/MyComponent';

function App() {
  return (
    <>
      {/*CSS Global*/}
      <h1>React com componentes</h1>
      {/*CSS de componente*/}
      <MyComponent />
      <p>Este parágrafo é do App.js</p>
    </>
  );
}

export default App;
