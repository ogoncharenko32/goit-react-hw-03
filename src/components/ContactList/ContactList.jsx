import clsx from "clsx"
import css from "./ContactList.module.css"
import Contact from "../Contact/Contact"

const ContactList = ({ contacts, delContact }) => {
  return (
      <ul className={clsx(css.list)}>
          {contacts.map((contact) => (
              <li key={contact.id}>
                  <Contact name={contact.name} number={contact.number} delContact={delContact} id={contact.id} />
              </li>
          ))}
    </ul>
  )
}

export default ContactList