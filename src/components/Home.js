import React from "react";

const home = props => {
  return (
    <div id="home-screen">
      <div className={"bio-front-page"}>
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
      <p className={'attribution'}>
        Photo by Peter Dolshun
      </p>
    </div>
  );
};

export default home;
