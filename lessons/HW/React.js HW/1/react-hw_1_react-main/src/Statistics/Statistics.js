import React from "react";
import PropTypes from "prop-types";
import "./statistics.scss";
import RenderTableStatistics from "./RenderTableStatistics";

function createTable(data) {
  let ObjectNames = Object.keys(data[0]);
  return <RenderTableStatistics objectNames={ObjectNames} data={data} />;
}

function Statistics({ title, tableData }) {
  return (
    <>
      <div className="statisticsWrapper">
        {title ? <h2 className="titleTable">{title}</h2> : null}
        {createTable(tableData)}
      </div>
    </>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  tableData: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
