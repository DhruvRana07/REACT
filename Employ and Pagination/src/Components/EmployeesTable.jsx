import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from "./Pagination";

export const EmployeesTable = () => {
  const [employees, setEmployees] = useState([]);
  const [department, setDepartment] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchEmployees(currentPage, department);
  }, [currentPage, department]);

  const fetchEmployees = (page, department) => {
    let url = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${page}&limit=10`;
    if (department) {
      url += `&filterBy=department&filterValue=${department}`;
    }
    axios.get(url)
      .then(response => {
        setEmployees(response.data.data);
        setTotalPages(response.data.totalPages);
      })
      .catch(error => console.error("Error fetching data:", error));
  };

  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
    setCurrentPage(1);
  };

  return (
    <div>
      <div className="department_select_container">
        <select className="department_list" value={department} onChange={handleDepartmentChange}>
          <option value="">-Select Department-</option>
          <option value="hr">HR</option>
          <option value="finance">Finance</option>
          <option value="marketing">Marketing</option>
          <option value="engineering">Engineering</option>
          <option value="operations">Operations</option>
        </select>
      </div>
      <div className="table_container">
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th className="name">Name</th>
              <th className="gender">Gender</th>
              <th className="department">Department</th>
              <th className="salary">Salary</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {employees.map((employee, index) => (
              <tr key={employee.id}>
                <td>{(currentPage - 1) * 10 + index + 1}</td>
                <td className="name">{employee.name}</td>
                <td className="gender">{employee.gender}</td>
                <td className="department">{employee.department}</td>
                <td className="salary">{employee.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        totalPages={totalPages}
        handlePageChange={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};
