import PropTypes from "prop-types";

export const FrontCard = ({ cardName, cardNumber, cardMonth, cardYear }) => {
  const defaultCardName = cardName || "Jane Appleseed";
  const defaultCardNumber = cardNumber || "0000 0000 0000 0000";
  const defaultCardMonth = cardMonth || "00";
  const defaultCardYear = cardYear || "00";

  return (
    <div className="front-card-wrapper">
      <img
        src="./bg-card-front.png"
        alt="front of a card"
        className="front-card"
      />
      <img src="./card-logo.svg" alt="logo of a card" className="card-logo" />
      <p className="card-number">{defaultCardNumber}</p>
      <p className="card-name">{defaultCardName}</p>
      <p className="card-date">{`${defaultCardMonth}/${defaultCardYear}`}</p>
    </div>
  );
};

FrontCard.propTypes = {
  cardNumber: PropTypes.string,
  cardName: PropTypes.string,
  cardMonth: PropTypes.string,
  cardYear: PropTypes.string,
};
