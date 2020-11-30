import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-browser-router';
import { ThemeProvider } from '@emotion/react';
import { SearchProvider } from './context/SearchContext';
import { THEME } from './consts/theme';
import { ENDPOINTS } from './consts/api';
import Routes from './Routes';
import Layout from './components/page/Layout';

function App() {
	return (
		<BrowserRouter>
			<ThemeProvider theme={THEME}>
				<SearchProvider path={ENDPOINTS.videos}>
					<Layout>
						<Routes />
					</Layout>
				</SearchProvider>
			</ThemeProvider>
		</BrowserRouter>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));
