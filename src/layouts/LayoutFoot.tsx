import IconLogo from "@/assets/svg/IconLogo";
import FlexColumnContainer from "@/components/container/flex/FlexColumnContainer";
import Typography from "@/components/typography/base/Typography";

const LayoutFoot = () => {
  return (
    <FlexColumnContainer
      padding={{ sm: "70px 20px" }}
      rowGap={{ sm: "16px" }}
      justifyContent="center"
      alignItems="center"
    >
      <IconLogo width={{ sm: "32px" }} height={{ sm: "32px" }} />
      <Typography>Make something awesome</Typography>
    </FlexColumnContainer>
  );
};

export default LayoutFoot;
