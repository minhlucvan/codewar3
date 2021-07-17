import React from "react";
import { graphql } from "gatsby";

import Layout from "~/components/layout";
import SEO from "~/components/seo";
import Login from "../views/Login/Login";

const LoginPage = () => {
  const seo = { title: "Categories" };
  return (
    <Layout noHeader>
      <SEO seo={seo} />
      <Login />
    </Layout>
  );
};

export default LoginPage;
