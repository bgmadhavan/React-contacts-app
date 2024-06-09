import React from 'react'

export default function Details({ contact }) {
  return (
    <div className='detCon'>
      {contact ? (
      <table>
        <tr>
          <td>
            Name
          </td>
          <td>
            {contact.name}
          </td>
        </tr>
        <tr>
          <td>
            phone
          </td>
          <td>{contact.phone}</td>
        </tr>
        <tr>
          <td>
            email
          </td>
          <td>{contact.email}</td>
        </tr>
      </table>
      ) :
      (
        <p>Select a contact to see details</p>
      )
      }
    </div>
  )
}
