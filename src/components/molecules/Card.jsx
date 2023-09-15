/* eslint-disable react/prop-types */
import CardBullet from "../atoms/CardBullet";
import CardTitle from "../atoms/CardTitle";

const Card = ({ PaddingController }) => {
  return (
    <div className={PaddingController}>
      <div className="border-[1px] border-secondary bg-[#1E2433] p-[30px] w-fit h-fit rounded-[10px] ">
        <CardTitle />
        <div className="mt-5 flex flex-col gap-2">
          {[1, 2, 3, 4].map((serial) => (
            <CardBullet key={serial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
