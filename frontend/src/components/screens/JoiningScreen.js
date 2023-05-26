import React, { useState } from "react";
import { MeetingDetailsScreen } from "../MeetingDetailsScreen";
import { createMeeting, getToken, validateMeeting } from "../../pages/api/api";
import ConfirmBox from "../ConfirmBox";

export function JoiningScreen({
  participantName,
  setParticipantName,
  setMeetingId,
  setToken,
  onClickStartMeeting,
  setMeetingMode,
  meetingMode,
}) {
  const [videoTrack, setVideoTrack] = useState(null);

  const [dlgMuted, setDlgMuted] = useState(false);
  const [dlgDevices, setDlgDevices] = useState(false);

  return (
    <div className=" inset-0">
      <div className="overflow-y-auto flex flex-col flex-1 h-screen bg-black">
        <div className="flex flex-1 flex-col items-center justify-center xl:m-16 lg:m-6 md:mt-9 lg:mt-14 xl:mt-20 mt-3 md:absolute md:left-0 md:right-0 md:top-0 md:bottom-0">
          <MeetingDetailsScreen
            participantName={participantName}
            setParticipantName={setParticipantName}
            videoTrack={videoTrack}
            setVideoTrack={setVideoTrack}
            setMeetingMode={setMeetingMode}
            meetingMode={meetingMode}
            onClickStartMeeting={onClickStartMeeting}
            onClickJoin={async (id) => {
              const token = await getToken();
              const valid = await validateMeeting({
                roomId: id,
                token,
              });

              if (valid) {
                setToken(token);
                setMeetingId(id);
                if (videoTrack) {
                  videoTrack.stop();
                  setVideoTrack(null);
                }
                onClickStartMeeting();
                setParticipantName("");
              } else alert("Invalid Meeting Id");
            }}
            _handleOnCreateMeeting={async () => {
              const token = await getToken();
              const _meetingId = await createMeeting({ token });
              setToken(token);
              setMeetingId(_meetingId);
              setParticipantName("");
              return _meetingId;
            }}
          />
        </div>
      </div>
      <ConfirmBox
        open={dlgMuted}
        successText="OKAY"
        onSuccess={() => {
          setDlgMuted(false);
        }}
        title="System mic is muted"
        subTitle="You're default microphone is muted, please unmute it or increase audio
            input volume from system settings."
      />

      <ConfirmBox
        open={dlgDevices}
        successText="DISMISS"
        onSuccess={() => {
          setDlgDevices(false);
        }}
        title="Mic or webcam not available"
        subTitle="Please connect a mic and webcam to speak and share your video in the meeting. You can also join without them."
      />
    </div>
  );
}
