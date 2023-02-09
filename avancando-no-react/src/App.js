import './App.css';

import City from './assets/city.jpg'

import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetail from './components/CarDetail';

function App() {
  const lastName = "Orozimbo"

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
      {/* props */}
      <ShowUserName name="Matheus" lastName={lastName} />
      {/* destructuring props */}
      <CarDetail brand="Volkswagen" km="360.000" model="Fusca" year="1976" color="Branco" />
    </div>
  );
}

export default App;
