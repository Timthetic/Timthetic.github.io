/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { MuiThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Typography } from '@material-ui/core';

import Header from "./header"
import "./layout.css"

const overwrittenTheme = responsiveFontSizes(createMuiTheme({
	palette: {
		primary: {
			main: '#40A710',
			light: '#70E020',
			dark: '#202000',
			contrastText: '#fff'
		},
		secondary: {
			main: '#D0D010',
			light: '#F0F010',
			dark: '#707010',
			contrastText: '#fff'
		},
		grey: {
			main: 'lightgray',
			light: '#EAEAEA',
			dark: 'gray',
			contrastText: '#fff'
		}
	}
}))

const useStyles = makeStyles(theme => ({
	appBarSpacer: theme.mixins.toolbar
}))

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
	let classes = useStyles()
  return (
    <MuiThemeProvider theme={overwrittenTheme}>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
			<div className={classes.appBarSpacer}></div>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
						textAlign: `center`
          }}
        >
          <Typography>© {new Date().getFullYear()}, Timothy Rediehs</Typography>
        </footer>
      </div>
		</MuiThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
