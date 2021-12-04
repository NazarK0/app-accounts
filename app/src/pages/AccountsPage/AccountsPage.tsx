import { useEffect, useState } from 'react';
import { useModal } from 'react-hooks-use-modal';
import { useFormik } from "formik";
import AccountsTable from '../../components/AccountsTable';
import MessageBox from '../../components/MessageBox';
import Navbar from '../../components/Navbar';
import { EStatusType, IAccount } from '../../types/AccountsTable.props';
import { EMessageType } from '../../types/MessageBox.props';
import { ENavbarLinks } from '../../types/Navbar.props';
import s from './AccountsPage.module.scss';

const AccountsPage = ():JSX.Element => {
  const accountsListUrl = `${process.env.REACT_APP_DB_URL}/accounts` || 'localhost';
  const[error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [accounts, setAccounts] = useState([]);
  

  const [CreateAccountModal, openModal, closeModal, isOpenModal] = useModal('root', {
    preventScroll: true,
    closeOnOverlayClick: false
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      account_name: "",
      email: "",
      status: EStatusType.disable,
      start_date: 0,
      expiration_date: 0, 
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  
  useEffect(() => {
    fetch(accountsListUrl)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setAccounts(result.sort((a: IAccount, b: IAccount) => {
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }

            return 0;
          }));
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [accountsListUrl])
  return (
    <div>
      <Navbar active={ENavbarLinks.accounts} />
      <div className="container">
        <header className={s.header}>
          <h1>Accouts list</h1>
          <button onClick={openModal} className="create">Create account</button>
        </header>
        {error && <MessageBox type={EMessageType.error} message={error} />}
        <MessageBox message={`Total: ${accounts.length}`} />
        {isLoaded && <AccountsTable accounts={accounts} />}
        <CreateAccountModal>
          <div className={s.modalBlock}>
            <h2>Create account</h2>
            <form onSubmit={formik.handleSubmit}>
              <label htmlFor="email">Email Address</label>
              <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              <input
                id="account"
                name="accountName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.account_name}
              />
              <input
                id="status"
                name="status"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.status}
              />
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <input
                id="startDate"
                name="startDate"
                type="date"
                onChange={formik.handleChange}
                value={formik.values.start_date}
              />
              <input
                id="expirationDate"
                name="expirationDate"
                type="date"
                onChange={formik.handleChange}
                value={formik.values.start_date}
              />
              <button type="submit">Submit</button>
            </form>
            <button className="primary" onClick={closeModal}>Cancel</button>
          </div>
        </CreateAccountModal>
      </div>
    </div>
  )
}

export default AccountsPage;