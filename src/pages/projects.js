import * as React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectCard from "../components/ProjectCard"
import { Typography, Grid } from "@material-ui/core"

import projectList from "../data/projects"

const ProjectsPage = () => {
  return <Layout>
    <SEO title="Projects" />
    <Typography variant='h5' component='h2'>
			Projects
		</Typography>
		<Grid container spacing={1}>
			{projectList.map( project => 
				<Grid item key={project.title} md={4} sm={6} xs={12}>
					<ProjectCard {...project}/>
				</Grid>
			)}
		</Grid>
  </Layout>
}

export default ProjectsPage
