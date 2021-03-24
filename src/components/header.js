import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Typography, AppBar, Toolbar } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	header: {
		background: theme.palette.primary.main,
		margin: `0 auto`,
		padding: `1rem 1rem`,
		marginBottom: `8px`
	},
	toolbar: {
		display: 'flex',
		justifyContent: 'space-between'
	},
	navMenu: {
		display: 'flex',
		justifyContent: 'space-between'
	},
	menuOption: {
		paddingLeft: '8px',
		paddingRight: '8px',
		borderRadius: '8px',
		'&:hover': {
			backgroundColor: theme.palette.primary.light,
		}
	},
}));


const Header = ({ siteTitle }) => {
	const classes = useStyles()
  return <div
    className={classes.header}
  >
		<AppBar>
			<Toolbar className={classes.toolbar}>
				<div>
					<Typography variant='h5' component='h1' style={{ margin: 0 }}>
						<Link
							to="/"
							style={{
								color: `white`,
								textDecoration: `none`,
							}}
						>
							{siteTitle}
						</Link>
					</Typography>
				</div>
				<div className={classes.navMenu}>
					<Typography variant='h6' component='h2' className={classes.menuOption}>
						<Link
							to="#bio"
							style={{
								color: `white`,
								textDecoration: `none`,
							}}
						>
							Bio
						</Link>
					</Typography>
					<Typography variant='h6' component='h2' className={classes.menuOption}>
						<Link
							to="#projects"
							style={{
								color: `white`,
								textDecoration: `none`,
							}}
						>
							Projects
						</Link>
					</Typography>
					<Typography variant='h6' component='h2' className={classes.menuOption}>
						<Link
							to="#experience"
							style={{
								color: `white`,
								textDecoration: `none`,
							}}
						>
							Experience
						</Link>
					</Typography>
				</div>
			</Toolbar>
		</AppBar>
  </div>
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
