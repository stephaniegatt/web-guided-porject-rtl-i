import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";


// jest will be our test runner, commandline interface, cypress was its own
// test() takes in two arguments, "title" and cbToRunTheTest
test("renders App Component without errors",  () => {
    // render App component
    render(<App />);

    // tests will fail if an error is thrown from any function || component inside the test cb
    // 
    // breakTheTest(true);
})

// query the virtual dom for an element and make an "assertion" about that element
test("App renders the form header", () => {
    // arrange
    // if we have to pass in props we can do it by creating a variable for props, or a variable for a oneProp. if we do oneProp that prop needs to be passed in to the App render.
    render(<App />);
    
    // Act
    // query for the header element
    // regex string to make the text case insensitive. This helps us test the proper text when it is written differently inside code vs what user sees.
    const header = screen.getByText(/add new animal/i)
    // assert
    // make an assertion (using Jest global function)
    expect(header).toBeInTheDocument()
})








 









// function breakTheTest(someValue) {
//     if (someValue === true) {
//         //do nothing
//     } else {
//         throw new Error("this test failed because we threw an error inside breakTheTest")
//     }
    
// }