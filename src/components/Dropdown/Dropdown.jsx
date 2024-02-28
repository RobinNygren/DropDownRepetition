import workers from "./workers.json";
import { useState } from "react";

const Dropdown = () => {
    const [selectedPerson, setSelectedPerson] = useState([]);

    const handleSelect = (event) => {
        const personIndex = event.target.value;
        const selected = workers[personIndex];
        setSelectedPerson(selected);
        console.log(selected);
    };

    return (
        <>
            <select className="Dropdown" onChange={handleSelect}>
                <option value="">Välj en person</option>
                {workers.map((person, index) => (
                    <option key={index} value={index}>
                        {person.firstname} {person.lastname}
                    </option>
                ))}
            </select>
        </>
    );
};

export default Dropdown;
