import EmployeeCard from "./EmployeeCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [employeeList, setEmployeeList] = useState([]);

  const [searchedEmployee, setSearchedEmployee] = useState([]);

  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://reqres.in/api/users?page=2");

    const json = await data.json();

    setEmployeeList(json.data);

    setSearchedEmployee(json.data);
  };

  return employeeList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <input
          className="search-filter"
          onChange={(e) => {
            setSearchName(e.target.value);
          }}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            console.log(employeeList);
            const searchedEmployee = employeeList.filter((emp) =>
              emp.first_name.toLowerCase().includes(searchName.toLowerCase())
            );
            setSearchedEmployee(searchedEmployee);
          }}
        >
          Search
        </button>
      </div>
      <div className="employee-container">
        {searchedEmployee.map((employee) => (
          <EmployeeCard key={employee.id} employeeData={employee} />
        ))}
      </div>
    </div>
  );
};

export default Body;
