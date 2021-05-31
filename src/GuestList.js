import React from 'react'
import Guest from './Guest'

const GuestList = ({ guests, handleRemoveGuest, toggleConfirmation, editGuestName, hideGuest }) => {
  return (
    <ul>
      {guests.map((guest) => {
        const { guestName, id, isConfirmed } = guest; 
        return (
          <Guest 
            key={id} id={id} 
            guestName={guestName} 
            handleRemoveGuest={handleRemoveGuest} 
            isConfirmed={isConfirmed} 
            toggleConfirmation={toggleConfirmation} 
            editGuestName={editGuestName} 
            hideGuest={hideGuest} />      
        )
      })}
    </ul>
  ); 
}

export default GuestList; 