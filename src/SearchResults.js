import React from "react";
import { useState } from "react";

function SearchResult({ results }) {
  const [selectedRows, setSelectedRows] = useState([]);

  function handleRowClick(item) {
    if (selectedRows.includes(item)) {
      setSelectedRows(selectedRows.filter((rowItem) => rowItem !== item));
    } else {
      setSelectedRows([...selectedRows, item]);
    }
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>First name</th>
          <th>Surname </th>
          <th>Email</th>
          <th>Room id</th>
          <th>Check in date</th>
          <th>Check out date</th>
        </tr>
      </thead>
      <tbody>
        {results.map((item) => (
          <tr
            key={item}
            onClick={() => handleRowClick(item)}
            className={selectedRows.includes(item) ? "selected" : ""}
          >
            <td>{item.title}</td>
            <td>{item.firstName}</td>
            <td>{item.surname}</td>
            <td>{item.email}</td>
            <td>{item.roomId}</td>
            <td>{item.checkInDate}</td>
            <td>{item.checkOutDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SearchResult;
