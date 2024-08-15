import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

function Form({ onSubmitData }) {
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmitData(formData);

    setFormData({   // Resets the form after submitting
      date: "",
      description: "",
      category: "",
      amount: ""
    });
  }

  return (
    <form className="p-4 border rounded shadow-sm bg-light" onSubmit={handleSubmit}>
      <div className="form-group mb-3">
        <label className="form-label">Date:</label>
        <input
          type="date"
          className="form-control"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group mb-3">
        <label className="form-label">Description:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group mb-3">
        <label className="form-label">Category:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group mb-3">
        <label className="form-label">Amount:</label>
        <input
          type="number"
          className="form-control"
          placeholder="Enter amount"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary w-100">
        Add Transaction
      </button>
    </form>
  );
}

export default Form;
