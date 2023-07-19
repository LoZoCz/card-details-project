import PropTypes from "prop-types";
import { useState } from "react";

export const DateInp = ({ changeMonth, changeYear }) => {
  const [cardMonth, setCardMonth] = useState("");
  const [cardYear, setCardYear] = useState("");

  return (
    <div className="date-wrapper">
      <p className="date-label">Exp. date (MM/YY)</p>
      <div className="two-grid-inp-box">
        <input
          type="text"
          name="month-inp"
          id="month-inp"
          placeholder="MM"
          value={cardMonth}
          onChange={(e) => {
            setCardMonth(e.target.value.replace(/\D/g, "").slice(0, 2));
            changeMonth(e.target.value.replace(/\D/g, "").slice(0, 2));
          }}
          maxLength={2}
          minLength={2}
          required
        />
        <input
          type="text"
          name="year-inp"
          id="year-inp"
          placeholder="YY"
          value={cardYear}
          onChange={(e) => {
            setCardYear(e.target.value.replace(/\D/g, "").slice(0, 2));
            changeYear(e.target.value.replace(/\D/g, "").slice(0, 2));
          }}
          maxLength={2}
          minLength={2}
          required
        />
      </div>
    </div>
  );
};

DateInp.propTypes = {
  changeMonth: PropTypes.func,
  changeYear: PropTypes.func,
};
