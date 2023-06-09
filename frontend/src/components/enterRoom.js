import { JoiningScreen } from "./screens/JoiningScreen";
import { useState, useEffect } from "react";
import { Constants, MeetingProvider } from "@videosdk.live/react-sdk";
import { useAuth } from "@/context/AuthProvider";

const EnterRoom = () => {
  const [isMeetingStarted, setMeetingStarted] = useState(false);
  const {
    participantName,
    setParticipantName,
    setToken,
    meetingMode,
    setMeetingMode,
    setMeetingId,
  } = useAuth();

  const isMobile = window.matchMedia("only screen and (max-width: 768px)")
    .matches;

  useEffect(() => {
    if (isMobile) {
      window.onbeforeunload = () => {
        return "Are you sure you want to exit?";
      };
    }
  }, [isMobile]);
  return (
    <>
      <JoiningScreen
        participantName={participantName}
        setParticipantName={setParticipantName}
        setMeetingId={setMeetingId}
        setToken={setToken}
        onClickStartMeeting={() => {
          setMeetingStarted(true);
        }}
        startMeeting={isMeetingStarted}
        meetingMode={meetingMode}
        setMeetingMode={setMeetingMode}
      />
    </>
  );
};

export default EnterRoom;
