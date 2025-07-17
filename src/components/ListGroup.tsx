// import { Fragment } from "react/jsx-runtime";
interface ListGroupProps {
  items: string[];
  heading: string;
  //(item:string) => void
  onSelectItem: (item: string) => void;
}

import { useState } from "react";

// import { MouseEvent } from "react";
function ListGroup(props: ListGroupProps) {
  // let selectedIndex = 0;

  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // const [name, setName] = useState('');

  let li_class_name = "list-group-item";
  let li_class_name_active = "list-group-item active";

  // const handleClick = (event: MouseEvent) => console.log(event);
  // items.map((item) => <li>{item}</li>);

  // const message = items.length === 0 ? <p> No item found</p> : null
  return (
    <>
      <h1>{props.heading}</h1>
      {/* {message} */}
      {props.items.length === 0 && <p>No item Found</p>}
      <ul className="list-group">
        {props.items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index ? li_class_name_active : li_class_name
            }
            onClick={() => {
              setSelectedIndex(index);
              props.onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
