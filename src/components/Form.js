import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  const [submittedData, setSubmittedData] = useState([])

  function handleFirstNameChange(event) {
    setFirstName(event.target.value)
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const formData = { firstName: firstName, lastName: lastName};
    const dataArray = [...submittedData, formData];
    setSubmittedData(dataArray);
    setFirstName("");
    setLastName("");
  }

  const listOfSubmissions = submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.firstName} {data.lastName}
      </div>
    )
  })

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleFirstNameChange} type="text" value={firstName} />
      <input onChange={handleLastNameChange} type="text" value={lastName} />
      <button type="submit">Submit</button>
      <h3>Submissions</h3>
      {listOfSubmissions}
    </form>
  );
}

export default Form;
