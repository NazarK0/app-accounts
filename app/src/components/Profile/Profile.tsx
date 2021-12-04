import s from './Profile.module.scss';
import IProfileProps from "../../types/Profile.props";

const Profile = ({ profile }: IProfileProps ):JSX.Element => {
    
  return (
    <div className={s.profile}>
      {JSON.stringify(profile)}
    </div>
  )
}

export default Profile;