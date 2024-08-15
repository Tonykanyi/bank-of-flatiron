import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search-bar";
import Form from "./components/Form";
import Sort from "./components/Sort";
import Table from "./components/Table";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedSortOption, setSelectedSortOption] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then((response) => response.json())
      .then((fetchedData) => setData(fetchedData))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  function onSubmitData(formData) {
    setData((prevData) => [...prevData, formData]);
  }

  function onSearchData(event) {
    setSearch(event.target.value);
  }

  function handleSort(event) {
    setSelectedSortOption(event.target.value);
  }

  const itemsToDisplay = data.filter((item) => {
    if (search.length > 0) {
      return item.description.toLowerCase().includes(search.toLowerCase());
    } else {
      return true;
    }
  }).sort(sortFunction(selectedSortOption));

  function sortFunction(selectedSortOption) {
    if (selectedSortOption === "date") {
      return (a, b) => b.date.localeCompare(a.date);
    } else if (selectedSortOption === "category") {
      return (a, b) => a.category.localeCompare(b.category);
    } else if (selectedSortOption === "amount") {
      return (a, b) => a.amount - b.amount;
    } else if (selectedSortOption === "description") {
      return (a, b) => a.description.localeCompare(b.description);
    } else {
      return () => 0;
    }
  }

  function handleDelete(id) {
    const newData = data.filter((item) => item.id !== id); // Assuming each item has a unique `id`
    setData(newData);
  }

  return (
    <div>
      <Header />
      <Search onSearchData={onSearchData} search={search} />
      <Form onSubmitData={onSubmitData} />
      <Sort handleSort={handleSort} selectedSortOption={selectedSortOption} />
      <Table data={itemsToDisplay} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
