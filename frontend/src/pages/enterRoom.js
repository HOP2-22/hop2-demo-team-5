import dynamic from "next/dynamic";

const EnterRoom = dynamic(() => import("../components/enterRoom"), {
  ssr: false,
});

export default function videoSDK() {
    return <EnterRoom />;
  }