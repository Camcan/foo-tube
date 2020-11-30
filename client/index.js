import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-browser-router';
import { ThemeProvider } from '@emotion/react';
import { THEME } from './consts/theme';
import Routes from './Routes';
import Layout from './components/page/Layout';

function App() {
	return (
		<BrowserRouter>
			<ThemeProvider theme={THEME}>
				<Layout>
					<Routes />
				</Layout>
			</ThemeProvider>
		</BrowserRouter>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));
