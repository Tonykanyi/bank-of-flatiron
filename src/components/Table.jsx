import React from "react";

function Table({ data, handleDelete }) {
    const rows = data.map((item, index) => {
        const { date, description, category, amount } = item; 
        return (
            <tr key={index}>
                <td>{date}</td>
                <td>{description}</td>
                <td>{category}</td>
                <td>{amount}</td>
                <td>
                    <button className="btn btn-danger" onClick={() => handleDelete(index)}>Delete</button>
                </td>
            </tr> 
        );
    });

    return (
        <div className="mt-2">
            <table className="table table-striped text-center table-bordered table-hover">
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Description</th>
                        <th scope="col">Category</th>
                        <th scope="col">Amount</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    );
}

export default Table;