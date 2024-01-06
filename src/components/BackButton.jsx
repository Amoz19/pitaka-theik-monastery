import { Link } from "react-router-dom";
import { IcRoundKeyboardBackspace } from "../utils/icon-utils";

const BackButton = () => {
  return (
    <>
      <Link to="/">
        <IcRoundKeyboardBackspace className="text-3xl border rounded my-4" />
      </Link>
    </>
  );
};

export default BackButton;
