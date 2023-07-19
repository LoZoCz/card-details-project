import "../dist/style.css";
import PropTypes from "prop-types";
import { FrontCard } from "./components/FrontCard";
import { BackCard } from "./components/BackCard";

export const Cards = ({
  cardName,
  cardNumber,
  cardMonth,
  cardYear,
  cardCvc,
}) => {
  return (
    <div className="cards-wrapper">
      <FrontCard
        cardName={cardName}
        cardNumber={cardNumber}
        cardMonth={cardMonth}
        cardYear={cardYear}
      />
      <BackCard cardCvc={cardCvc} />
    </div>
  );
};

Cards.propTypes = {
  cardName: PropTypes.string,
  cardNumber: PropTypes.string,
  cardMonth: PropTypes.string,
  cardYear: PropTypes.string,
  cardCvc: PropTypes.string,
};
