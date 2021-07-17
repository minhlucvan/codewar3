import {} from '../'import React, { useState } from "react";
import { graphql } from "gatsby";

import Layout from "~/components/layout";
import User from "../views/User/User";

const ProfilePage = () => {
  return (
    <Layout noHeader>
      <User />
    </Layout>
  );
};

export default ProfilePage;
