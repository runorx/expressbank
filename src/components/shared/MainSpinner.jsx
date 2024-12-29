import BeatLoader from "react-spinners/BeatLoader";

export const MainSpinner = ({
  isLoading,
  spinnerHeight = "80vh",
  spinnerSize = 45,
}) => {
  return (
    <div
      style={{ minHeight: spinnerHeight }}
      className="flex justify-center items-center"
    >
      <BeatLoader
        className="m-auto"
        loading={isLoading}
        size={spinnerSize}
        style={{
          backgroundColor: "white"
        }}
      />
    </div>
  );
};
