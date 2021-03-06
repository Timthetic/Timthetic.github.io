import * as React from "react"
import PropTypes from "prop-types"
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Box, Typography } from '@material-ui/core';

// import TimImage from "../../images/tim_rediehs_and_jamie.jpg"
import TimImage from "../../images/tim_rediehs_headshot.png"
import { bio } from "../../data/bio"

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
		marginRight: '16px',
		marginBottom: '16px'
	},
	TimImage: {
		width: '293px',
		height: '293px',
		borderRadius: '4px',
		objectFit: 'contain',
		marginBottom: 'auto',
		[theme.breakpoints.down('xs')]:{
			width: '90%'
		}
	}
}));


const Bio = () => {
	const classes = useStyles()
  return <>
		<div id="bio" className='anchor'/>
		<Typography variant='h4' component='h2'>
			Bio
		</Typography>
		<Box className={classes.bioBox}>
      <Typography className={classes.bioText} varient='p'>
			 {bio}
      </Typography>
			<img className={classes.TimImage} src={TimImage} width='30%' alt="Head shot of Tim Rediehs" />
		</Box>
	</>
}

Bio.propTypes = {
  siteTitle: PropTypes.string,
}

Bio.defaultProps = {
  siteTitle: ``,
}

export default Bio