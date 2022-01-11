import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  order,
  name,
  fought,
  win,
  draw,
  lose,
  goal,
  goals,
  difference,
  protein
) {
  return {
    order,
    name,
    fought,
    win,
    draw,
    lose,
    goal,
    goals,
    difference,
    protein,
  };
}

const rows = [
  createData(1, "2k4", 8, 6, 1, 1, 41, 14, 27, 19),
  createData(2, "84+99", 8, 6, 1, 1, 37, 22, 15, 19),
  createData(3, "89+95", 8, 5, 2, 1, 39, 12, 27, 17),
  createData(4, "85+94", 9, 5, 2, 2, 43, 30, 13, 17),
  createData(5, "83+90", 9, 4, 3, 2, 42, 28, 14, 15),
  createData(6, "93+2k1", 9, 3, 3, 3, 27, 29, -2, 12),
  createData(7, "82+91", 9, 3, 1, 5, 34, 35, -1, 10),
  createData(8, "88+98", 9, 2, 0, 7, 30, 47, -17, 6),
  createData(9, "87+92", 8, 1, 0, 7, 28, 48, -20, 3),
  createData(10, "86", 9, 1, 0, 8, 25, 82, -57, 3),
];

export default function UserList() {
  return (
    <TableContainer
      component={Paper}
      style={{
        backgroundColor: "#202124",
        color: "#FFFF",
        margin: "20px",
        width: "560px",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <Table
        sx={{ minWidth: 600 }}
        size="small"
        aria-label="a dense table"
        className="TableSX"
      >
        <TableHead>
          <TableRow>
            <TableCell style={{ color: "#9aa0a6" }}>Đội bóng</TableCell>
            <TableCell style={{ color: "#9aa0a6" }} align="right">
              ĐĐ
            </TableCell>
            <TableCell style={{ color: "#9aa0a6" }} align="right">
              Thắng
            </TableCell>
            <TableCell style={{ color: "#9aa0a6" }} align="right">
              Hoà
            </TableCell>
            <TableCell style={{ color: "#9aa0a6" }} align="right">
              Thua
            </TableCell>
            <TableCell style={{ color: "#9aa0a6" }} align="right">
              BT
            </TableCell>
            <TableCell style={{ color: "#9aa0a6" }} align="right">
              SBT
            </TableCell>
            <TableCell style={{ color: "#9aa0a6" }} align="right">
              HS
            </TableCell>
            <TableCell style={{ color: "#9aa0a6" }} align="right">
              Điểm
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{ color: "#FFFF" }}>
                <span
                  style={{
                    color: "#FFFF",
                    marginRight: "15px",
                    textAlign: "center",
                  }}
                  align="center"
                >
                  {row.order}
                </span>

                {row.name}
              </TableCell>
              <TableCell style={{ color: "#FFFF" }} align="center">
                {row.fought}
              </TableCell>
              <TableCell style={{ color: "#FFFF" }} align="center">
                {row.win}
              </TableCell>
              <TableCell style={{ color: "#FFFF" }} align="center">
                {row.draw}
              </TableCell>
              <TableCell style={{ color: "#FFFF" }} align="center">
                {row.lose}
              </TableCell>
              <TableCell style={{ color: "#FFFF" }} align="center">
                {row.goal}
              </TableCell>
              <TableCell style={{ color: "#FFFF" }} align="center">
                {row.goals}
              </TableCell>
              <TableCell style={{ color: "#FFFF" }} align="center">
                {row.difference}
              </TableCell>
              <TableCell style={{ color: "#FFFF" }} align="center">
                {row.protein}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
