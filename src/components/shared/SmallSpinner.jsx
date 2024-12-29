import { css } from "@emotion/react";
import BeatLoader from "react-spinners/BeatLoader";

const override = css`
  margin-bottom: -6px;
  margin-left: 4px;
`;

function SmallSpinner({ isLoading }) {
  return (
    <BeatLoader color={"navy"} loading={isLoading} css={override} size={8} />
  );
}

export default SmallSpinner;
