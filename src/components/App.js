import { useEffect, useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/pizzas')
    .then(resp => resp.json())
    .then(data => setPizzas(data))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <Header />
      <PizzaForm onSubmit={handleSubmit}/>
      <PizzaList pizzas={pizzas}/>
    </>
  );
}

export default App;
