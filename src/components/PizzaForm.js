import { useState } from "react";

function PizzaForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    topping: '',
    size: '',
    vegetarian: '',
  })
  const [radioSelected, setRadioSelected] = useState(false)

  const handleFormChange = (e) => { 
    if (e.target.name === 'topping') {
      console.log('text')
    } else if (e.target.name === 'size') {
      console.log('select')
    } else {
      console.log('radio')
    }
  }
  
  return (
    <form onSubmit={onSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            onChange={handleFormChange}
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={formData.topping}
          />
        </div>
        <div className="col">
          <select onChange={handleFormChange} className="form-control" name="size" value={formData.size}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              onChange={handleFormChange}
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={formData.vegetarian}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              onChange={handleFormChange}
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={!formData.vegetarian && formData.vegetarian !== ''}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
