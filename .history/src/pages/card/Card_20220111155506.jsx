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
  createData(1, "Tân 82", 2),
  createData(2, "Đức 86", 2),
  createData(3, "Hùng 88", 2),
  createData(4, "Cường 99", 2),
  createData(5, "Trường 2k4", 2),
  createData(6, "Trung 83", 1),
  createData(7, "Hào 83", 1),
  createData(8, "Quý 84", 1),
  createData(9, "Hiếu 84", 1),
  createData(10, "Hưng 86", 1),
  createData(11, "Nam 86", 1),
  createData(12, "Minh 88", 1),
  createData(13, "Hiếu 89", 1),
  createData(14, "Hùng 89", 1),
  createData(15, "Dũng 91", 1),
  createData(16, "Dương 91", 1),
  createData(17, "Tập 91", 1),
  createData(18, "Hạnh 91", 1),
  createData(19, "Hưng 93", 1),
  createData(20, "Tuấn 93", 1),
  createData(21, "Hùng 94", 1),
  createData(22, "Giáp 94", 1),
  createData(23, "Thái 94", 1),
  createData(24, "Kỳ 95", 1),
  createData(25, "Sơn 95", 1),
  createData(26, "Thành 2k4", 1),
];

export default function Card() {
  return (
    <TableContainer
      component={Paper}
      style={{
        backgroundColor: "#202124",
        color: "#FFFF",
        margin: "20px",
        width: "550px",
      }}
    >
      <TableCell style={{ color: "#FFFF", borderBottom: "none" }} align="right">
        Thẻ vàng
      </TableCell>
      <Table sx={{ minWidth: 550 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell style={{ color: "#9aa0a6" }}>Cầu thủ</TableCell>
            <TableCell style={{ color: "#9aa0a6" }} align="right">
              Thẻ vàng
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
                    color: "#fff",
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
