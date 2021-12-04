import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import MessageBox from '../../components/MessageBox';
import Profile from '../../components/Profile';
import { EMessageType } from '../../types/MessageBox.props';
import s from './PorfilePage.module.scss';

const ProfilePage = ():JSX.Element => {
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [account, setAccount] = useState(null);

  const profileUrl = `${process.env.REACT_APP_DB_URL}/accounts/${id}` || 'localhost';

  useEffect(() => {
    fetch(profileUrl)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setAccount(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [profileUrl])

  return (
    <div>
      {error && <MessageBox type={EMessageType.error} message={error} />}
      {isLoaded && <Profile profile={account} /> }
    </div>
  )
}

export default ProfilePage;