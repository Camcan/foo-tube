import React from 'react';
import { string } from 'prop-types';
import useStyles from '../../hooks/useStyles';
import AnimatedElipsis from './animated-elipsis.svg';

Loader.propTypes = {
	message: string,
	className: string
};

export default function Loader({ message, className }) {
	const classes = useStyles(styles);
	return (
		<article css={classes.root} className={className}>
			<p css={classes.message}>{message}</p>
			<AnimatedElipsis css={classes.elipsis} height={30} width={50} />
		</article>
	);
}

function styles(css, { color }) {
	return {
		root: css`
			display: flex;
			flex-flow: row nowrap;
			justify-content: center;
			align-items: center;
			color: ${color.primary};
			height: 100%;
		`,
		message: css`
			color: ${color.primary};
		`,
		elipsis: css`
			padding-top: 8px;
		`
	};
}
