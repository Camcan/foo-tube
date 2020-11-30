import React from 'react';
import useStyles from '../../hooks/useStyles';
import { useSearchContext } from '../../context/SearchContext';
import ItemCard from './ItemCard';

export default function SearchResults() {
	const classes = useStyles(styles);
	const {
		data: { results = [] }
	} = useSearchContext();

	return (
		<>
			<section css={classes.root}>
				{results.length ? (
					<>
						{results.map((item, n) => (
							<ItemCard key={n} item={item} />
						))}
					</>
				) : (
					<p>{`We couldn't find any videos :(`}</p>
				)}
			</section>
		</>
	);
}

function styles(css) {
	return {
		root: css`
			height: 100%;
			padding: 16px 0;
		`
	};
}
