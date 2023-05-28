import CheckIcon from "@mui/icons-material/Check";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import { Constants } from "@videosdk.live/react-sdk";
import React, { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthProvider";

export function MeetingDetailsScreen({
  onClickJoin,
  _handleOnCreateMeeting,
  participantName,
  setParticipantName,
  videoTrack,
  setVideoTrack,
  onClickStartMeeting,
  setMeetingMode,
  meetingMode,
}) {
  const { userData } = useAuth();
  const [studioCode, setStudioCode] = useState("");
  const [studioCodeError, setStudioCodeError] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [iscreateMeetingClicked, setIscreateMeetingClicked] = useState(false);
  const [isJoinMeetingClicked, setIsJoinMeetingClicked] = useState(false);

  return (
    <div
      className={`flex flex-1 flex-col justify-center w-full md:p-[6px] sm:p-1 p-1.5`}
    >
      {isJoinMeetingClicked ? (
        <>
          <input
            defaultValue={studioCode}
            onChange={(e) => {
              setStudioCode(e.target.value);
            }}
            placeholder={"Enter studio code"}
            className="px-4 py-3 bg-gray-650 rounded-xl text-white w-full text-center"
          />
          {studioCodeError && (
            <p className="text-xs text-red-600">
              Please enter valid studioCode
            </p>
          )}
        </>
      ) : null}

      {isJoinMeetingClicked && (
        <>
          <Link href="/room">
            <button
              className={`w-full bg-indigo-500  text-white px-2 py-3 rounded-xl mt-5`}
              onClick={(e) => {
                if (studioCode.match("\\w{4}\\-\\w{4}\\-\\w{4}")) {
                  onClickJoin(studioCode);
                  setParticipantName(userData.username);
                } else setStudioCodeError(true);
              }}
            >
              {isJoinMeetingClicked &&
              meetingMode === Constants.modes.CONFERENCE
                ? "Join Studio"
                : "Join Streaming Room"}
            </button>
          </Link>
        </>
      )}

      {!iscreateMeetingClicked && !isJoinMeetingClicked && (
        <div className="w-full md:mt-0 mt-4 flex flex-col">
          <div className="flex items-center justify-center flex-col w-full">
            <Link href="/room">
              <button
                className="w-full bg-purple-400 text-white px-2 py-3 rounded-xl"
                onClick={async (e) => {
                  const studioCode = await _handleOnCreateMeeting();
                  setStudioCode(studioCode);
                  setParticipantName(userData.username);
                  setIscreateMeetingClicked(true);
                  setMeetingMode(Constants.modes.CONFERENCE);
                  if (iscreateMeetingClicked) {
                    if (videoTrack) {
                      videoTrack.stop();
                      setVideoTrack(null);
                    }
                    onClickStartMeeting();
                  } else {
                    if (studioCode.match("\\w{4}\\-\\w{4}\\-\\w{4}")) {
                      onClickJoin(studioCode);
                    } else setStudioCodeError(true);
                  }
                }}
              >
                Create a Streaming
              </button>
            </Link>
            <button
              className="w-150 bg-purple-400 text-white px-2 py-3 rounded-xl mt-5 "
              onClick={(e) => {
                setIsJoinMeetingClicked(true);
                setMeetingMode(Constants.modes.VIEWER);
              }}
            >
              Join as a Viewer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
