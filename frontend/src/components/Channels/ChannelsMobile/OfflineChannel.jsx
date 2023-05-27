import { StyledOfflineChannel } from "./OfflineChannel.styled";
import Image from "next/image";

const OfflineChannel = ({ user, imageId }) => {
  return (
    <StyledOfflineChannel>
      <div className="offline-box">
        <div className="left">
          <div className="pp">
            <img src={`https://i.pravatar.cc/5${imageId}`} alt="" />
          </div>
        </div>
        <div className="right">
          <div className="username">{user.username}</div>
          <div className="videos">7 new videos</div>
        </div>
      </div>
    </StyledOfflineChannel>
  );
};

export default OfflineChannel;
