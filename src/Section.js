import React from "react";
import "./Section.css";

const Section = () => {
  return (
    <div className="section">
      <div className="section-left">
        <p className="heading">
          Stake Your <span>$Token</span> And Earn 20% Interest On Staked Token{" "}
        </p>
        <p className="descp">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat ullamco laboris nisi ut aliquip ex ea
          commodo
        </p>
        <div className="section-box-1">
          <div className="box-1">
            <p>APY In Percentage</p>
            <h2>24% APY</h2>
          </div>
          <div className="box-2">
            <p>Current Token Price</p>
            <h2>1.384 USDT</h2>
          </div>
        </div>
      </div>
      <div className="section-right">
        <div className="section-box-2">
          <div className="box-3">
            <p>APY In Percentage</p>
            <h2>24% APY</h2>
          </div>
          <div className="box-4">
            <p>Current Token Price</p>
            <h2>1.384 USDT</h2>
          </div>
        </div>
        <div className="box-5">
          <div className="box-5-in">
            <div className="inner-box">
              <div className="box-5-left">
                <p>Your Wallet Address</p>
                <p>Total Stakable Token</p>
                <p>Total Stakable Token In USD</p>
                <p>Unstake Fee</p>
                <p>Lock Deadline</p>
              </div>
              <div className="box-5-right">
                <p>0x8F5d...8955</p>
                <p>53746 TOKEN</p>
                <p>$532345</p>
                <p>15%</p>
                <p>30 Days</p>
              </div>
            </div>
            <p>Pool Filled</p>
            <div className="box-45">
            <p className="box-45-in">45% Filled</p>
            </div>
            <p>Stake Your Token</p>
            <div className="small-box">
              <p className="small-enter">Enter Amount of Token</p>
              <p className="small-max">MAX</p>
            </div>
            <div className="button">
              <button className="button-1">STAKE</button>
              <button className="button-2">UNSTAKE</button>
            </div>
            <button className="button-3">EMERGENCY WITHDRAW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
