import Image, { ImageProps } from "@/components/image/base/Image";
import styled from "@emotion/styled";
import { CSSStyleProperties } from "@/types/styles";

type ProfileStyleProps = Pick<CSSStyleProperties, "borderRadius">;

type ProfileProps = ImageProps & ProfileStyleProps;

const ProfileStyle = styled(Image)<ProfileStyleProps>(
  ({ borderRadius = "100%" }) => {
    return {
      borderRadius,
    };
  }
);

const Profile = ({ ...rest }: ProfileProps) => {
  return <ProfileStyle {...rest} />;
};

export default Profile;
