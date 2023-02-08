import './App.css';

import City from './assets/city.jpg'

import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';

function App() {
  return (
    <div>
      <h1>Avançando em react</h1>
      {/*Imagem em public*/}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/*Imagem em assets na src*/}
      <div>
        <img src={City} alt="Paisagem" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
    </div>
  );
}

export default App;
