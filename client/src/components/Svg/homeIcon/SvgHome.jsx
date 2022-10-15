import * as React from "react";
import "./svgHome.scss";

const SvgHome = () => {
  const HomeIcon = (props) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 122.88 112.07"
    style={{
      enableBackground: "new 0 0 122.88 112.07",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <path
      d="M61.44 0 0 60.18l14.99 7.87L61.04 19.7l46.85 48.36 14.99-7.87L61.44 0zM18.26 69.63 61.5 26.38l43.11 43.25v42.43H73.12V82.09H49.49v29.97H18.26V69.63z"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
      }}
    />
  </svg>
  );
  return (
    <div className="iconWrapper columnFlex">
      <HomeIcon />
    </div>
  );
};
export default SvgHome;