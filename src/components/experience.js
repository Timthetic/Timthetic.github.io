import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import ExperienceCard from "../components/experienceCard"
import { Typography, Grid } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'

import experienceList from "../data/experience"

const useStyles = makeStyles(theme => ({
	sectionTitle: {
		marginTop: '16px',
		marginBottom: '8px'
	}
}));

const Experience = () => {
	const classes = useStyles();
	const data = useStaticQuery(graphql`
		{
			companyLogos: allFile(filter: {relativePath: {glob: "companyLogos/*" }}) {
				nodes {
					relativePath
					childImageSharp {
						fixed(width: 350) {
							...GatsbyImageSharpFixed
						}
					}
				}
			}
		}
	`);
	const idToImageMap = new Map();
	for (const { relativePath, childImageSharp } of data.companyLogos.nodes) {
		const id = relativePath.split('/').reverse()[0].split('.')[0];
		idToImageMap.set(id, childImageSharp.fixed);
		if (!experienceList.some(o => o.id === id)) {
			throw new Error('Unknown officer picture in src/images: ' + relativePath);
		}
	}
	const experienceCards = experienceList.map( experience => {
		return <Grid item key={experience.title} sm={12} xs={12}>
			<ExperienceCard {...experience} image={idToImageMap.get(experience.id)}/>
		</Grid>
	}
	)
  return <>
		<div id='experience' className='anchor'/>
    <Typography variant='h4' component='h2' className={classes.sectionTitle}>
			Experience
		</Typography>
		<Grid container spacing={1}>
			{experienceCards}
		</Grid>
  </>
}

export default Experience
