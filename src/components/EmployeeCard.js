const EmployeeCard = (props) => {
  const { employeeData } = props;

  return (
    <div className="employee-data">
      <h1>{employeeData.id}</h1>
      <img alt="avatar-pic" className="avatar-pic" src={employeeData.avatar} />
      <h2>{employeeData.first_name}</h2>
    </div>
  );
};

export default EmployeeCard;
