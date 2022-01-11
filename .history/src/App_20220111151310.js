import "./App.css";
import { Table } from "./components/table/Table";

function App() {
  return (
    <div className="App">
      <Table />
      <table
        className="table table-dark table-hover"
        style={{ width: "700px" }}
      >
        <thead>
          <tr>
            <th scope="col" colspan="2">
              Đội bóng
            </th>
            <th scope="col" className="hihi">
              ĐĐ
            </th>
            <th scope="col" className="hihi">
              Thắng
            </th>
            <th scope="col" className="hihi">
              Hoà
            </th>
            <th scope="col" className="hihi">
              Thua
            </th>
            <th scope="col" className="hihi">
              BT
            </th>
            <th scope="col" className="hihi">
              SBT
            </th>
            <th scope="col" className="hihi">
              HS
            </th>
            <th scope="col" className="hihi">
              Điểm
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>2k4</td>
            <td>8</td>
            <td>6</td>
            <td>1</td>
            <td>1</td>
            <td>41</td>
            <td>14</td>
            <td>27</td>
            <td>19</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>2k4</td>
            <td>8</td>
            <td>6</td>
            <td>1</td>
            <td>1</td>
            <td>41</td>
            <td>14</td>
            <td>27</td>
            <td>19</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>2k4</td>
            <td>8</td>
            <td>6</td>
            <td>1</td>
            <td>1</td>
            <td>41</td>
            <td>14</td>
            <td>27</td>
            <td>19</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
