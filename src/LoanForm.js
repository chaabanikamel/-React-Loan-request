import React from "react";
import "./FormStyle.css";
import Modal from "./Modal";
import { useState } from "react";

function LoanForm() {
  const [errorMessage,setErrorMessage]=useState(null)
  const [showModal, SetShowModal] = useState(false);
  const [loanInputs, setLoanInputs] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    isEmployee: false,
    salaryRange: "",
  });
  function handleDivClick() {
    console.log("dic clicked");
    if (showModal) {
      SetShowModal(false);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    setErrorMessage(null)
    const {age,phoneNumber}=loanInputs
   if (age<18 || age>100){
    setErrorMessage("the Age is Not allowed")
   }else if(phoneNumber.length <8 ||phoneNumber.length>12){
        setErrorMessage("phone Number format is Incorrect")
   }
    SetShowModal(true);
  }

  const btnIsDisabled =
    loanInputs.name == "" ||
    loanInputs.age == "" ||
    loanInputs.phoneNumber == "";

  return (
    <div
      onClick={handleDivClick}
      className="flex"
      style={{ flexDirection: "column" }}
    >
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
          id="submit-loan-btn"
          className={btnIsDisabled ? "disabled" : ""}
          onClick={handleSubmit}
          disabled={btnIsDisabled}
        >
          Submit
        </button>
      </form>
      <Modal isVisible={showModal} errorMessage={errorMessage} />
    </div>
  );
}

export default LoanForm;
