import React from 'react';
import { Link } from 'react-browser-router';
import { SITE } from '../../consts/site';
import { ROUTES } from '../../consts/routes';
import useStyles from '../../hooks/useStyles';
import { useSearchContext } from '../../context/SearchContext';
import SearchInput from '../input/SearchInput';
import NavLinks from './NavLinks';

export default function Header() {
	const classes = useStyles(styles);
	const {
		parameters: { query = '', ...parameters },
		setParameters,
		onSearch
	} = useSearchContext();

	const onChangeSearch = (query) => {
		setParameters({
			...parameters,
			query
		});
	};

	return (
		<header css={classes.root}>
			<Link to={ROUTES.search}>
				<div css={classes.brand}>
					<h1 css={classes.brandDesktop}>{SITE.name}</h1>
					<h1 css={classes.brandMobile}>💦</h1>
				</div>
			</Link>
			<SearchInput
				css={classes.search}
				onSubmit={onSearch}
				onChange={onChangeSearch}
				value={query}
			/>
			<NavLinks />
		</header>
	);
}

function styles(css, { color, dimensions, boxShadow }) {
	return {
		root: css`
			position: fixed;
			top: 0;
			z-index: 2;
			width: 100%;
			height: ${dimensions.header.height}px;
			background-color: ${color.darkGrey};
			display: flex;
			align-items: center;
			justify-content: space-between;
			box-shadow: ${boxShadow.medium};
		`,
		brand: css`
			margin: 0 16px;
		`,
		brandDesktop: css`
			color: ${color.primary};
			display: none;
			@media (min-width: 600px) {
				display: unset;
			}
		`,
		brandMobile: css`
			@media (min-width: 600px) {
				display: none;
			}
		`,
		search: css`
			flex-shrink: 2;
			max-width: 60%;
			@media (min-width: 500px) {
				max-width: unset;
			}
		`,
		pb: css`
			color: #fff;
			opacity: 0.2;
			transition: opacity 0.2s;
			margin: 0 8px;
			&:hover {
				opacity: 1;
			}
		`
	};
}
