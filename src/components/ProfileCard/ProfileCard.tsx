import style from "./ProfileCard.module.css";

interface Props {
  avatar: string;
  name: string;
  description: string;
}

function ProfileCard({ avatar, name, description}: Props) {
  return (
    <div className={style.profile_card}>
      <img className={style.img} src={avatar} alt="User avatar"></img>
        <p className={style.name}>{name}</p>
        <p className={style.description}>{description}</p>
    </div>
  );
}

export default ProfileCard;