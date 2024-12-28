import Typography from "@/components/typography/base/Typography";
import useThemePalette from "@/hooks/theme/useThemePalette";
import { ReactNodeChildren } from "@/types/lib-react";

type BookmarkDetailTypographyProps = ReactNodeChildren;

const BookmarkDetailTypography = ({
  children,
}: BookmarkDetailTypographyProps) => {
  const themeGrayColor = useThemePalette({ usePallete: "gray" });
  return (
    <Typography fontSize={{ sm: "body2" }} color={themeGrayColor.dark}>
      {children}
    </Typography>
  );
};

export default BookmarkDetailTypography;
