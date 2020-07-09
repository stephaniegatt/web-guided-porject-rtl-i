import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AnimalForm from "./components/AnimalForm";

test("AnimalForm adds new animals to the list", () => {
    render(<AnimalForm />);
    // type into all three inputs
    // 1 query for all inputs
    // 2 run the change event to add text
    const speciesInput = screen.getByLabelText(/species/i); // texting you have an input with label species, and accessability
    const ageInput = screen.getByLabelText(/age/i);
    const notesInput = screen.getByLabelText(/notes/i);

    // events with RTL
    fireEvent.change(speciesInput, { target: { value: "Monkey" } });
    fireEvent.change(ageInput, { target: { value: 15 } });
    fireEvent.change(notesInput, { target: { value: "docile" } });


    // click submit button
    // 1 query for the button
    // 2. run the click event on the button
     const submitButton = screen.getByText(/submit/i);
     fireEvent.click(submitButton);


    //assert that my animal is in the list
    // 1 query for the new animal text
    // 2 assert that it is being rendered
    const newAnimal = screen.getByText(/monkey/i);
    expect(newAnimal).toBeInTheDocument();
})