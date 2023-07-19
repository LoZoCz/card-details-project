import PropTypes from "prop-types";
import { useState } from "react";

export const NumberInp = ({ changeNumber, valid }) => {
  const [cardNumber, setCardNumber] = useState("");

  const formatter = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{4})/g, "$1 ")
      .slice(0, 19)
      .trim();
  };

  const validation = () => {
    if (/[0-9]/g.test(cardNumber) && cardNumber.length === 19) {
      valid({ cardName: true });
    }
  };

  return (
    <div className="number-box">
      <label htmlFor="number-inp">Card number</label>
      <input
        type="text"
        name="number-inp"
        id="number-inp"
        placeholder="1234 5678 9000"
        value={cardNumber}
        onChange={(e) => {
          setCardNumber(formatter(e.target.value));
          changeNumber(formatter(e.target.value));
          validation();
        }}
        maxLength={19}
        minLength={19}
        required
      />
    </div>
  );
};

NumberInp.propTypes = {
  changeNumber: PropTypes.func,
  valid: PropTypes.func,
};
