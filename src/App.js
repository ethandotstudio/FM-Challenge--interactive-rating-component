import { useState } from "react";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [stars, setStars] = useState(1);

  const handleStarsOnClick = (num) => {
    if (num !== stars) {
      setStars(num);
    } else {
      setStars(undefined);
    }
  };

  const renderMainBody = () => {
    if (!isSubmitted) {
      return (
        <>
          <div className="star-icon">
            <img src="./public/icon-star.svg" alt="" aria-hidden="true" />
          </div>
          <h1>How did we do?</h1>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <ol>
            <li
              className={stars === 1 ? "chosen" : ""}
              onClick={() => handleStarsOnClick(1)}
            >
              1
            </li>
            <li
              className={stars === 2 ? "chosen" : ""}
              onClick={() => handleStarsOnClick(2)}
            >
              2
            </li>
            <li
              className={stars === 3 ? "chosen" : ""}
              onClick={() => handleStarsOnClick(3)}
            >
              3
            </li>
            <li
              className={stars === 4 ? "chosen" : ""}
              onClick={() => handleStarsOnClick(4)}
            >
              4
            </li>
            <li
              className={stars === 5 ? "chosen" : ""}
              onClick={() => handleStarsOnClick(5)}
            >
              5
            </li>
          </ol>
          <button
            disabled={stars === undefined ? true : false}
            onClick={() => setIsSubmitted(true)}
          >
            submit
          </button>
        </>
      );
    } else {
      return (
        <>
          <img
            className="thank-you-img"
            src="./public/illustration-thank-you.svg"
            alt=""
            aria-hidden="true"
          />
          <p className="result">You selected {stars} out of 5</p>
          <h1 className="thank-you-heading">Thank you!</h1>
          <p className="thank-you-text">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </>
      );
    }
  };

  return <main>{renderMainBody()}</main>;
}

export default App;
