// import { Fragment } from "react/jsx-runtime";
import { MouseEvent } from "react";
function ListGroup() {
  let items = ["Nairobi", "Mombasa", "Nakuru", "Naivasha", "Ngong"];
  // items = [];
  const handleClick = (event: MouseEvent) => console.log(event);
  // items.map((item) => <li>{item}</li>);

  // if (items.length === 0) {
  //   return (
  //     <>
  //       <h1>List</h1>
  //       <p>No item Found</p>
  //     </>
  //   );
  // }

  // const message = items.length === 0 ? <p> No item found</p> : null
  return (
    <>
      <h1>List</h1>
      {/* {message} */}
      {items.length === 0 && <p>No item Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={item} className="list-group-item" onClick={handleClick}>
            {item}
          </li>
        ))}
        {/* <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
                <li className="list-group-item">A fourth item</li>
                <li className="list-group-item">And a fifth one</li> */}
      </ul>
    </>
  );
}

export default ListGroup;
