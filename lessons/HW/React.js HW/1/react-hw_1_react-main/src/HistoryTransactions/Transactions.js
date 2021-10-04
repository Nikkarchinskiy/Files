import React from "react";
import PropTypes from "prop-types";
import "./transactions.scss";
import RenderTableTransactions from "./RenderTableTransactions";

function validateTable(data) {
  let ObjNames = Object.keys(data[0]);
  let validatetRowNames = ObjNames.filter((item, idx) => idx >= 1);

  return (
    <RenderTableTransactions tableInfo={data} namesRow={validatetRowNames} />
  );
}

function Transactions({ title, transactionsAssets }) {
  return (
    <>
      <div className="TransactionsWrapper">
        {title ? <h2 className="transactionsTitle">{title}</h2> : null}
        {validateTable(transactionsAssets)}
      </div>
    </>
  );
}

Transactions.propTypes = {
  title: PropTypes.string,
  transactionsAssets: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default Transactions;
