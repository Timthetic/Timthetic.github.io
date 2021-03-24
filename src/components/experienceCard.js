import * as React from "react"
import PropTypes from "prop-types"

import { makeStyles } from '@material-ui/core/styles'
import { Typography, Card, CardContent, Box, Divider } from '@material-ui/core'
import Img from 'gatsby-image'
import formatDate from '../util/dateFormat'


const useStyles = makeStyles(theme => ({
	experienceTitle: {
		padding: '16px',
    paddingBottom: 0,
  },
	experienceDescription: {
		padding: '16px'
	},
	role: {
		color: theme.palette.grey.dark
	},
	githubButton: {
		marginLeft: '8px',
		marginBottom: '8px',
		border: 'none',
		padding: '4px',
		borderRadius: '8px',
		outline: 'none',
		backgroundColor: theme.palette.grey.main,
		'&:hover':{
			backgroundColor: theme.palette.grey.light,
			cursor: 'pointer'
		}
	},
	cardButtons: {
		display: 'flex',
		justifyContent: 'space-between'
	},
	divider: {
		marginTop: '8px',
		marginBottom: '4px'
	},
	experienceCard: {
		height: "100%"
	},
	logoBox: {
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center',
		height: '200px'
	}
}));

const ExperienceCard = ({name, description, tech, role, start, end, image}) => {
	const classes = useStyles();

  return <Card className={classes.experienceCard}>
		<CardContent className={classes.experienceTitle}>
			<Typography>{name}</Typography>
			<Typography variant='body2' className={classes.role}>
				{role} ({formatDate(start)}–{formatDate(end) || "now"})
			</Typography>
		</CardContent>
		<Box className={classes.logoBox}>
			<Img fixed={image}/>
		</Box>
		<CardContent className={classes.experienceDescription}>
			<Typography>
				{description}
			</Typography>
			<Divider className={classes.divider}/>
			<Typography style={{fontWeight: 'bold'}}>
				Tech:
			</Typography>
			<Typography>
				{tech.join(", ")}
			</Typography>
		</CardContent>
  </Card>
}

ExperienceCard.propTypes = {
	name: PropTypes.string,
	role: PropTypes.string,
	description: PropTypes.string,
	tech: PropTypes.array,
	start: PropTypes.object,
	end: PropTypes.object,
	image: PropTypes.any
}

export default ExperienceCard