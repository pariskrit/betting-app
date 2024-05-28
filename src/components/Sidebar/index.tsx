import React from "react";
import SideBarButton from "./SideBarButton/SideBarButton";
import SideBarListContainer from "./SideBarListContainer/SideBarListContainer";
// import SideBarAccordion from "./SideBarAccordion/SideBarAccordion";
import { sportsData } from "@/data/sportsData";

type Props = {
  sideBarContainerStyle?: string;
  handleMenuToggle?: () => void;
};

const SideBarContainer = ({
  sideBarContainerStyle,
  handleMenuToggle,
}: Props) => {
  return (
    <div
      className={`w-[270px]  flex flex-col justify-start items-start overflow-auto h-contentWidth  bg-background  ${sideBarContainerStyle}`}
    >
      <div className="w-full pr-[3px] ">
        <SideBarListContainer title="Popular">
          <SideBarButton
            icon="dutchFootball"
            selected="default"
            title="Dutch football"
            id={83}
            handleMenuToggle={handleMenuToggle}
          />
        </SideBarListContainer>
        <SideBarListContainer title="Frequently Visited">
          <SideBarButton
            icon={"rugby"}
            selected="default"
            title="American football"
            id={12}
            handleMenuToggle={handleMenuToggle}
          />
          <SideBarButton
            icon="basketBall"
            selected="default"
            title="Basketball"
            id={18}
            handleMenuToggle={handleMenuToggle}
          />
          <SideBarButton
            icon="boxing"
            selected="default"
            title="Boxing"
            id={9}
            handleMenuToggle={handleMenuToggle}
          />
          <SideBarButton
            icon="volleyball"
            selected="default"
            title="Volleyball"
            id={91}
            handleMenuToggle={handleMenuToggle}
          />
          <SideBarButton
            icon="indy"
            selected="default"
            title="indy"
            id={5}
            handleMenuToggle={handleMenuToggle}
          />
        </SideBarListContainer>
        <SideBarListContainer title="Full List">
          {sportsData.map((sport) => (
            <div className="w-full" key={sport.id}>
              <SideBarButton
                icon={sport.icon}
                selected="default"
                title={sport.title}
                id={sport.id}
                handleMenuToggle={handleMenuToggle}
              />
            </div>
          ))}
        </SideBarListContainer>
      </div>
      {/* <div className="w-full">
        <SideBarButton icon="dollar" selected="default" title="Extra" />
      </div>
      <div className="w-full">
        <SideBarListContainer title="Popular">
          <SideBarButton
            icon="dutchFootball"
            selected="default"
            title="Dutch football"
          />
        </SideBarListContainer>
        <SideBarListContainer title="Frequently Visited">
          <SideBarButton
            icon={"rugby"}
            selected="default"
            title="American football"
          />
          <SideBarButton
            icon="basketBall"
            selected="default"
            title="Basketball"
          />
          <SideBarButton icon="boxing" selected="default" title="Boxing" />
          <SideBarButton icon="dices" selected="default" title="Casino" />
          <SideBarButton icon="indy" selected="default" title="indy" />
        </SideBarListContainer>
        <SideBarListContainer title="Complete List">
          <SideBarButton
            icon={"rugby"}
            selected="select"
            title="American football"
            addStar={true}
          />
          <SideBarButton
            icon="basketBall"
            selected="default"
            title="Basketball"
            addStar={true}
          />
          <SideBarButton
            icon="boxing"
            selected="default"
            title="Boxing"
            addStar={true}
          />
          <SideBarButton
            icon="dices"
            selected="default"
            title="Casino"
            addStar={true}
          />
          <SideBarButton
            icon="cricket"
            selected="default"
            title="Cricket"
            addStar={true}
          />
          <SideBarButton
            icon="darts"
            selected="default"
            title="Darts"
            addStar={true}
          />
          <SideBarButton
            icon="motoRacing"
            selected="default"
            title="Horse Racing"
            addStar={true}
          />
          <SideBarButton
            icon="horseRacing"
            selected="default"
            title="Formula 1"
            addStar={true}
          />
          <SideBarButton
            icon="golf"
            selected="default"
            title="Golf"
            addStar={true}
          />
          <SideBarButton
            icon={"handBall"}
            selected="default"
            title="Handball"
            addStar={true}
          />
          <SideBarButton
            icon="iceHockey"
            selected="default"
            title="Ice Hockey"
            addStar={true}
          />
          <SideBarButton
            icon="mma"
            selected="default"
            title="MMA"
            addStar={true}
          />
          <SideBarAccordion
            title="Motor sports"
            data={[
              { title: "Indy", addStar: true, icon: "indy" },
              {
                title: "Motorcycles",
                addStar: true,
                icon: "motorCycles",
              },
              { title: "NASCAR", addStar: true, icon: "indy" },
              {
                title: "Other motor sports",
                addStar: true,
                icon: "indy",
              },
              { title: "Rally", addStar: true, icon: "rally" },
              { title: "Super cars", addStar: true, icon: "indy" },
            ]}
          />
          <SideBarButton
            icon="volleyball"
            selected="default"
            title="Netball"
            addStar={true}
          />
          <SideBarButton
            icon="horseRacing"
            selected="default"
            title="Horse racing"
            addStar={true}
          />
          <SideBarButton
            icon={"rugby"}
            selected="default"
            title="Rugby League"
            addStar={true}
          />
          <SideBarButton
            icon={"rugby"}
            selected="default"
            title="Rugby Union"
            addStar={true}
          />
          <SideBarButton
            icon="snooker"
            selected="default"
            title="Snooker"
            addStar={true}
          />
          <SideBarButton
            icon={"motorCycles"}
            selected="default"
            title="Speedway"
            addStar={true}
          />
          <SideBarButton
            icon="tableTennis"
            selected="default"
            title="Table tennis"
            addStar={true}
          />
          <SideBarButton
            icon="tennis"
            selected="default"
            title="Tennis"
            addStar={true}
          />
          <SideBarButton
            icon="virtualSports"
            selected="default"
            title="Virtual sports"
            addStar={true}
          />
          <SideBarButton
            icon="dutchFootball"
            selected="default"
            title="Football"
            addStar={true}
          />
          <SideBarButton
            icon="volleyball"
            selected="default"
            title="Volleyball"
            addStar={true}
          />
          <SideBarButton
            icon="cycling"
            selected="default"
            title="Cycling"
            addStar={true}
          />
          <SideBarButton
            icon="greyhoundRacing"
            selected="default"
            title="Greyhound racing"
          />
          <SideBarAccordion
            title="Winter sports"
            data={[
              {
                title: "Alpine skiing",
                addStar: true,
                icon: "skiing",
              },
              { title: "Biathlon", addStar: true, icon: "skiing" },
              {
                title: "Cross-country skiing",
                addStar: true,
                icon: "skiing",
              },
              {
                title: "Ski jumping",
                addStar: true,
                icon: "skiing",
              },
              { title: "Rally", addStar: true, icon: "skiing" },
              { title: "Super cars", addStar: true, icon: "skiing" },
            ]}
          />{" "}
          <SideBarButton
            icon="indoorFootball"
            selected="default"
            title="Indoor football"
            addStar={true}
          />
          <SideBarAccordion
            title="Other sports"
            data={[
              {
                title: "Australian football",
                addStar: true,
                icon: "rugby",
              },
              { title: "Badminton", addStar: true, icon: "badminton" },
              {
                title: "Bandy",
                addStar: true,
                icon: "bandy",
              },
              { title: "Bowl", addStar: true, icon: "bowl" },
              { title: "Curling", addStar: true, icon: "curling" },
              { title: "Floorball", addStar: true, icon: "handBall" },
              {
                title: "Lacrosse",
                addStar: true,
                icon: "lacrosse",
              },
              { title: "Squash", addStar: true, icon: "squash" },
              { title: "Surfing", addStar: true, icon: "surfing" },
              {
                title: "Water polo",
                addStar: true,
                icon: "waterPolo",
              },
            ]}
          />
          <SideBarButton selected="default" title="Quotations below 2.00" />
          <SideBarButton selected="default" title="Top events" />
        </SideBarListContainer>
      </div> */}
    </div>
  );
};

export default SideBarContainer;
