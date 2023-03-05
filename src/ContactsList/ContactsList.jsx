import React from "react"
export const ContactsList = ({ contacts }) => {
  return (
    <>
      <ul>
        {contacts.map(({ name, number, id }) => (
          <li key={id}>
            {name}: {number}
          </li>
        ))}
      </ul>
    </>
  )
}
