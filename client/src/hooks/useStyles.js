import { useMemo } from 'react';
import { useTheme, css } from '@emotion/react';

export default function useStyles(styles) {
	const theme = useTheme();
	const classes = useMemo(() => styles(css, theme), [styles, theme]);

	return classes;
}
