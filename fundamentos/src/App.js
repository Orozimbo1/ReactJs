// Componentes
import FirstComponent from './components/FirstComponent';
import TemplateExpression from './components/TemplateExpression';
import MyComponent from './components/MyComponent';
import Events from './components/Events';

// Styles / css
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos</h1>
      <FirstComponent />
      <TemplateExpression />
      <MyComponent />
      <Events />
    </div>
  );
}

export default App;
