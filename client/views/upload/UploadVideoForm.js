import React from 'react';
import useStyles from '../../hooks/useStyles';

export default function UploadVideoForm() {
	const classes = useStyles(styles);

	return (
		<section css={classes.root}>
			Upload Video Form
		</section>
	);
}

function styles(css, { color, dimensions }) {
	return {
		root: css`
			padding: 16px;
			border: ${color.primary} 1px solid;
		`
	};
}
