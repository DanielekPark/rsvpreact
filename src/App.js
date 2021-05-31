import React, { useState } from 'react';
import GuestList from './GuestList'
import Counter from './Counter'

function App() {
  const [addName, setAddName] = useState('');
  const [guests, setGuests] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editGuestId, setEditGuestId] = useState('');
  const [hideGuest, setHideGuest] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault()
    //If the input field is blank
    if(!addName && !isEditing){
      alert("You can't submit a blank name"); 
      return; 
    }
    //Edit guest name
    if(addName && isEditing){
      const editedGuestList = guests.map((guest) => {
        if(guest.id === editGuestId){
          return {
            ...guest,
            guestName: addName
          };
        }else{
          return guest; 
        }
      })
      setGuests(editedGuestList);
      setIsEditing(!isEditing);
      setEditGuestId('');
    }

    //Submits a guest name
    if(addName && !isEditing){
      const newGuest = {guestName: addName, id: new Date().getTime().toString(), isConfirmed: false};
      setGuests([...guests, newGuest]);
    }
    setAddName(''); 
  }

  //Checkbox for guests for unconfirmed or confirmed
  const toggleConfirmation = (id) => {
    const toggleGuest = guests.map((guest) => {
      if(guest.id === id){
        return {
          ...guest,
          isConfirmed: !guest.isConfirmed
        };
      }else{
        return guest;
      }
    })
    setGuests(toggleGuest)
  }

  //Removes the guest when the remove button is clicked
  const handleRemoveGuest = (id) => {
    if(isEditing){
      alert('Please edit the guest name');
      return;
    }
    const removeGuest = guests.filter((guest) => guest.id !== id);
    setGuests(removeGuest);
  }

  //Edit the guest name when the edit button is clicked
  const editGuestName = (id) => {
    if(isEditing) return;
    const getGuestToEdit = guests.find((guest) => guest.id === id);
    setAddName(getGuestToEdit.guestName);
    setEditGuestId(getGuestToEdit.id);
    setIsEditing(!isEditing);
  }

  return (
    <div className="App">
      <header>
        <h1 className="topDivFont">RSVP</h1>
        <p className="topDivFont">Come join us!</p>
        <form onSubmit={handleSubmit}>
          <input type="text" 
            placeholder="Type your name"
            onChange={(e) => setAddName(e.target.value)}
            value={addName} />
          <button type="submit">{isEditing ? 'Save' : 'Submit'}</button>
        </form>
      </header>
      <div className="main">
        <div>
          <h2>Guest List</h2>
          <label>
            <input 
              type="checkbox" 
              checked={hideGuest} 
              onChange={() => setHideGuest(!hideGuest)} /> 
              Hide unconfirmed guests
          </label>
        </div>
          <Counter guests={guests} />
          <GuestList 
            guests={guests} 
            handleRemoveGuest={handleRemoveGuest} 
            toggleConfirmation={toggleConfirmation} 
            editGuestName={editGuestName} 
            hideGuest={hideGuest} />
      </div>  
    </div>
  );  
}

export default App;