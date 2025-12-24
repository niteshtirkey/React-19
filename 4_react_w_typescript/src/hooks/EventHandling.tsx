
const EventHandling = () => {

const handleClick = (e: React.MouseEvent<HTMLButtonElement>)=>{
    console.log("Button Click" , e.currentTarget)
}
const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>)=>{
    console.log("Mouse Enter!" , e.currentTarget)
}

  return (
    <>
      <h2>Event handling</h2>
      <div onMouseEnter={handleMouseEnter}>
        <p>Event handling Example</p>
        <button onClick={handleClick}>Click Me!</button>
      </div>
    </>
  );
};

export default EventHandling;
