import PropTypes from "prop-types";

export const ThankYou = ({ backToForm }) => {
  return (
    <div className="thank-you-wrapper">
      <img
        src="src/assets/icon-complete.svg"
        alt="completed icon"
        className="comp-img"
      />
      <h1 className="comp-title">Thank you!</h1>
      <p className="comp-para">We&apos;ve added your card details</p>
      <button className="back-btn btn" onClick={backToForm}>
        Continue
      </button>
    </div>
  );
};

ThankYou.propTypes = {
  backToForm: PropTypes.func,
};
