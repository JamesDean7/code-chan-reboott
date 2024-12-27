import { NavLink } from "react-router";
import IconLogo from "@/assets/svg/IconLogo";
import { ROUTE_PATH } from "@/const/route/route";
import FlexRowContainer from "@/components/container/flex/FlexRowContainer";
import IconHeart from "@/assets/svg/IconHeart";

const LayoutHead = () => {
  return (
    <FlexRowContainer padding={{ sm: "14px 20px" }}>
      <NavLink to={ROUTE_PATH.home}>
        <IconLogo />
      </NavLink>
      <NavLink to={ROUTE_PATH.bookmark}>
        <IconHeart />
        {/* <Typography>BookMark</Typography> */}
      </NavLink>
    </FlexRowContainer>
  );
};

export default LayoutHead;
