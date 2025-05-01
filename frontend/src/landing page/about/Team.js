import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-top">
        <h1 className="text-center mt-5">People</h1>

        <div
          className="row p-5 text-muted fs-6"
          style={{ lineHeight: "1.8", fontSize: "1.2em" }}
        >
          <div className="col p-5 text-center">
            <img
              src="media/shreya.jpg"
              style={{ borderRadius: "50%", width: "70%"}}
            ></img>
            <h4 className="mt-5"> Shreya Upadhyay</h4>
            <h6>Founder, CEO</h6>
          </div>

          <div className="col p-5 mt-5">
            <p>
              Shreya bootstrapped and founded StockNest in 2010 to overcome the
              hurdles she faced during her decade long stint as a trader. Today,
              StockNest has changed the landscape of the Indian broking
              industry.
            </p>
            <p>
              She is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC)
            </p>
            <p>Playing volleyball is her zen.</p>
            <p>
              Connect on{" "}
              <a href="#" style={{ textDecoration: "none" }}>
                Homepage
              </a>{" "}
              /{" "}
              <a href="#" style={{ textDecoration: "none" }}>
                TradingQnA
              </a>{" "}
              / <a href="#" style={{textDecoration:"none"}}>Twitter</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Team;
