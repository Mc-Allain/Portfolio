import './App.css';
import PageView from './components/PageView';
import AppContainer from './components/shared/AppContainer';
import AppBody from './components/shared/AppContainer/AppBody';
import AppHeader from './components/shared/AppContainer/AppHeader';
import LanguageProvider from './providers/Language';
import LightDarkThemeProvider from './providers/LightDarkTheme';

function App() {
	return (
		<div className="App">
			<LightDarkThemeProvider>
				<LanguageProvider>
					<AppContainer>
						<AppHeader />
						<AppBody>
							<PageView />
						</AppBody>
					</AppContainer>
				</LanguageProvider>
			</LightDarkThemeProvider>
		</div>
	);
}

export default App;
