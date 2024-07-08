import Ad from "./Ad";
import Birthdays from "./Birthdays";
import FrienRequest from "./FriendRequest";
import UserInformationCard from "./UserInformationCard";
import UserMediaCard from "./UserMediaCard";

const RightMenu = ({ userId }: { userId?: string }) => {
  return (
    <div className="flex flex-col gap-6">
      {userId ? (
        <>
          <UserInformationCard userId={userId} />
          <UserMediaCard userId={userId} />
        </>
      ) : null}
      <FrienRequest />
      <Birthdays />
      <Ad size="md" />
    </div>
  );
};

export default RightMenu;
