import { useEffect, useState } from 'react';
import { useModal } from 'react-hooks-use-modal';
import AccountsTable from '../../components/AccountsTable';
import MessageBox from '../../components/MessageBox';
import Navbar from '../../components/Navbar';
import { IAccount } from '../../types/AccountsTable.props';
import { EMessageType } from '../../types/MessageBox.props';
import { ENavbarLinks } from '../../types/Navbar.props';
import s from './AccountsPage.module.scss';
import CreateAccountForm from '../../components/CreateAccountForm';

const AccountsPage = ():JSX.Element => {
  const accountsListUrl = `${process.env.REACT_APP_DB_URL}/accounts` || 'localhost';
  const[error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [accounts, setAccounts] = useState([]);
  

  const [CreateAccountModal, openModal, closeModal] = useModal('root', {
    preventScroll: true,
    closeOnOverlayClick: false
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
        <CreateAccountForm modal={CreateAccountModal} closeModal={closeModal}/>
      </div>
    </div>
  )
}

export default AccountsPage;