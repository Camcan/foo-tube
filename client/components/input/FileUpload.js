import React from 'react';
import { func, string, bool } from 'prop-types';

FileUpload.propTypes = {
	onSelectFile: func,
	name: string,
	required: bool
};

export default function FileUpload({ onFileSelect, name, required }) {
	const handleFileInput = ({ target: { files } }) => {
		onSelectFile(files[0]);
	};

	return <input type="file" onChange={handleFileInput} name={name} />;
}
