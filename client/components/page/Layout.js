import React from 'react';
import { node } from 'prop-types';
import Header from './Header';
import useStyles from '../../hooks/useStyles';

Layout.propTypes = {
	children: node
};

export default function Layout({ children }) {
	const classes = useStyles(styles);

	return (
		<>
			<Header />
			<main css={classes.main}>{children}</main>
		</>
	);
}

function styles(css, { color, dimensions }) {
	return {
		main: css`
			background-color: ${color.lightGrey};
			padding-top: ${dimensions.header.height}px;
			min-height: calc(100% - ${dimensions.header.height}px);
		`
	};
}
