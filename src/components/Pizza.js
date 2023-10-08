import React from "react";

function Pizza({ id, topping, size, vegetarian, onEdit }) {

  const captureId = ({ target: { id } }) => {
    onEdit(id)
  }

  return (
    <tr >
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? 'Yes' : 'No'}</td>
      <td>
        <button id={id} onClick={captureId} type="button" className="btn btn-primary">
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
