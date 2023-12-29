import React, { useEffect, useState } from "react";
import DateAndTime from "date-and-time";

const Clock = (props) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  return (
    <div>
      <h3>{DateAndTime.format(currentTime, props.formatString)}</h3>
    </div>
  );
};

export default Clock;
