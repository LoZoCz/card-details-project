import PropTypes from "prop-types";
import { useState } from "react";

export const NameInp = ({ changeName }) => {
  const [cardName, setCardName] = useState("");

  const handleNameChange = (e) => {
    setCardName(e.target.value);
    changeName(e.target.value);
  };

  return (
    <div className="name-box">
      <label htmlFor="name-inp">Cardholder name</label>
      <input
        type="text"
        name="name-inp"
        id="name-inp"
        placeholder="e.g. Jane Appleseed"
        value={cardName}
        onChange={handleNameChange}
        required
      />
    </div>
  );
};

NameInp.propTypes = {
  changeName: PropTypes.func,
};
