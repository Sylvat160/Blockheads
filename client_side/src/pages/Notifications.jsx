import React, { useState } from "react";

import fakeData from "../fake-data/data";
import ListTile from "../components/ListTile";

const Notifications = () => {
  const [notifications, setState] = useState(fakeData.fakeNotifications);

  return (
    <div className="w-full flex flex-col mt-10 gap-[30px] p-4">{
      notifications.map((notification, index)=>(
        console.log(notification),
        <ListTile key={notification.name + index} notification={notification} />
      ))
    }
    </div>
  );
};

export default Notifications;
