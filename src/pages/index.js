import * as React from "react"

// import { Link } from "gatsby"
// import { makeStyles } from '@material-ui/core/styles';
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Bio from "../components/bio"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Bio/>
  </Layout>
)

export default IndexPage
