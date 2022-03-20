import React, { useEffect, useState } from "react";
import { users } from "../../../mock/data/userDataMock";
import { ChatPreview } from "../../molecules/ChatPreview/ChatPreview";
import "./chatList.scss";

export const ChatList = () => {
  const [userData, setUseData] = useState([]);

  useEffect(() => {
    setUseData([...users]);
  }, []);
  return (
    <ul className={"list-users"}>{
      userData.map((items,index) =>
        <li key={items.name} className={"users"}>
          <ChatPreview title={items.name}
                       src={items.photo}
                       alt={"Photo Profile"}
                       text={items.text}
                       date={items.dateInformation.date}
                       meridiem={items.dateInformation.meridiem} indexNumber={{index}}/>
        </li>
      )
    }</ul>
  );
};
