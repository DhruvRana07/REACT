EmployeesTable.JSX :

import Pagination from "./Pagination";

export const EmployeesTable = () => {
  return (
    <div>
      <div>
        <div>{/* implement Department dropdown here */}</div>
      </div>
      <div className="table_container">
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Department</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody className="tbody">{/* map the  rows here */}</tbody>
        </table>
      </div>
      {/* import Pagination component here */}
  
    </div>
  );
};

Pagination.JSX :

function createArrayOfSize(n) {
  return new Array(n).fill(0);
}

function Pagination() {
  let pages = createArrayOfSize(totalPages).map((a, i) => {
    return <button data-testid="page-btn"></button>;
  });
  return <div></div>;
}

export default Pagination;

App.JSX :

import "./App.css";
import { EmployeesTable } from "./Components/EmployeesTable";

function App() {
  return (
    <div className="App">
      <h2>Employees Database</h2>
      {/* Import EmployessTable.jsx */}
      
    </div>
  );
}

export default App;
