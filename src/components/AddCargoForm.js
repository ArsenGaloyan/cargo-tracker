import React, { useState } from "react";

const AddCargoForm = ({ onAddCargo }) => {
  const [name, setName] = useState("");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !origin || !destination || !departureDate) {
      alert("Все поля должны быть заполнены!");
      return;
    }

    const newCargo = {
      id: `CARGO${Date.now()}`, // Генерация уникального ID
      name,
      status: "Ожидает отправки",
      origin,
      destination,
      departureDate,
    };

    onAddCargo(newCargo);

    setName("");
    setOrigin("");
    setDestination("");
    setDepartureDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-4">
      <div className="mb-3">
        <label htmlFor="cargoName" className="form-label">
          Название груза:
        </label>
        <input
          type="text"
          id="cargoName"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="cargoOrigin" className="form-label">
          Пункт отправления:
        </label>
        <select
          id="cargoOrigin"
          className="form-select"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
        >
          <option value="">Выберите</option>
          <option value="Москва">Москва</option>
          <option value="Санкт-Петербург">Санкт-Петербург</option>
          <option value="Казань">Казань</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="cargoDestination" className="form-label">
          Пункт назначения:
        </label>
        <select
          id="cargoDestination"
          className="form-select"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        >
          <option value="">Выберите</option>
          <option value="Екатеринбург">Екатеринбург</option>
          <option value="Казань">Казань</option>
          <option value="Новосибирск">Новосибирск</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="cargoDate" className="form-label">
          Дата отправления:
        </label>
        <input
          type="date"
          id="cargoDate"
          className="form-control"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Добавить
      </button>
    </form>
  );
};

export default AddCargoForm;
