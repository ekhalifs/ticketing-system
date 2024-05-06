import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import { TicketContext } from "../Context/TicketContext";

const ActiveTickets = () => {
  const { tickets, setTickets, filterRecords } = useContext(TicketContext);
  const customStyles = {
    headRow: {
      style: {
        backgroundColor: "rgb(92, 96, 224)",
        color: "white",
      },
    },
    headCells: {
      style: {
        fontSize: "16px",
        fontWeight: "600",
        textTransform: "uppercase",
      },
    },
    cells: {
      style: {
        fontSize: "15px",
      },
    },
  };
  const columns = [
    {
      name: "#",
      selector: (_, index) => index + 1,
      sortable: true,
    },
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Category",
      selector: (row) => row.category,
    },
    {
      name: "Department",
      selector: (row) => row.department,
    },
    {
      name: "Urgency",
      selector: (row) => row.urgency,
    },
    {
      name: "Description",
      selector: (row) => row.description,
    },
    {
      name: "Duration",
      selector: (row) => row.duration,
    },
  ];

  const handleChange = (e) => {
    const inputValue = e.target.value.toLowerCase();
    const searchedRecords = filterRecords.filter((record) => {
      return record.title.toLowerCase().includes(inputValue);
    });
    setTickets(searchedRecords);
  };
  return (
    <div className="mt-5">
      <h2 className="text-center">Active tickets</h2>
      <div
        style={{
          paddingBottom: "10px",
          display: "flex",
          justifyContent: "flex-end",
        }}
        onChange={handleChange}
      >
        <input type="text" placeholder="search..." />
      </div>
      <DataTable
        columns={columns}
        data={tickets}
        pagination
        selectableRows
        customStyles={customStyles}
      ></DataTable>
    </div>
  );
};
export default ActiveTickets;
