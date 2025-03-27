import React, { useState } from 'react'
import GuestForm from '../GuestForm'
import GuestListContainer from '../GuestListContainer'

export default function GuestListCard() {
  const [Guests, setGuests] = useState([
    {id: 4, name: 'Dana Lee', attending: false, guestType: 'adult' },
    { id: 2, name: 'Bob Smith', attending: false, guestType: 'adult' },
    { id: 1, name: 'Alice Johnson', attending: true, guestType: 'child' },
    { id: 3, name: 'Charlie Davis', attending: true, guestType: 'child' },

  ]);

  let message

  if (Guests.length === 0) {
    message = ""
  } else if (Guests.length === 1) {
    message = `🎉 You have ${Guests.length}   guest attending 🎉`
  } else  {
    message = `🎉 You have ${Guests.length} guests attending 🎉`
  }

  return (
    <>
    <main>
     <div className="guest-list-container">
         <h1 className="name">Lauren's Party Guest List</h1>
         <h4 className="message">{message}</h4>
         <GuestForm Guests={Guests} setGuests={setGuests} />
         <GuestListContainer Guests={Guests} setGuests={setGuests}/>
    </div>
    </main>
    </>
  )
}
