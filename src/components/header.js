import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	header: {
		background: theme.palette.primary.main,
	},
	title: {
		margin: `0 auto`,
		padding: `1rem 1rem`,
		maxWidth: `1200px`,
		marginBottom: `8px`
	}
}));


const Header = ({ siteTitle }) => {
	const classes = useStyles()
  return <header
    className={classes.header}
  >
    <div className={classes.title}>
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
  </header>
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
