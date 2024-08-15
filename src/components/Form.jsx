import { useState } from "react"

function Form({onSubmitData}){
    const [formData,setFormData] = useState({
        date:"",
        description:"",
        category:"",
        amount:""
    })
    function handleChange(event){
        const {name, value} = event.target;
        setFormData(formData => ({...formData, [name]:value}))
    }
    function handleSubmit(event){
        event.preventDefault();
        onSubmitData(formData);
        

        setFormData({   //Resets the form after submitting
            date:"",
            description:"",
            category:"",
            amount:""
        })
    }
    return(
        <form className="row g-2 mt-2 mx-auto p-2" style={{ border: "1px solid lightgrey" }} onSubmit={handleSubmit}>
            <div className="col-md-3 d-flex align-items-center">
                <label className="me-2">Date:</label>
                <input type="date" className="form-control" name="date" value={formData.date} onChange={handleChange} required />
            </div>
            <div className="col-md-3">
                <input type="text" className="form-control" placeholder="Description" name="description" value={formData.description} onChange={handleChange} required/>
            </div>
            <div className="col-md-3">
                <input type="text" className="form-control" placeholder="Category" name="category" value={formData.category} onChange={handleChange} required />
            </div>
            <div className="col-md-3">
                <input type="number" className="form-control" placeholder="Amount" name="amount" value={formData.amount} onChange={handleChange} required />
            </div>
            <button type="submit" className="btn btn-secondary col-md-2 mx-auto" >
                Add Transaction
            </button>
        </form>
    )
}
export default Form