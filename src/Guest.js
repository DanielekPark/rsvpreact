import React from 'react'; 

const Guest = ({guestName, handleRemoveGuest, id, isConfirmed, toggleConfirmation, editGuestName, hideGuest}) => {
 return(
  <li className={`pending ${hideGuest && !isConfirmed ? 'hide-guest' : null }`}>
  <span>{guestName}</span>
   <label><input type="checkbox" checked={isConfirmed} onChange={() => toggleConfirmation(id)}/>Confirmed</label>
   <button onClick={() => editGuestName(id)}>Edit</button>
   <button onClick={() => handleRemoveGuest(id)}>Remove</button>
  </li>
 ); 
}

export default Guest; 