import React, { useEffect, useState } from "react";
import { Constants, MeetingProvider } from "@videosdk.live/react-sdk";
import { LeaveScreen } from "./screens/LeaveScreen";
import { JoiningScreen } from "./screens/JoiningScreen";
import { ILSContainer } from "../interactive-live-streaming/ILSContainer";
import { MeetingAppProvider } from "../MeetingAppContextDef";
import { useAuth } from "@/context/AuthProvider";

const Container = () => {
  const [micOn, setMicOn] = useState(false);
  const [webcamOn, setWebcamOn] = useState(true);
  const [selectedMic, setSelectedMic] = useState({ id: null });
  const [selectedWebcam, setSelectedWebcam] = useState({ id: null });
  const [selectWebcamDeviceId, setSelectWebcamDeviceId] = useState(
    selectedWebcam.id
  );
  const [selectMicDeviceId, setSelectMicDeviceId] = useState(selectedMic.id);
  const [isMeetingStarted, setMeetingStarted] = useState(false);
  const [isMeetingLeft, setIsMeetingLeft] = useState(false);
  const {
    participantName,
    setParticipantName,
    setToken,
    token,
    meetingMode,
    setMeetingMode,
    setMeetingId,
    meetingId,
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
      <MeetingAppProvider
        selectedMic={selectedMic}
        selectedWebcam={selectedWebcam}
        initialMicOn={micOn}
        initialWebcamOn={webcamOn}
      >
        <MeetingProvider
          config={{
            meetingId,
            micEnabled: micOn,
            webcamEnabled: webcamOn,
            name: participantName ? participantName : "TestUser",
            mode: meetingMode,
            multiStream: false,
          }}
          token={token}
          reinitialiseMeetingOnConfigChange={true}
          joinWithoutUserInteraction={true}
        >
          <ILSContainer
            onMeetingLeave={() => {
              setToken("");
              setMeetingId("");
              setParticipantName("");
              setWebcamOn(false);
              setMicOn(false);
              setMeetingStarted(false);
            }}
            setIsMeetingLeft={setIsMeetingLeft}
            selectedMic={selectedMic}
            selectedWebcam={selectedWebcam}
            selectWebcamDeviceId={selectWebcamDeviceId}
            setSelectWebcamDeviceId={setSelectWebcamDeviceId}
            selectMicDeviceId={selectMicDeviceId}
            setSelectMicDeviceId={setSelectMicDeviceId}
            micEnabled={micOn}
            webcamEnabled={webcamOn}
            meetingMode={meetingMode}
            setMeetingMode={setMeetingMode}
          />
        </MeetingProvider>
      </MeetingAppProvider>
    </>
  );
};

export default Container;
