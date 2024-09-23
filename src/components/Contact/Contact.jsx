import clsx from "clsx"
import css from "./Contact.module.css"
import { FaPhone, FaUser } from "react-icons/fa6";

const Contact = ({ name, number, delContact, id }) => {
  return (
      <div className={clsx(css.contactWrapper)}>
          <div className={clsx(css.userInfo)}>
              <p><FaUser /> {name}</p>
              <p><FaPhone /> {number}</p>
          </div>
          <button className={clsx(css.delBtn)} type="button" onClick={() => {
              delContact(id)
          }}>Delete</button>
      </div>
  )
}

export default Contact