import { useState } from "react";
import CargoList from "./components/CargoList";
import Filter from "./components/Filter";
import AddCargoForm from "./components/AddCargoForm";
import { cargoList as InitialCargoList} from "./data/cargoData";

export default function App() {
  const [cargoList, setCargoList] = useState(InitialCargoList); 
  const [filteredStatus, setFilteredStatus] = useState('');


  //фильтрация по статусу
  const filteredCargoList = filteredStatus
    ? cargoList.filter((cargo) => cargo.status === filteredStatus)
    : cargoList;

  const handleAddCargo = (newCargo) => {
    setCargoList((prevList) => [...prevList, newCargo]);
  };
  const handleStatusFilterChange = (status) => {
    setFilteredStatus(status);
  };
 

  return (
    <div>
      <h1>Отслеживание грузов</h1>
      <Filter onFilterChange={setFilteredStatus} statusOptions={['Ожидает отправки', 'В пути', 'Доставлен']} onStatusChange={handleStatusFilterChange}  />
      <CargoList cargoList={filteredCargoList} setCargoList={setCargoList} filteredCargoList = {filteredCargoList} />
      <AddCargoForm onAddCargo={handleAddCargo} />
      
    </div>
  );
}