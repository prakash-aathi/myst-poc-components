import { useRef, useState } from "react";
import "./App.css";
import MyDataTable from "./components/table/MyDataTable";
import { BsThreeDotsVertical } from "react-icons/bs";

function App() {
  const data = [
    { id: 1, organization: "Apple", startDate: "12/14/2023", endDate: "12/14/2024", duration: "1 year", type: "Employment", location: "Cupertino, CA" },
    { id: 2, organization: "Google", startDate: "12/14/2023", endDate: "12/14/2024", duration: "1 year", type: "Employment", location: "Mountain View, CA" },
    { id: 3, organization: "Facebook", startDate: "10/01/2022", endDate: "12/24/2024", duration: "1 year", type: "Own", location: "Menlo Park, CA" },
  ];

  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleDropdownToggle = (rowId) => {
    setDropdownOpen(dropdownOpen === rowId ? null : rowId);
  };

  const handleEdit = (row) => {
    console.log("Editing:", row);
  };

  const handleDelete = (row) => {
    console.log("Deleting:", row);
  };

  const customRenderElement = {
    action: (row) => (
      <div>
        <BsThreeDotsVertical onClick={() => handleDropdownToggle(row.id)} />
        {dropdownOpen === row.id && (
          <div className="dropdown-menu-custom">
            <button onClick={() => handleEdit(row)}>Edit</button>
            <button onClick={() => handleDelete(row)}>Delete</button>
          </div>
        )}
      </div>
    ),
  };

  const customSearchRef = useRef(null);

  const handleSearchInput = (event) => {
    setSearchQuery(event.target.value);
  };

  let searchFunction = null;

  const setSearchFunction = (searchFn) => {
    searchFunction = searchFn;
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchFunction) {
      searchFunction(searchQuery);
    }
  };

  const SEARCH_FORM_STYLE = {
    float: 'right'
  };

  const SEARCH_INPUT_STYLE = {
    border: 'none',
    outline: 'none',
    boxShadow: 'none',
    marginRight: '5px',
    marginBottom: '20px',
    borderBottom: '1px solid #9c4dcb',
  };

  const SEARCH_BUTTON_STYLE = {
    border: '0',
    margin: '0 1px',
    borderRadius: 0,
    color: '#FFFFFF',
    cursor: 'pointer',
    background: '#9c4dcb'
  };

  const CustomSearchForm = (
    <form
      ref={customSearchRef}
      id="my-custom-search-form"
      style={SEARCH_FORM_STYLE}
      onSubmit={handleSearch}
    >
      <input
        id="custom-search-field"
        placeholder="Search any keyword"
        style={SEARCH_INPUT_STYLE}
        value={searchQuery}
        onChange={handleSearchInput}
      />
      <button style={SEARCH_BUTTON_STYLE} type="submit">Search</button>
    </form>
  );

  return (
    <div className="px-4 py-4">
      <MyDataTable
        data={data}
        headers={[
          "id",
          "organization",
          "startDate",
          "endDate",
          "duration",
          "type",
          "location",
          "action"
        ]}
        sortBy={["id", "organization", "startDate", "endDate", "duration", "type", "location"]}
        customHeaders={{
          id: "ID",
          organization: "Company",
          startDate: "Start Date",
          endDate: "End Date",
          duration: "Duration",
          type: "Type",
          location: "Location",
          action: " "
        }}
        customRenderCell={customRenderElement}
        search={false}
        CustomSearchForm={CustomSearchForm}
        onSearch={setSearchFunction}
      />
    </div>
  );
}

export default App;