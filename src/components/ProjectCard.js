import * as React from "react"
import PropTypes from "prop-types"

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Card, CardContent, Box, CardActions, IconButton, Collapse, Divider } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { GitHub } from '@material-ui/icons'


const useStyles = makeStyles(theme => ({
	projectTitle: {
		padding: '16px',
    paddingBottom: 0,
  },
	projectDescription: {
		padding: '16px'
	},
	affiliation: {
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
	projectCard: {
		height: "100%"
	}
}));

const ProjectCard = ({title, affiliation, type, repository, description, tech}) => {
	const classes = useStyles();

	const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return <Card className={classes.projectCard}>
		<Box className={classes.cardButtons}>
			<CardContent className={classes.projectTitle}>
				<Typography>{title} ({type})</Typography>
				<Typography variant='body2' className={classes.affiliation}>{affiliation}</Typography>
			</CardContent>
			<CardActions className={classes.cardButtons}>
			<a href={repository} target='_blank' rel='noreferrer'>
				<button className={classes.githubButton}>
					<Box>
						<GitHub/> 
					</Box>
				</button>
			</a>
			</CardActions>
		</Box>
		<CardContent className={classes.projectDescription}>
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

ProjectCard.propTypes = {
	title: PropTypes.string,
	affiliation: PropTypes.string,
	type: PropTypes.string,
	description: PropTypes.string,
	tech: PropTypes.array
}

// ProjectCard.defaultProps = {
//   title: ``,
// }

export default ProjectCard