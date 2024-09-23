import { useState, useEffect } from 'react'
import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList'

function App() {
  
  const [contactsList, setContactsList] = useState(() => {
    const savedContacts = JSON.parse(window.localStorage.getItem("saved-contacts"))
    if (savedContacts !== null) {
      return savedContacts
    }
    return ([
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ])

  })
  const [filter, setFilter] = useState("")
  
  useEffect(() => {
      window.localStorage.setItem("saved-contacts", JSON.stringify(contactsList))
  }, [contactsList])

  const filteredContacts = contactsList.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()));

  const addContact = (newContact) => {
    setContactsList((prevContacts) => {
      return [...prevContacts, newContact]
    })
  }

  const delContact = (id) => {
    setContactsList((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== id)
    })
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={ addContact } />
      <SearchBox filter={ filter } setFilter={ setFilter } />
      <ContactList contacts={ filteredContacts } delContact={ delContact } />
    </div>

  )
}

export default App
