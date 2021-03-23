import * as React from "react"
import PropTypes from "prop-types"
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Box, Typography } from '@material-ui/core';

import TimImage from "../images/tim_rediehs_and_jamie.jpg"

const useStyles = makeStyles(theme => ({
	bioBox: {
		display: 'flex',
		justifyContent: 'space-between',
		[theme.breakpoints.down('xs')]:{
			flexDirection: 'column',
			alignItems: 'center'
		}
	},
	bioText: {
		marginRight: '16px'
	},
	TimImage: {
		width: '30%',
		[theme.breakpoints.down('xs')]:{
			width: '90%'
		}
	}
}));


const Bio = () => {
	const classes = useStyles()
  return <div>
		<Typography variant='h5' component='h2'>
			Bio
		</Typography>
		<Box className={classes.bioBox}>
      <Typography className={classes.bioText} varient='p'>
			I’m a senior at UCLA studying Computer Science. I think the opportunity to learn is one of the most valuable things in a career. Some of my skills are programming in C++, JavaSript, Go, Lisp, Ruby on Rails, and Swift. I also help others learn software development as a part of UCLA ACM Hack where we teach a variety of programming skills. Although I focus on building software, teaching is something that I have always loved. 
      </Typography>
			<img className={classes.TimImage} src={TimImage} width='30%' alt="Tim Rediehs in a suit with bubble tea" />
		</Box>
	</div>
}

Bio.propTypes = {
  siteTitle: PropTypes.string,
}

Bio.defaultProps = {
  siteTitle: ``,
}

export default Bio