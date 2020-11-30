import React from 'react';
import { Link } from 'react-browser-router';
import useStyles from '../../hooks/useStyles';
import { ROUTES } from '../../consts/routes';

const links = [
	{
		name: 'Videos',
		path: ROUTES.search
	},
	{
		name: 'Upload',
		path: ROUTES.uploadVideo
	}
];

export default function NavLinks() {
	const classes = useStyles(styles);

	return (
		<div css={classes.root}>
			{links.map(({ name, path }, i) => (
				<Link key={i} to={path}>
					{name}
				</Link>
			))}
		</div>
	);
}

function styles(css) {
	return {
		root: css`
			display: flex;
		`
	};
}
