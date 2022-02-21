import Link from "./Link";

import React from "react";

const ListSelection = () => {
  return (
    <div>
      <Link filter="SHOW ALL">SHOW ALL</Link>
      <Link filter="ACTIVE">ACTIVE</Link>
      <Link filter="COMPLETED">COMPLETED</Link>
    </div>
  );
};

export default ListSelection;
