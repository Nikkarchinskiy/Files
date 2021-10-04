import React from "react";
import PropTypes from "prop-types";

function RenderTableTransactions({ tableInfo, namesRow }) {
  return (
    <>
      <div className="wrapperTable">
        <div className="containerRowsNames">
          <div className="wrapperTableRowNames">
            {namesRow.map((item, idx) => (
              <div key={idx} className="tableNameRow tableNameRow">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="wrapperTableData">
          {tableInfo.map(({ id, type, amount, currency }, idx) => (
            <div className="containerTableData" key={id}>
              <div className="marginTableRow idTable">{idx + 1}</div>
              <div className="marginTableRow typeTable">{type}</div>
              <div className="marginTableRow amountTable">{amount}</div>
              <div className="marginTableRow currencyTable">{currency}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

RenderTableTransactions.propTypes = {
  tableInfo: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
  namesRow: PropTypes.array.isRequired,
};

export default RenderTableTransactions;
