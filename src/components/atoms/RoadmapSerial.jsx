/* eslint-disable react/prop-types */
import Pointer from "../../assets/svgs/Pointer";

const RoadmapSerial = ({ PaddingController, isLeft = false }) => {
  return (
    <div className={`relative ${PaddingController}`}>
      <div className="border-[1px] border-secondary rounded-full bg-[#1E2433] p-5 w-fit h-fit relative z-20">
        <div className="rounded-full bg-[#2D364D] p-12  text-[#0ADAB9] font-bold text-[57px] w-fit h-fit">
          Q1
        </div>
      </div>
      {isLeft ? (
        <Pointer className="absolute top-[45%] left-[2px]" isLeft />
      ) : (
        <Pointer className="absolute top-[45%] right-[2px]" />
      )}
    </div>
  );
};

export default RoadmapSerial;
