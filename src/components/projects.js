import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import ProjectCard from "../components/ProjectCard"
import { Typography, Grid } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'

import projectList from "../data/projects"

const useStyles = makeStyles(theme => ({
	sectionTitle: {
		marginTop: '16px',
		marginBottom: '8px'
	}
}));

const Projects = () => {
	const classes = useStyles();
	const data = useStaticQuery(graphql`
		{
			projectPhotos: allFile(filter: {relativePath: {glob: "projects/*" }}) {
				nodes {
					relativePath
					childImageSharp {
						fixed(height: 200) {
							...GatsbyImageSharpFixed
						}
					}
				}
			}
		}
	`);
	const idToImageMap = new Map();
	for (const { relativePath, childImageSharp } of data.projectPhotos.nodes) {
		const id = relativePath.split('/').reverse()[0].split('.')[0];
		idToImageMap.set(id, childImageSharp.fixed);
		if (!projectList.some(o => o.id === id)) {
			throw new Error('Unknown officer picture in src/images: ' + relativePath);
		}
	}
	const projectCards = projectList.map( project => {
		return <Grid item key={project.title} sm={6} xs={12}>
			<ProjectCard {...project} image={idToImageMap.get(project.id)}/>
		</Grid>
	}
	)
  return <>
		<div id='projects' className='anchor'/>
    <Typography variant='h4' component='h2' className={classes.sectionTitle}>
			Projects
		</Typography>
		<Grid container spacing={1}>
			{projectCards}
		</Grid>
  </>
}

export default Projects
