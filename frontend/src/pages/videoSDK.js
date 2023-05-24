import dynamic from "next/dynamic";

const Container = dynamic(() => import("../components/Container"), {
  ssr: false,
});

export default function videoSDK() {
  return <Container />;
}
