import React, { createContext, useContext, useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { string, node } from 'prop-types';
import { ROUTES } from '../consts/routes';
import useSearch from '../hooks/useSearch';

const SearchContext = createContext();

SearchProvider.propTypes = {
	children: node,
	path: string
};

export function SearchProvider({ path, children }) {
	const location = useLocation();
	const history = useHistory();
	const [parameters, setParameters] = useState({ count: 20 });
	const [hasFetched, setHasFetched] = useState(false);
	const [{ data, loading }, performSearch] = useSearch(path);

	const onSearch = (params) => {
		if (params) {
			setParameters(params);
		}
		const urlParams = new URLSearchParams(params || parameters);
		history.push(`${ROUTES.search}?${urlParams}`);
		performSearch(urlParams);
	};

	useEffect(() => {
		if (!hasFetched) {
			const params = new URLSearchParams(location.search);
			const paramsObj = {};
			for (const [key, value] of params.entries()) {
				paramsObj[key] = value;
			}
			console.log('useEffect, performing search...', path);
			setParameters(paramsObj);
			performSearch(params);
			setHasFetched(true);
		}
	}, [location.search, hasFetched]);

	return (
		<SearchContext.Provider
			value={{ data, loading, onSearch, parameters, setParameters, hasFetched }}
		>
			{children}
		</SearchContext.Provider>
	);
}

export const useSearchContext = () => useContext(SearchContext);
