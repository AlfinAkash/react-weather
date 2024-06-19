import { TailSpin } from "react-loader-spinner";

import "./index.css";

const Loader = () => {
  return (
    <div>
      <TailSpin
        visible={true}
        height="25"
        width="25"
        color="#f8b200"
        ariaLabel="tail-spin-loading"
        radius="1"
      />
    </div>
  );
};

export default Loader;
