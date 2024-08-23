import "./App.css";
import MyDataTable from "./components/table/MyDataTable";

function App() {
  const handleEdit = (args, event, row) => {
    alert(`Edit Row: ${JSON.stringify(row)}`);
  };

  const handleDelete = (args, event, row) => {
    alert(`Delete Row: ${JSON.stringify(row)}`);
  };

  const handleView = (args, event, row) => {
    alert(`View Row: ${JSON.stringify(row)}`);
  };

  const customButtons = {
    view: (row) => (
      <button
        onClick={(event) => handleView("other-variables", event, row)}
        style={{ background: "blue", color: "white", margin: "0 2px" }}
      >
        View
      </button>
    ),
    edit: (row) => (
      <button
        onClick={(event) => handleEdit("other-variables", event, row)}
        style={{ background: "green", color: "white", margin: "0 2px" }}
      >
        Edit
      </button>
    ),
    delete: (row) => (
      <button
        onClick={(event) => handleDelete("other-variables", event, row)}
        style={{ background: "red", color: "white", margin: "0 2px" }}
      >
        Delete
      </button>
    ),
  };

  return (
    <MyDataTable
      headers={["id", "part_no", "part_qty", "price"]}
      sortBy={["part_no", "part_qty", "price"]}
      showActions={true}
      actionTypes={["edit", "delete", "view"]}
      customRenderActions={customButtons}
      customHeaders={{
        id: "ID",
        part_no: "Part Number",
        part_qty: "Quantity",
        price: "Price ($)",
      }}
    />
  );
}

export default App;
