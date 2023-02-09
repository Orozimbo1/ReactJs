import './App.css';

import MyComponent from './components/MyComponent';

function App() {
  const n = 11

  return (
    <>
      {/*CSS Global*/}
      <h1>React com componentes</h1>
      {/*CSS de componente*/}
      <MyComponent />
      <p>Este parágrafo é do App.js</p>
      {/*CSS inline*/}
      <p style={{ backgroundColor: "orange", color: "gold", padding: "25px", borderTop: "1px solid black" }}>
        Este parágrafo foi estilizado de forma inline
      </p>
      {/*CSS inline dinâmico*/}
      <h2 style={n < 10 ? ({ color: "purple", backgroundColor: "brown" }) : ({ color: "gray", backgroundColor: "violet" })}>CSS dinâmico</h2>
    </>
  );
}

export default App;
