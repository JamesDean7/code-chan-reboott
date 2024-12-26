import Button from "@/components/button/base/Button";
import FlexColumnContainer from "@/components/container/flex/FlexColumnContainer";
import FlexRowContainer from "@/components/container/flex/FlexRowContainer";
import Typography from "@/components/typography/base/Typography";

type SimpleErrorScreenProps = {
  title: string;
  message: string;
  buttonTitle?: string;
  onReset?: () => void;
};

const SimpleErrorScreen = ({
  title,
  message,
  buttonTitle = "Retry",
  onReset,
}: SimpleErrorScreenProps) => {
  const handleReset = () => {
    if (onReset) {
      onReset();
    }
  };
  return (
    <FlexColumnContainer alignItems="center" rowGap={{ sm: "16px" }}>
      <Typography fontSize={{ sm: "h3", md: "h2" }} fontWeight="bold">
        {title}
      </Typography>
      <Typography>Error : {message}</Typography>
      <FlexRowContainer>
        <Button
          padding={{ sm: "10px 20px" }}
          fontSize={{ sm: "body2" }}
          fontWeight="bold"
          onClick={handleReset}
        >
          {buttonTitle}
        </Button>
      </FlexRowContainer>
    </FlexColumnContainer>
  );
};

export default SimpleErrorScreen;
