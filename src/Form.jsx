import PropTypes from "prop-types";
import "../dist/style.css";
import { NameInp } from "./components/NameInp";
import { NumberInp } from "./components/NumberInp";
import { DateInp } from "./components/DateInp";
import { CvcInp } from "./components/CvcInp";
import { ThankYou } from "./components/ThankYou";
import { useState } from "react";

export const Form = ({
  setUserName,
  setUserNumber,
  setUserMonth,
  setUserYear,
  setUserCvc,
}) => {
  const [isSubmited, setIsSubmited] = useState(false);

  const handelSubmit = (e) => {
    e.preventDefault();

    setIsSubmited(true);
  };

  const restart = () => {
    setIsSubmited(false);
    setUserName("");
    setUserNumber("");
    setUserCvc("");
    setUserMonth("");
    setUserYear("");
  };

  if (isSubmited) {
    return <ThankYou backToForm={() => restart()} />;
  } else {
    return (
      <form
        action=""
        method="post"
        className="form-wrapper"
        onSubmit={handelSubmit}
      >
        <NameInp changeName={setUserName} />
        <NumberInp changeNumber={setUserNumber} />

        <div className="date-n-cvc-wrapper">
          <DateInp changeMonth={setUserMonth} changeYear={setUserYear} />
          <CvcInp changeCvc={setUserCvc} />
        </div>
        <button type="submit" className="sub-btn btn">
          Confirm
        </button>
      </form>
    );
  }
};

Form.propTypes = {
  setUserName: PropTypes.func,
  setUserNumber: PropTypes.func,
  setUserMonth: PropTypes.func,
  setUserYear: PropTypes.func,
  setUserCvc: PropTypes.func,
};
