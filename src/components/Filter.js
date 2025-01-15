import React from "react";

export default function Filter({
  statusOptions = [],
  selectedStatus,
  onStatusChange,
}) {
  console.log(onStatusChange);
  return (
    <div className="filter">
      <label htmlFor="statusFilter">Фильтр по статусу: </label>
      <select
        id="statusFilter"
        value={selectedStatus}
        onChange={(e) => onStatusChange(e.target.value)}
      >
        <option value="">Все</option>
        {statusOptions.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
    </div>
  );
}
