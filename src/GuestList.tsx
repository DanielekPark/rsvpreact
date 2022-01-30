import React from 'react'
import Guest from './Guest'

type Props = {
  guests: any
  handleRemoveGuest: Function;
  editGuestName: Function;
  toggleConfirmation: Function; 
  hideGuest: boolean; 
}

const GuestList: React.FC<Props> = ({ guests, handleRemoveGuest, toggleConfirmation, editGuestName, hideGuest }: Props) => {

  return (
      <ul>
        {guests.map((guest: any) => {
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