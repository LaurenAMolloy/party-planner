
import React from "react";
import { nanoid } from "nanoid";

export default function GuestForm({Guests, setGuests}) {

    //Data from the form
    function addGuest(formData) {
        
        const guestName = formData.get("guest");
        const guestType = formData.get("guest-type");
        //console.log(guestName, guestType);

        if(!guestName || !guestType) {
            alert("Please enter a guest name and type")
            return
        }

        //create a guest object that contains name, guesttype and a unique id
        const guest = {
            name: guestName,
            guestType,
            id: { nanoid }
        }
        console.log(guest)

        //Instead using push like in JS we need to set the state
        //Use the previous state to make sure the latest state is used
        setGuests([...Guests, guest])
        //How to reset form?
    }

    function handleReset() {
        //console.log("I am the reset btn")
        setGuests([]);
    }

    function handleSort() {
        //console.log("I am the sort btn")
        //copy the array first
        const sortedList = [...Guests].sort((a, b) => a.name.localeCompare(b.name))
        setGuests(sortedList)
    }


  return (
    <>
    <form action={addGuest} id="guest-list-form" autoComplete="off">
    <input type="text" placeholder="Guest name here" className="guest-input" name="guest"/>

    <fieldset className="adult-child">
        <legend>Select adult or child:</legend>

        <div className="radioContainer">
            <input type="radio" id="adult" name="guest-type" value="adult" />
            <label htmlFor="adult">Adult</label>
        </div>
        <div className="radioContainer">
            <input type="radio" id="child" name="guest-type" value="child" />
            <label htmlFor="child">Child</label>
        </div>
    </fieldset>

    <button className="submit-btn" type="submit">+ Add Guest</button>
    <button onClick={handleSort} className ="sort-btn" type="button" value="Submit">Sort Guests</button>
    <button onClick={handleReset} className = "reset-btn" type="reset" value="Reset">Clear Form</button>
</form>
</>
  )
}
