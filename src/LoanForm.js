import React from "react";
import "./FormStyle.css";
// import Modal from "./Modal";
import { useState } from "react";

function LoanForm() {
  const [loanInputs, setLoanInputs] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    isEmployee: false,
    salaryRange: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    alert("salem");
  }
  const btnIsDisabled =   (loanInputs.name == "") ||
  (loanInputs.age == "") ||
  (loanInputs.phoneNumber == "")


  return (
    <div className="flex" style={{ flexDirection: "column" }}>
      <form className="flex" style={{ flexDirection: "column" }} id="loan-form">
        <h1>Requesting a loan</h1>
        <hr />
        <label>Name:</label>
        <input
          value={loanInputs.name}
          onChange={(event) =>
            setLoanInputs({ ...loanInputs, name: event.target.value })
          }
        />
        <label>Phone Number:</label>
        <input
          value={loanInputs.phoneNumber}
          onChange={(event) =>
            setLoanInputs({ ...loanInputs, phoneNumber: event.target.value })
          }
        />
        <label>Age:</label>
        <input
          value={loanInputs.age}
          onChange={(event) =>
            setLoanInputs({ ...loanInputs, age: event.target.value })
          }
        />
        <label style={{ marginTop: "30px" }}>Are You an Employee?</label>
        <input
          type="checkbox"
          checked={loanInputs.isEmployee}
          onChange={(event) =>
            setLoanInputs({ ...loanInputs, isEmployee: event.target.checked })
          }
        />
        <label>Salary</label>
        <select
          value={loanInputs.salaryRange}
          onChange={(event) =>
            setLoanInputs({ ...loanInputs, salaryRange: event.target.value })
          }
        >
          <option>Less Than 500 $</option>
          <option>Between 500$ and 2000$</option>
          <option>Above 2000$</option>
        </select>
        <button
          id="submit-loan-btn" className={btnIsDisabled ? "disabled":""}
          onClick={handleSubmit}
          disabled={
            btnIsDisabled
          }
        >
          Submit
        </button>
        {/* <Modal/> */}
      </form>
    </div>
  );
}

export default LoanForm;
