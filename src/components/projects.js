import * as React from "react"

import ProjectCard from "../components/ProjectCard"
import { Typography, Grid } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'

import projectList from "../data/projects"

const useStyles = makeStyles(theme => ({
	sectionTitle: {
		marginBottom: '8px'
	}
}));

const Projects = () => {
	const classes = useStyles();
  return <>
		<div id='projects' className='anchor'/>
    <Typography variant='h5' component='h2' className={classes.sectionTitle}>
			Projects
		</Typography>
		<Grid container spacing={1}>
			{projectList.map( project => 
				<Grid item key={project.title} sm={6} xs={12}>
					<ProjectCard {...project}/>
				</Grid>
			)}
		</Grid>
  </>
}

export default Projects
