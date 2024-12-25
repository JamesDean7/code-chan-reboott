import { NavLink } from "react-router";
import styled from "@emotion/styled";
import IconLogo from "@/assets/svg/IconLogo";
import { ROUTE_PATH } from "@/const/route/route";
import Typography from "@/components/typography/base/Typography";
import FlexRowContainer from "@/components/container/flex/FlexRowContainer";
import { getPxSpacing } from "@/utils/style/style";

const LayoutHeadStyle = styled(FlexRowContainer)({
  padding: `${getPxSpacing(4)} ${getPxSpacing(8)}`,
});

const LayoutHead = () => {
  return (
    <LayoutHeadStyle>
      <NavLink to={ROUTE_PATH.home}>
        <IconLogo />
      </NavLink>
      <NavLink to={ROUTE_PATH.bookmark}>
        <Typography>BookMark</Typography>
      </NavLink>
    </LayoutHeadStyle>
  );
};

export default LayoutHead;
