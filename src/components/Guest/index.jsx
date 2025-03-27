import React from 'react'

export default function Guest({ guest, handleDelete }) {
    //console.log(guest)
    //Only run the handleDelete function once the button is clicked
    //Use an arrow function to implement this
  
  return (
    <li>
      {guest.name}
      <button onClick={() => handleDelete(guest.id)}  className="deleteBtn">&#10006;</button>
    </li>
  );
}
 
    
  

