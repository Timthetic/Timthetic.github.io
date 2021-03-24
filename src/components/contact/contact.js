import * as React from "react"
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Box, Divider, IconButton, Link, Typography } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles(theme => ({
	sectionTitle: {
		marginTop: '16px',
		marginBottom: '8px',
		textAlign: 'center'
	},
	divider: {
		marginTop: '16px',
		marginBottom: '8px'
	}
}));


const Contact = () => {
	const classes = useStyles()
  return <>
		<Divider className={classes.divider}/>
		<div id="contact" className='anchor'/>
		<Typography className={classes.sectionTitle} variant='h4' component='h2'>
			Contact Me
		</Typography>
		<Box display='flex' justifyContent='center'>
			<Link href="https://www.facebook.com/tim.rediehs" target="_blank" rel="noopener noreferrer">
				<IconButton>
					<FacebookIcon/>
				</IconButton>
			</Link>
			<Link href="https://www.linkedin.com/in/timothy-rediehs/" target="_blank" rel="noopener noreferrer">
				<IconButton>
					<LinkedInIcon/>
				</IconButton>
			</Link>	
			<Link href="https://github.com/Timthetic" target="_blank" rel="noopener noreferrer">
				<IconButton>
					<GitHubIcon/>
				</IconButton>
			</Link>	
			<Link href="mailto:timrediehs@gmail.com">
				<IconButton>
					<EmailIcon/>
				</IconButton>
			</Link>	
		</Box>
	</>
}

export default Contact