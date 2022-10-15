// Hooks
import { useState } from "react";
import Person from "./Person";
const details = [{
    name: "John",
    age: 29,
    gender: "M",
    status: false,
}, {
    name: "Jenny",
    age: 34,
    gender: "F",
    status: true,
}, {
    name: "Ram",
    age: 30,
    gender: "M",
    status: false,
}, {
    name: "Ramesh",
    age: 44,
    gender: "M",
    status: true,
}]

// function App()
const App = () => {
    const [current, setCurrent] = useState("")
    const filteredDetails = details.filter(
        (data) => {
            // return data.status === true
            return data.age >= 30
        }
    )
    const getName = (name) => {
        // console.log(name);
        setCurrent(name)
    }
    const PersonElem = filteredDetails.map(
        function (data, index) {
            return <Person key={`Person-${index}`} event={getName} name={data.name} age={data.age} gender={data.gender} />
        }
    )

    // console.log(PersonElem);
    return (
        <>
            <h1 style={
                { textAlign: "center" }
            }>
                The current user is {current}
            </h1>
            {PersonElem}
            {/* <Person name="Ram" age="23" gender="Male"/>
            <Person name="Jenny" age="17" gender="Female"/>
            <Person name="John" age="25" gender="Male"/>
            <Person name="Dinesh" age="43" gender="Male"/>
            <Person name="Priyanka" age="24" gender="Female"/> */}
        </>
    )
}
export default App;

