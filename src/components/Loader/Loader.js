import React from "react";
import { BeatLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="sweet-loading" style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor:"whitesmoke" }}>
      <BeatLoader size={20} color={"black"} loading={true} />
    </div>
  );
};

export default Loader;