import React, {useState} from 'react'
import Guest from '../Guest';

export default function GuestList({Guests, setGuests, handleDelete}) {
  console.log(Guests)
  
  //if guestType === adults return {AdultsGuestList}
  //map over guests
  //if guestType === child return {h2 Child GuestList}
  const listType = Guests.length > 0 ? 
  Guests[0].guestType === "adult" 
  ? "Adult Guest List" 
  : "Child Guest List" 
  : "Guest List";

  
  return (
    <>
     <div className="child-list-container">
      <h4>{listType}</h4>
      <ul className="child-list list">
       {Guests.map((guest, id) => (
        <Guest 
        key={id} 
        guest={guest} 
        Guests = {Guests}
        setGuests={setGuests}
        handleDelete={handleDelete}
         />
       ))}
     </ul>
    </div>
   </>
  )
}