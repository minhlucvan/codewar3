import React from "react"
import ReactMarkdown from "react-markdown"
import { graphql } from "gatsby"

import Layout from "~/components/layout"
import SEO from "~/components/seo"
import Image from "~/components/image"

import { formatPrice } from "~/helpers/currency-formatter"

const ProfilePage = ({ data }) => {
  const user = data.strapiUsers

  const seo = {
    title: user.title,
    shareImage: user.image,
  }

  // const flexJustify = product.specifications.length > 0 ? "between" : "center"

  return (
    <Layout>
      <SEO seo={seo} />
      hello
    </Layout>
  )
}

export const query = graphql`
  query UserQuery($id: ID!) {
    StrapiUser(id: $id) {
      id
      username
    }
  }
`

export default ProfilePage
