import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page Two" />
    <h1>Hi From the Second Page</h1>
    <p>Welcome to Page 2</p>
    <Link to="/">Go Back to the Homepage</Link>
  </Layout>
)

export default SecondPage
