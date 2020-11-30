import React from 'react';
import { Link } from 'react-browser-router';
import useStyles from '../../hooks/useStyles';
import { ROUTES } from '../../consts/routes';

const links = [
	{
		name: 'Upload',
		path: ROUTES.uploadVideo
	}
];

export default function NavLinks() {
	const classes = useStyles(styles);

	return (
		<nav css={classes.root}>
			{links.map(({ name, path }, i) => (
				<Link key={i} to={path} css={classes.link}>
					{name}
				</Link>
			))}
		</nav>
	);
}

function styles(css, { color }) {
	return {
		root: css`
			display: flex;
			padding: 0px 8px;
		`,
		link: css`
			color: ${color.white};
			@media (min-width: 500px) {
				opacity: 0.5;
				transition: opacity 0.3s linear;
				&:hover,
				&:focus {
					opacity: 1;
				}
			} ;
		`
	};
}
