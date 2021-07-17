import React, { useState } from "react";
import { graphql } from "gatsby";

import Layout from "~/components/layout";
import User from "../views/User/User";

const UserPage = () => {
  return (
    <Layout noHeader>
      <User />
    </Layout>
  );
};

export default UserPage;
