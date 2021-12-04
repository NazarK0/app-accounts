import s from './Profile.module.scss';
import IProfileProps from "../../types/Profile.props";
import Navbar from '../Navbar';
import StatusBadge from '../StatusBadge';

const Profile = ({ profile }: IProfileProps ):JSX.Element => {
    
  return (
    <>
      <Navbar />
      <div className={s.banner}></div>
      { profile && (
        <div className={s.profile}>
          <div className="container">
            <h1>{profile.name}</h1>
            <ul className={s.propertyList}>
              <li>
                <span className={s.description}>
                  <i className="fas fa-user"></i>
                  Name:
                </span>
                {profile.name}
              </li>
              <li>
                <span className={s.description}>
                  <i className="fas fa-user-tie"></i>
                  Account name:
                </span>
                {profile.account_name}
              </li>
              <li>
                <span className={s.description}>
                  <i className="far fa-envelope"></i>
                  E-mail:
                </span>
                {profile.email}
              </li>
              <li>
                <span className={s.description}>
                  <i className="fas fa-star"></i>
                  Status:
                </span>
                {<StatusBadge status={profile.status} />}
              </li>
              <li>
                <span className={s.description}>
                  <i className="far fa-clock"></i>
                  Start date:
                </span>
                {profile.start_date}
              </li>
              <li>
                <span className={s.description}>
                  <i className="fas fa-clock"></i>
                  Expiration date:
                </span>
                {profile.expiration_date}
              </li>
            </ul>
          </div>
        </div>
      )
    }
  </>
  )
}

export default Profile;
