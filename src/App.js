import './App.css'; //IMPORTA LOS ESTILOS
import Mensaje from './Mensaje.js';



function App()  { 
  return (
    <div className="App"> 
			<Mensaje color='red' message='Estamos trabajando'/>
      <Mensaje color='blue' message='en un curso'/>
      <Mensaje color='green' message='de REACT'></Mensaje>
    </div>
  );
}

export default App;
