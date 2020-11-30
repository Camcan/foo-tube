import React, { useRef, useState } from 'react';
import useStyles from '../../hooks/useStyles';
import { ENDPOINTS } from '../../consts/api';
import FileUpload from '../../components/input/FileUpload';
import Loader from '../../components/loader/Loader';

export default function UploadVideoForm() {
	const classes = useStyles(styles);
	const formRef = useRef();
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);

	const onSubmit = (e) => {
		setLoading(true);
		e.preventDefault();
		const data = new FormData(formRef.current);
		fetch(ENDPOINTS.uploadVideo, { method: 'POST', body: data })
			.then((res) => res.json())
			.then(() => {
				setSuccess(true);
				setLoading(false);
			})
			.catch(() => {
				setLoading(false);
			});
	};

	return (
		<section css={classes.root}>
			Upload Video Form
			<form
				ref={formRef}
				onSubmit={onSubmit}
				css={loading && classes.formLoading}
			>
				<label>
					<p>Title:</p>
					<input type="text" name="title" required disabled={loading} />
				</label>
				<label>
					<p>Video file:</p>
					<FileUpload name="video_file" required disabled={loading} />
				</label>
				<button type="submit" disabled={loading}>
					Upload
				</button>
				{loading && <Loader message="Uploading video" />}
				{success && <p>Upload successful!</p>}
			</form>
		</section>
	);
}

function styles(css, { color }) {
	return {
		root: css`
			padding: 16px;
			border: ${color.primary} 1px solid;
		`,
		formLoading: css`
			cursor: wait;
		`
	};
}
