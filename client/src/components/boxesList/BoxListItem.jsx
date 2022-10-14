import React from "react";

/*
const { ids, entities } = boxesForUser;
    console.log(boxesForUser);
    content = ids.map((id) => (
      <li key={id}>
        {entities[id].totalDeposits}

        <Link to={`/box/${id}`} state={{ box: entities[id] }}>
          {entities[id].boxName}
        </Link>
      </li>
    ));
*/

const BoxListItem = ({ box }) => {
  return (
    <div>
      {box.boxName}
      {box.type}
    </div>
  );
};

export default BoxListItem;
