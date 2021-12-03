import MessageBox from '../../components/MessageBox';
import Navbar from '../../components/Navbar';
import { ENavbarLinks } from '../../types/Navbar.props';
import s from './ContactsPage.module.scss';

const ContactsPage = ():JSX.Element => {
  return (
    <div>
      <Navbar active={ENavbarLinks.accounts} />
      <div className="container">
        <header className={s.header}>
          <h1>Accouts list</h1>
          <button className="create">Create account</button>
        </header>
        <MessageBox message="Total: 24" />
      </div>
    </div>
  )
}

export default ContactsPage;