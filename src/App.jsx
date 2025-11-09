import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [companyName, setCompanyName] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [fOwnerName, setFOwnerName] = useState("");
  const [fOwnerNumer, setFOwnerNumer] = useState("");
  const [fEmail, setFEmail] = useState("");
  const [description, setDescription] = useState("");
  const [jobType, setJobType] = useState("");
  const [tyrepressure, setTyrepressure] = useState("");
  const [bodycondition, setBodycondition] = useState("");
  const [paintcondition, setPaintcondition] = useState("");

  // errors
  const [emailError, setEmailError] = useState('')
  const [vehicleNumberError, setVehicleNumberError] = useState('')
  const [ownerNumberError, setOwnerNumberError] = useState('')



  const handleClick = (e) => {
    e.preventDefault();
    const data = {
      companyName,
      vehicleNumber,
      fOwnerName,
      fOwnerNumer,
      fEmail,
      description,
      jobType,
      tyrepressure,
      bodycondition,
      paintcondition,
    };
    if (emailError || vehicleNumberError || ownerNumberError) {
      toast.error("Please fix the errors before submitting the form.")
      return;
    }
    toast.success("Form submitted successfully!")
    console.log(data);
  };

  return (
    <div className="text-black flex flex-col w-full max-w-xl mx-auto gap-4 mt-10 p-6 bg-white rounded-2xl shadow-lg">
      <h1 className="text-2xl font-bold text-center">Service Form</h1>
      <form onSubmit={(e) => handleClick(e)} className="flex flex-col gap-2">

        <label htmlFor="vehicleNumber" className="text-lg font-bold">Vehicle Number* :</label>
        <input
          type="text"
          value={vehicleNumber}
          className="p-3 border border-gray-400 rounded-lg"
          onChange={(e) => {
            const v = e.target.value
            setVehicleNumber(v.toUpperCase())
          }}
          onBlur={() => {
            const valid = /^[A-Z]{2}\s?[0-9]{1,2}\s?[A-Z]{1,3}\s?[0-9]{4}$/.test(vehicleNumber)
            setVehicleNumberError(valid ? "" : "Invalid Vehicle Number Format")
          }}
          placeholder="Enter Vehicle Number"
          required
        />
        {
          vehicleNumberError &&
          <p className="text-red-600 text-sm">Invalid Vehicle Number</p>
        }

        <label htmlFor="" className="text-lg font-bold">Company Name* :</label>
        <input
          type="text"
          value={companyName}
          className="p-3 border border-gray-400 rounded-lg"
          onChange={(e) => setCompanyName(e.target.value)}
          placeholder="Enter Company Name"
          required
        />
        <label htmlFor="" className="text-lg font-bold">Owner Name* :</label>
        <input
          type="text"
          value={fOwnerName}
          className="p-3 border border-gray-400 rounded-lg"
          onChange={(e) => { setFOwnerName(e.target.value) }}
          placeholder="Enter Owner Name"
          required
        />

        <label htmlFor="" className="text-lg font-bold">Owner Number* :</label>
        <input
          type="text"
          value={fOwnerNumer}
          className="p-3 border border-gray-400 rounded-lg"
          onChange={(e) => {
            const v = e.target.value;
            setFOwnerNumer(v);
          }}

          onBlur={() => {
            const valid = /^\+?[1-9]\d{0,3}[-.\s]?\d{1,14}$/.test(fOwnerNumer)
            setOwnerNumberError(valid ? "" : "Invalid Number")
          }}
          placeholder="Enter Owner Number"
          required
        />

        {
          ownerNumberError &&
          <p className="text-red-600 text-sm">Invalid Owner Number</p>
        }

        <label htmlFor="" className="text-lg font-bold">Owner Email* :</label>
        <input
          type="email"
          value={fEmail}
          className="p-3 border border-gray-400 rounded-lg"
          onChange={(e) => {
            const v = e.target.value;
            setFEmail(v);
          }}
          onBlur={() => {
            const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fEmail);
            setEmailError(valid ? "" : "Invalid email format");
          }}
          placeholder="Enter Owner Email"
        />

        {emailError && (
          <p className="text-red-600 text-sm">{emailError}</p>
        )}

        <label htmlFor="" className="text-lg font-bold">Description :</label>
        <textarea
          value={description}
          className="p-3 border border-gray-400 rounded-lg"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter Description"
        ></textarea>

        <label htmlFor="" className="text-lg font-bold">Service Type* :</label>
        <select
          value={jobType}
          className="p-3 border border-gray-400 rounded-lg"
          onChange={(e) => setJobType(e.target.value)}
          required
        >
          <option value="">Select Service Type</option>
          <option value="Quick Service">Quick Service</option>
          <option value="General Service">General Service</option>
        </select>

        {jobType === "General Service" && (
          <div className="flex flex-col gap-6 mt-4 p-4 border rounded-xl bg-gray-50">
            <div className="flex flex-col">
              <label className="font-semibold">Body Condition</label>
              <div className="flex flex-col gap-1 mt-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    value="Good"
                    onChange={(e) => setBodycondition(e.target.value)}
                    name="bodyCondition"
                  />
                  Good
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    value="Minor Damage"
                    onChange={(e) => setBodycondition(e.target.value)}
                    name="bodyCondition"
                  />
                  Minor Damage
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    value="Major Damage"
                    onChange={(e) => setBodycondition(e.target.value)}
                    name="bodyCondition"
                  />
                  Major Damage
                </label>
              </div>
            </div>

            <div className="flex flex-col">
              <label className="font-semibold">Paint Condition</label>
              <div className="flex flex-col gap-1 mt-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    value="Good"
                    onChange={(e) => setPaintcondition(e.target.value)}
                    name="paintCondition"
                  />
                  Good
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    value="Minor Damage"
                    onChange={(e) => setPaintcondition(e.target.value)}
                    name="paintCondition"
                  />
                  Minor Damage
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    value="Major Damage"
                    onChange={(e) => setPaintcondition(e.target.value)}
                    name="paintCondition"
                  />
                  Major Damage
                </label>
              </div>
            </div>

            <div className="flex flex-col">
              <label className="font-semibold">Tyre Pressure</label>
              <input
                type="text"
                value={tyrepressure}
                onChange={(e) => setTyrepressure(e.target.value)}
                className="p-3 border border-gray-400 rounded-lg"
                placeholder="Enter Tyre Pressure"
              />
            </div>
          </div>
        )}

        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700"
        >
          Submit
        </button>
      </form>

      {/* toast setup */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

    </div>
  );
};

export default App;
