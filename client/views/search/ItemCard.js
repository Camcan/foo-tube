import React from 'react';
import { shape, string, arrayOf } from 'prop-types';
import useStyles from '../../hooks/useStyles';
import { interpolatePath } from '../../util/string';
import { ROUTES } from '../../consts/routes';
import { Link } from 'react-browser-router';
import Tile from './Tile';

ItemCard.propTypes = {
	item: shape({
		frames: arrayOf(string),
		title: string,
		added: string,
		id: string
	}).isRequired
};

export default function ItemCard({ item: { id, title, added, frames } }) {
	const classes = useStyles(styles);

	return (
		<Link to={interpolatePath(ROUTES.video, { videoId: id })}>
			<article css={classes.root}>
				<Tile css={classes.tile} frames={frames} />
				<div css={classes.info}>
					<p>{title}</p>
					<p>{added}</p>
				</div>
			</article>
		</Link>
	);
}

function styles(css, { color }) {
	return {
		root: css`
			margin-bottom: 8px;
			overflow: hidden;
			width: 100%;
			display: flex;
			border-radius: 4px;
			background-color: ${color.darkGrey};
			position: relative;
		`,
		tile: css`
			height: 100px;
			width: 130px;
			border-radius: 4px;
			background-color: ${color.lightGrey};
		`,
		info: css`
			color: white;
			padding: 8px;
		`
	};
}
