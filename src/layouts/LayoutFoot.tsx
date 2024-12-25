import IconLogo from "@/assets/svg/IconLogo";
import FlexColumnContainer from "@/components/container/flex/FlexColumnContainer";
import Typography from "@/components/typography/base/Typography";

const LayoutFoot = () => {
  return (
    <FlexColumnContainer
      rowGap={{ sm: "16px" }}
      justifyContent="center"
      alignItems="center"
      padding={{ sm: "70px 20px" }}
    >
      <IconLogo />
      <Typography>Make something awesome</Typography>
    </FlexColumnContainer>
  );
};

export default LayoutFoot;
