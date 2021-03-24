import * as React from "react"

// import { Link } from "gatsby"
// import { makeStyles } from '@material-ui/core/styles';
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Bio from "../components/bio/bio"
import Projects from "../components/projects/projects"
import Experience from "../components/experience/experience"
import Contact from "../components/contact/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Bio/>
		<Projects/>
		<Experience/>
		<Contact/>
  </Layout>
)

export default IndexPage
