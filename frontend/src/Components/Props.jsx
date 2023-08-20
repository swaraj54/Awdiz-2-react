const MyParentComponent = () => {
    const handleClick = () => {
        alert('Button clicked!');
    };
    return <MyChildComponent text="Click me from parent" onClick={handleClick} />;
};
const MyChildComponent = ({ text, onClick }) => {
    return <button onClick={onClick}>Hi - {text}</button>;
};


export default MyParentComponent;