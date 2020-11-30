import React from 'react';
import { Switch, Route } from 'react-browser-router';
import UploadPage from './views/upload/UploadPage';
import { ROUTES } from './consts/routes';

export default function Routes() {
	return (
		<>
			<Switch>
				<Route path={ROUTES.uploadVideo} component={UploadPage} />
			</Switch>
		</>
	);
}
