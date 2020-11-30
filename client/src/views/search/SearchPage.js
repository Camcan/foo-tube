import React, { useEffect } from 'react';
import useStyles from '../../hooks/useStyles';
import SearchResults from './SearchResults';
import Loader from '../../components/loader/Loader';
import { useSearchContext } from '../../context/SearchContext';

export default function SearchPage() {
	const classes = useStyles(styles);
	const { loading } = useSearchContext();

	return (
		<section css={classes.root}>
			{loading ? (
				<Loader css={classes.placeholder} message="Fetching videos" />
			) : (
				<SearchResults />
			)}
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
