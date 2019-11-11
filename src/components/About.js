import React from "react";

const about = props => {
  return (
    <div id="about">
      <section>
        <div className={"bio-pic"}>
          <img
            src={"./images/dani-uw.jpg"}
            alt={"Dani sitting on stairs"}
          />
        </div>
        <div className={"bio"}>
          <p>
            Danielle is a New York City-based vocalist and composer who has been
            singing and studying music since the age of 10.
          </p>

          <p>
            She has a Bachelors in Music from Cornish College of the Arts in
            Seattle where she studied classical voice and piano.
          </p>
          <p>
            Since moving to Manhattan in 2018, Danielle began composing original
            works for short films, online magazines, and TRESemme Hair Care.
          </p>
        </div>
      </section>
    </div>
  );
};

export default about;
