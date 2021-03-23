import * as React from "react"
import PropTypes from "prop-types"

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Card, CardContent, Box, CardActions, IconButton, Collapse, Divider } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { GitHub } from '@material-ui/icons'


const useStyles = makeStyles(theme => ({
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
	gitHubIcon: {
		marginRight: '8px'
	},
	expandOpen: {
    transform: 'rotate(180deg)',
  },
	cardButtons: {
		display: 'flex',
		justifyContent: 'space-between'
	}
}));

const ProjectCard = ({title, affiliation, type, repository, description, tech}) => {
	const classes = useStyles();

	const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return <Card>
    <CardContent>
			<Typography>{title} ({type})</Typography>
			<Typography variant='body2' className={classes.affiliation}>{affiliation}</Typography>
		</CardContent>
		<CardActions className={classes.cardButtons}>
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
		<IconButton
			className={clsx(classes.expand, {
				[classes.expandOpen]: expanded,
			})}
			onClick={handleExpandClick}
			aria-expanded={expanded}
			aria-label="show more"
		>
			<ExpandMoreIcon />
		</IconButton>
		</CardActions>
		<Collapse in={expanded} timeout="auto" unmountOnExit>
			<CardContent>
				<Typography>
					{description}
				</Typography>
				<Divider/>
				<Typography style={{fontWeight: 'bold'}}>
					Tech:
				</Typography>
				<Typography>
					{tech.join(", ")}
				</Typography>
			</CardContent>
		</Collapse>
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