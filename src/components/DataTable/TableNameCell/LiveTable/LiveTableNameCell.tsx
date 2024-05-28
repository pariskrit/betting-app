"use client";
import Link from "next/link";
import NameCellContent from "../NameCellContent";
import { GameData } from "@/types/liveTable";
import Icons from "@/components/Icons";

type Props = {
  data: GameData;
  isLive: boolean;
};

const LiveTableNameCell = ({ data, isLive }: Props) => {
  const gameTime = new Date(parseInt(data.time));
  const gameHour = gameTime.getHours();
  const gameMinutes = gameTime.getMinutes();
  const gameStart = `${gameHour}:${gameMinutes}`;
  const scoreData = data.ss ? data.ss.split("-") : "";
  return (
    <div className="relative w-full pr-10 border-r text-textWhite-400 border-greenBg-700">
      <Link
        // href={`/livesports/${data.id}`}
        href={`/odds`}
        className="text-textWhite-300  !hover:bg-transparent  group flex  gap-3 "
      >
        <Icons
          name="star"
          iconStyle="stroke-textWhite-200 hover:fill-textWhite-200"
        />
        <div className="flex gap-2 items-center text-[12px] font-light flex-col ">
          <div className="w-full">{gameStart}</div>
          <div className="flex items-center cursor-pointer hover:text-white">
            <div>113</div>
            <Icons name="arrowRight" />
          </div>
        </div>
        <div className="flex flex-col w-full gap-1">
          <NameCellContent
            name={data.home.name}
            scoreData={scoreData[0]}
            isLive={isLive}
          />
          <NameCellContent
            name={data.away.name}
            scoreData={scoreData[1]}
            isLive={isLive}
          />
        </div>
        <Icons
          name="barChart2"
          iconStyle="absolute right-2 top-[50%] -translate-y-[50%] stroke-white cursor-pointer hover:stroke-greenBg-200"
        />
      </Link>
    </div>
  );
};

export default LiveTableNameCell;
