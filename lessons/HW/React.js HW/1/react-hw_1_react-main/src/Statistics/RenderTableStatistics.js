import React from "react";
import PropTypes from "prop-types";

function RenderTableStatistics({ objectNames, data }) {
  return (
    <>
      <table className="tableStatistics">
        <tbody>
          <tr>
            {objectNames.map((item, idx) =>
              idx >= 1 ? (
                <th key={idx} className="tableHeadStatistics">
                  {item}
                </th>
              ) : null
            )}
          </tr>
          {data.map(({ id, label, percentage }) => (
            <tr className="itemTableRow" key={id}>
              <td className="tableDataStatistics">{label}</td>
              <td className="tableDataStatistics">{percentage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

RenderTableStatistics.propTypes = {
  objectNames: PropTypes.array,
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default RenderTableStatistics;
