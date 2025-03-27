import React, {useState} from 'react'
import GuestList from '../GuestList';

export default function GuestListContainer({Guests, setGuests}) {
  //console.log(Guests);

  function handleDelete(id) {
    //filter the guest with the matching value
    //console.log(id)
    //console.log("I got clicked");
    let filteredList = Guests.filter(guest => guest.id !== id);
    console.log("Filtered List:", filteredList);
    setGuests(filteredList);
  }

  //Separate guests into adult and child lists using filter?
  //Remember filter is a yes or no value
  const adultGuests = Guests.filter((guest) => {
    return guest.guestType === 'adult'
  });

  const childGuests = Guests.filter((guest) => {
    return guest.guestType === 'child'
  });


  return (
    <>
    <div className="list-container">
        <GuestList  Guests={adultGuests} setGuests={setGuests} handleDelete={handleDelete} />
        <GuestList Guests={childGuests} setGuests={setGuests} handleDelete={handleDelete}   />
    </div>
    </>
  )
}
