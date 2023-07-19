import PropTypes from "prop-types";
import { useState } from "react";

export const CvcInp = ({ changeCvc }) => {
  const [cardCvc, setCardCvc] = useState("");
  return (
    <div className="cvc-wrapper">
      <label htmlFor="cvc-inp">CVC</label>
      <input
        type="text"
        name="cvc-inp"
        id="cvc-inp"
        placeholder="e.g. 123"
        value={cardCvc}
        onChange={(e) => {
          setCardCvc(e.target.value.replace(/\D/g, "").slice(0, 3));
          changeCvc(e.target.value.replace(/\D/g, "").slice(0, 3));
        }}
        maxLength={3}
        minLength={3}
        required
      />
    </div>
  );
};

CvcInp.propTypes = {
  changeCvc: PropTypes.func,
};
