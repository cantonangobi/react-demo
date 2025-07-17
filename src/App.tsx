import ListGroup from "./components/ListGroup";

// import Message from './Message'

function App() {
  let items = ["Nairobi", "Mombasa", "Nakuru", "Naivasha", "Ngong"];

  const handleSelectitem = (item: string) => {
    console.log(item);
  }
  return (
    <div>
      <ListGroup  items={items} heading = "Cities" onSelectItem={handleSelectitem}/>
    </div>
  );
}

export default App;
