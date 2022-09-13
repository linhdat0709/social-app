
import { UserType } from '../../DummyData'
import { StyleRightbarFriend } from './Online.style'


interface Props {
    user:UserType;
}

const Online = (props:Props) => {

    const {user} = props

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div>
      <StyleRightbarFriend>
            <div className="rightbarProfileImgContainer">
              <img
                src={PF+user.profilePicture}
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">{user.username}</span>
          </StyleRightbarFriend>
    </div>
  )
}

export default Online
