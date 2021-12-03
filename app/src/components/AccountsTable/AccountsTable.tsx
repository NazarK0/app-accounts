import s from './AccountsTable.module.scss';
import IAccountsTableProps, { IAccount } from "../../types/AccountsTable.props";
import classNames from 'classnames';

const AccountsTable = ({ accounts }: IAccountsTableProps ):JSX.Element => {
  

  
  
  return (
    <div className={classNames(s.messageBox, s[messageTypeClassName])}>
      {message}
    </div>
  )
}

export default AccountsTable;