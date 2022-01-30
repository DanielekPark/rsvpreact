import React from 'react'; 

type Props = {
  guests: any
}

const Counter: React.FC<Props> = ({guests}: Props) => {
  return (
    <table className="counter">
      <tbody>
        <tr>
          <td>Attending: {guests.reduce((total: number, guest: any) => {
              if(guest.isConfirmed){
                total++
              }
              return total
            }, 0)}</td>
          <td></td>
        </tr>
        <tr>
          <td>Unconfirmed: {guests.reduce((total: number, guest: any) => {
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