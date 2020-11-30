import React, { useEffect, useState, useRef } from 'react';
import { arrayOf, string } from 'prop-types';
import useStyles from '../../hooks/useStyles';

Tile.propTypes = {
	frames: arrayOf(string).isRequired,
	className: string
};

export default function Tile({ frames, className }) {
	const classes = useStyles(styles);
	const [shouldLoadFrames, setShouldLoadFrames] = useState(false);
	const [frameIndex, setFrameIndex] = useState(0);
	const [preview, setPreview] = useState(false);
	const frameChanger = useRef();

	// Middle frame as initial tile image
	const tileUrl = frames[Math.floor(frames.length / 2)];

	useEffect(() => {
		if (preview) {
			setShouldLoadFrames(true);
		}
	}, [preview]);

	useEffect(() => () => clearInterval(frameChanger.current), []);

	const startPreview = () => {
		frameChanger.current = setInterval(() => {
			const newIndex = frameIndex + 1;
			setFrameIndex(newIndex === frames.length ? 0 : newIndex);
		}, 500);
		setPreview(true);
	};

	const stopPreview = () => {
		clearInterval(frameChanger.current);
		setPreview(false);
	};

	return (
		<div
			css={classes.root}
			className={className}
			onMouseOver={startPreview}
			onMouseOut={stopPreview}
		>
			<img css={classes.img} src={tileUrl} />
			{shouldLoadFrames &&
				frames.map((frame, i) => {
					return (
						<img
							key={i}
							src={frame}
							css={[
								classes.img,
								classes.frame,
								preview && frameIndex === i && classes.activeFrame
							]}
						/>
					);
				})}
		</div>
	);
}

function styles(css) {
	return {
		root: css`
			overflow: hidden;
			display: flex;
			justify-content: center;
			position: relative;
		`,
		img: css`
			height: 100%;
		`,
		frame: css`
			position: absolute;
			z-index: 1;
			display: none;
		`,
		activeFrame: css`
			display: block;
			z-index: 2;
			position: absolute;
		`
	};
}
