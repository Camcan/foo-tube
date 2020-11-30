import React, { useEffect } from 'react';
import useStyles from '../../hooks/useStyles';
import UploadVideoForm from './UploadVideoForm';

export default function SearchPage() {
	const classes = useStyles(styles);

	return (
		<section css={classes.root}>
			<h1>Upload video</h1>
			<UploadVideoForm />
		</section>
	);
}

function styles(css, { color, dimensions }) {
	return {
		root: css`
			margin: 0 auto;
			min-height: calc(100vh - ${dimensions.header.height}px);
			max-width: 1200px;
			background-color: ${color.grey};
		`
	};
}
