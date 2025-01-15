import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

export default function CargoList({ setCargoList, filteredCargoList }) {
  const statusOptions = ["Ожидает отправки", "В пути", "Доставлен"];

  const handleStatusChange = (id, newStatus) => {
    setCargoList((prevList) =>
      prevList.map((cargo) => {
        if (cargo.id === id) {
          const isFutureDate = new Date(cargo.departureDate) > new Date();
          if (newStatus === "Доставлен" && isFutureDate) {
            alert(
              'Нельзя установить статус "Доставлен" для груза с будущей датой отправления.'
            );
            return cargo;
          }
          return { ...cargo, status: newStatus };
        }
        return cargo;
      })
    );
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "Ожидает отправки":
        return "table-warning"; // Желтый
      case "В пути":
        return "table-primary"; // Синий
      case "Доставлен":
        return "table-success"; // Зеленый
      default:
        return "";
    }
  };
  return (
    <div>
      <h2>Список грузов</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Название</th>
            <th>Статус</th>
            <th>Пункт отправления</th>
            <th>Пункт назначения</th>
            <th>Дата отправления</th>
          </tr>
        </thead>
        <tbody>
          {filteredCargoList.map((cargo) => (
            <tr key={cargo.id} className={getStatusClass(cargo.status)}>
              <td>{cargo.id}</td>
              <td>{cargo.name}</td>
              <td>
                <select
                  value={cargo.status}
                  onChange={(e) => handleStatusChange(cargo.id, e.target.value)}
                >
                  {statusOptions.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </td>
              <td>{cargo.origin}</td>
              <td>{cargo.destination}</td>
              <td>{cargo.departureDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
