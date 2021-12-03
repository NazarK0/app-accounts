import MessageBox from '../../components/MessageBox';
import Navbar from '../../components/Navbar';
import { ENavbarLinks } from '../../types/Navbar.props';
import s from './Contacts.module.scss';

const ContactsPage = ():JSX.Element => {
  return (
    <div>
      <Navbar active={ENavbarLinks.accounts} />
      <header>
        <h1>Accoutn list</h1>
        <button className="create">Create account</button>
      </header>
      <MessageBox message="Total: 24"/>
    </div>
  )
}

export default ContactsPage;