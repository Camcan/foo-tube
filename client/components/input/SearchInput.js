import React from 'react';
import { func, string } from 'prop-types';
import useStyles from '../../hooks/useStyles';
import { KEYS } from '../../consts/keys';

SearchInput.propTypes = {
	onSubmit: func.isRequired,
	onChange: func.isRequired,
	value: string
};

export default function SearchInput({
	onSubmit,
	onChange: onChangeProp,
	value
}) {
	const classes = useStyles(styles);

	const onChange = ({ target: { value } }) => onChangeProp(value);

	const onKeyDown = ({ key }) => {
		if (key === KEYS.enter) {
			onSubmit();
		}
	};

	return (
		<input
			css={classes.input}
			type="search"
			placeholder="Search images"
			value={value}
			onChange={onChange}
			onKeyDown={onKeyDown}
		/>
	);
}

function styles(css) {
	return {
		input: css`
			height: 36px;
			max-width: 300px;
			background-color: rgba(255, 255, 255, 0.8);
			border-radius: 16px;
			padding: 4px 16px;
			align-self: center;
		`
	};
}
