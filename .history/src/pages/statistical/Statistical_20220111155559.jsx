import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(order, name, goal) {
  return {
    order,
    name,
    goal,
  };
}

const rows = [
  createData(1, "Kỳ 95", 24),
  createData(2, "Hiếu 94", 22),
  createData(3, "Thành 98", 18),
  createData(4, "Hà 2k4", 15),
  createData(5, "Cương 90", 14),
];

export default function Statistical() {
  return (
    <TableContainer
      component={Paper}
      style={{
        backgroundColor: "#202124",
        color: "#FFFF",
        margin: "20px",
        width: "560px",
      }}
    >
      <TableCell style={{ color: "#FFFF", borderBottom: "none" }} align="right">
        Số bàn thắng
      </TableCell>
      <Table sx={{ minWidth: 500 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell style={{ color: "#9aa0a6" }}>Cầu thủ</TableCell>
            <TableCell style={{ color: "#9aa0a6" }} align="right">
              Số bàn thắng
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                style={{ color: "#9aa0a6" }}
              >
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
              <TableCell style={{ color: "#9aa0a6" }} align="right">
                {row.goal}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
