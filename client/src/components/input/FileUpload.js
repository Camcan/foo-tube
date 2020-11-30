import React from 'react';
import { func, string, bool } from 'prop-types';

FileUpload.propTypes = {
	onFileSelect: func,
	name: string,
	required: bool,
	disabled: bool
};

export default function FileUpload({ onFileSelect, name, required, disabled }) {
	const handleFileInput = ({ target: { files } }) => {
		if (onFileSelect) onFileSelect(files[0]);
	};

	return (
		<input
			type="file"
			onChange={handleFileInput}
			name={name}
			required={required}
			disabled={disabled}
		/>
	);
}
