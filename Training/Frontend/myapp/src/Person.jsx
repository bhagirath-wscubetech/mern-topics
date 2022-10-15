import "./Person.css";
function Person(props) {
    // console.log(props.age);
    // font-size -> fontSize
    // color -> color
    // background-color -> backgroundColor
    return (
        <div className="Person-Container">
            <h4 style={
                {
                    fontSize: "40px",
                    color: "red",
                    fontWeight: "normal"
                }
            }>Name: {props.name}</h4>
            <h4>Age: {props.age}</h4>
            <h4>Gender: {props.gender}</h4>
            <button onClick={() => props.event(props.name)}>Click Me</button>
        </div>
    )
}
export default Person;

