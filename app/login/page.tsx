import React from "react";

import Login from "../ui/login/Login";
import withAuth from "../lib/hoc/withAuth";

const page = () => {
  return (
    <main className="h-mob-calc-auth md:h-tab-calc-auth lg:h-desc-calc">
      <Login />
    </main>
  );
};

export default withAuth(page);
