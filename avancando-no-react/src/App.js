import './App.css';

import City from './assets/city.jpg'

import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetail from './components/CarDetail';
import Fragment from './components/Fragment';

function App() {
  const lastName = "Orozimbo"

  const cars = [
    {id: 1, brand: "Fiat", km: "660.000", model: "Prêmio", year: 1986, color: "Branco", newCar: false},
    {id: 2, brand: "Volkswagen", km: "160.000", model: "Fusca", year: 1976, color: "Branco", newCar: false},
    {id: 3, brand: "Dodje", km: "000.000", model: "Ram 2500", year: 2023, color: "Preto", newCar: true},
    {id: 4, brand: "Ford", km: "360.000", model: "Prêmio", year: 1996, color: "Vermelho", newCar: false}
  ]

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
      <CarDetail brand="Volkswagen" km="360.000" model="Fusca" year={1976} color="Amarelo" newCar={false} />
      {/* Reproveitando */}
      <CarDetail brand="Dodje" km="000.000" model="Ram 2500" year={2023} color="Preto" newCar={true} />
      <CarDetail brand="Ford" km="160.000" model="Escort" year={1996} color="Vermelho" newCar={false} />
      <CarDetail brand="Fiat" km="660.000" model="Prêmio" year={1986} color="Branco" newCar={false} />
      {/* loop em um array de objetos */}
      {cars.map((car) => (
        <CarDetail 
          key={car.id} 
          brand={car.brand} 
          km={car.km} 
          model={car.model} 
          year={car.year} 
          color={car.color} 
          newCar={car.newCar} 
        />
      ))}
      <Fragment />
    </div>
  );
}

export default App;
