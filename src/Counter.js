import React from 'react'; 

const Counter = ({guests}) => {
  return (
    <table className="counter">
      <tbody>
        <tr>
          <td>Attending: {guests.reduce((total, guest) => {
              if(guest.isConfirmed){
                total++
              }
              return total
            }, 0)}</td>
          <td></td>
        </tr>
        <tr>
          <td>Unconfirmed: {guests.reduce((total, guest) => {
              if(!guest.isConfirmed){
                total++
              }
              return total
            }, 0)}</td>
          <td></td>
        </tr>
        <tr>
          <td>Total: {guests.length}</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  ); 
}

export default Counter; 