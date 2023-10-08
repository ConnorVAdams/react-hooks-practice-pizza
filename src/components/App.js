import { useEffect, useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([])
  const [formData, setFormData] = useState({
    id: '',
    topping: '',
    size: 'Small',
    vegetarian: '',
  })

  const handleFormChange = ({ target: { name, value } }) => {
    if (name === 'topping') {
      setFormData({
        ...formData,
        topping: value
      })
    } else if (name === 'size') {
      setFormData({
        ...formData,
        size: value
      })
    } else {
      setFormData({
        ...formData,
        vegetarian: value === 'Vegetarian' ? true : false
      })
    }
  }

  useEffect(() => {
    fetch('http://localhost:3001/pizzas')
    .then(resp => resp.json())
    .then(data => setPizzas(data))
  }, [])

  const handleSubmit = (e) => {
    //Populate list with updated pizza data, re-render only list
    e.preventDefault()
  }

  const handleEdit = (id) => {
    //Populate form with pizza data, re-render only form
    //Capture pizza info from database using its ID
    //Pass that info to pizza form to update its formData
    fetch(`http://localhost:3001/pizzas/${id}`)
      .then(resp => resp.json())
      .then(data => setFormData(data))
      
    }

  return (
    <>
      <Header />
      <PizzaForm handleSubmit={handleSubmit} formData={formData} handleFormChange={handleFormChange}/>
      <PizzaList pizzas={pizzas} onEdit={handleEdit}/>
    </>
  );
}

export default App;
