import SacarCoches from "./sacarCoche"
import Coches from "./concesionario"

console.log(Coches)

function App() {
  const mostrarCoches = Coches.map(mostrar => {
 return <SacarCoches color={mostrar.color} altura={mostrar.altura} longitud={mostrar.longitud} ruedas={mostrar.ruedas}/>
})

return mostrarCoches;

}

export default App;
