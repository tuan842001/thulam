import "./App.css";

function App() {
  return (
    <div className="App">
      <table class="table" style={{ width: "700px" }}>
        <thead>
          <tr>
            <th scope="col" colspan="2">
              Đội bóng
            </th>
            <th scope="col">ĐĐ</th>
            <th scope="col">Thắng</th>
            <th scope="col">Hoà</th>
            <th scope="col">Thua</th>
            <th scope="col">BT</th>
            <th scope="col">SBT</th>
            <th scope="col">HS</th>
            <th scope="col">Điểm</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry the Bird</td>
            <td>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
