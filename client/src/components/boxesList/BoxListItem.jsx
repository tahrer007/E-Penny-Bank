import React from "react";

const BoxListItem = ({ box }) => {
  return (
    <div>
      {box.boxName}
      {box.type}
    </div>
  );
};

export default BoxListItem;
