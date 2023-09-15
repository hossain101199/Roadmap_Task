import Card from "./Card";
import RoadmapSerial from "../atoms/RoadmapSerial";

const PhaseRight = () => {
  return (
    <div className="flex justify-center ">
      <RoadmapSerial PaddingController="pr-[58px]" />
      <Card PaddingController="pl-[58px]" />
    </div>
  );
};

export default PhaseRight;
