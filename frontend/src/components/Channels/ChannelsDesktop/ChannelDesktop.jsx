import { StyledChannelDesktop } from "./ChannelDesktop.styled";
import Image from "next/image";
import { FaEllipsisV } from "react-icons/fa";

const ChannelDesktop = ({ user, imageId, video }) => {
  return (
    <StyledChannelDesktop>
      <div className="channel-box">
        <div className="live-screen" style={{ position: "relative" }}>
          <Image src={user.liveScreen} alt="" fill />
          <div className={`live ${video ? "invisible" : ""}`}>live</div>
          <div className={`viewers ${video ? "invisible" : ""}`}>
            333 viewers
          </div>
          <div className={`video ${video ? "video-visible" : ""}`}>
            <div className="video-tag top">11:44</div>
            <div className="video-tag bottom-right">4 hours ago</div>
            <div className="video-tag bottom">188 views</div>
          </div>
        </div>
        <div className="channel-info">
          <div className="left">
            <div className="pp" style={{ position: "relative" }}>
              <Image src={`https://i.pravatar.cc/5${imageId}`} alt="" fill />
            </div>
            <div className="profile-info">
              <div className="title">{user.title}</div>
              <div className="username">{user.username}</div>
              <div className="game">{user.game}</div>
              <div className="tags">
                <div className="tag">English</div>
                <div className="tag">Esports</div>
              </div>
            </div>
          </div>
          <div className="right">
            <FaEllipsisV />
          </div>
        </div>
      </div>
    </StyledChannelDesktop>
  );
};

export default ChannelDesktop;
