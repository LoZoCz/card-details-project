import PropTypes from "prop-types";

export const BackCard = ({ cardCvc }) => {
  const defaultCardCvc = cardCvc || "000";

  return (
    <div className="back-card-wrapper">
      <img
        src="../public/bg-card-back.png"
        alt="back of a card"
        className="back-card"
      />
      <p className="card-cvc">{defaultCardCvc}</p>
    </div>
  );
};

BackCard.propTypes = {
  cardCvc: PropTypes.string,
};
