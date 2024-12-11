import { Outlet } from "react-router-dom"
import Contacts from "../pages/Contacts"



const ContactLayout = () => {
  return (
    <div>
        <Contacts/> 
        <Outlet/>
    </div>
  )
}

export default ContactLayout