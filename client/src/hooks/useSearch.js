import { useState } from 'react';

export default function useSearch(path) {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState([]);

	const performSearch = (urlParams) => {
		setLoading(true);
		fetch(`${path}?${urlParams}`)
			.then((res) => res.json())
			.then((data) => {
				setData(data);
				setLoading(false);
			})
			.catch(() => setLoading(false));
	};

	return [{ loading, data }, performSearch];
}
