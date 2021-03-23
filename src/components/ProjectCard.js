import * as React from "react"
import PropTypes from "prop-types"

import { makeStyles } from '@material-ui/core/styles'
import { Typography, Card, CardContent, Box } from '@material-ui/core'

import { GitHub } from '@material-ui/icons'


const useStyles = makeStyles(theme => ({
	affiliation: {
		color: theme.palette.grey.main
	},
	githubButton: {
		marginLeft: '8px',
		marginBottom: '8px',
		border: 'none',
		padding: '4px',
		borderRadius: '8px',
		outline: 'none',
		backgroundColor: theme.palette.grey.light,
		'&:hover':{
			backgroundColor: theme.palette.grey.main
		}
	},
	gitHubIcon: {
		marginRight: '8px'
	}
}));

const ProjectCard = ({title, affiliation, type, repository}) => {
	const classes = useStyles();
  return <Card>
    <CardContent>
			<Typography>{title} ({type})</Typography>
			<Typography variant='body2' className={classes.affiliation}>{affiliation}</Typography>
		</CardContent>
		<a href={repository} target='_blank' rel='noreferrer'>
			<button className={classes.githubButton}>
				<Box display='flex'>
					<GitHub className={classes.gitHubIcon}/> 
					<Typography>
						GitHub
					</Typography>
				</Box>
			</button>
		</a>
  </Card>
}

ProjectCard.propTypes = {
  title: PropTypes.string,
	affiliation: PropTypes.string,
	type: PropTypes.string,
}

// ProjectCard.defaultProps = {
//   title: ``,
// }

export default ProjectCard