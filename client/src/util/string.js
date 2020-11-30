/**
 * Substitutes the provided key/value pairs into the given path.
 */
export function interpolatePath(path, values) {
	return Object.entries(values).reduce((acc, [key, value]) => {
		return acc.replace(`:${key}`, value);
	}, path);
}
