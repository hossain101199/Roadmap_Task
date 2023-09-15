import Card from "./Card";
import RoadmapSerial from "../atoms/RoadmapSerial";

const PhaseLeft = () => {
  return (
    <div className="flex justify-center ">
      <Card PaddingController="pr-[58px]" />
      <RoadmapSerial PaddingController="pl-[58px]" isLeft />
    </div>
  );
};

export default PhaseLeft;
