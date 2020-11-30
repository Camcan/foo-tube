import React, { useRef } from 'react';
import useStyles from '../../hooks/useStyles';
import { ENDPOINTS } from '../../consts/api';
import FileUpload from '../../components/input/FileUpload';

export default function UploadVideoForm() {
	const classes = useStyles(styles);
	const formRef = useRef();

	const onSubmit = (e) => {
		e.preventDefault();
		const data = new FormData(formRef.current);
		fetch(ENDPOINTS.uploadVideo, { method: 'POST', body: data })
			.then((res) => res.json())
			.then((data) => console.log(data));
	};

	const onFileSelect = (file) => console.log('file', file);

	return (
		<section css={classes.root}>
			Upload Video Form
			<form ref={formRef} onSubmit={onSubmit}>
				<label>
					<p>Title:</p>
					<input type="text" name="title" required />
				</label>
				<label>
					<p>Video file:</p>
					<FileUpload onFileSelect={onFileSelect} name="video_file" required />
				</label>
				<button type="submit">Upload</button>
			</form>
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
