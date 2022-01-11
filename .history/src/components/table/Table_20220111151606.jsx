import React from "react";

export const Table = () => {
  return (
    <table className="table table-dark table-hover" style={{ width: "100px" }}>
      <thead>
        <tr>
          <th scope="col" colspan="2">
            Đội bóng
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>2k4</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>2k4</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>2k4</td>
        </tr>
      </tbody>
    </table>
  );
};
