import "./App.css";
import LanguageProvider from "./providers/Language";
import LightDarkThemeProvider from "./providers/LightDarkTheme";
import AppHeader from "./components/AppContainer/AppHeader";
import AppBody from "./components/AppContainer/AppBody";
import Home from "./pages/Home";
import AppContainer from "./components/AppContainer";

const App = () => {
  return (
    <div className="App">
      <LightDarkThemeProvider>
        <LanguageProvider>
          <AppContainer>
            <AppHeader />
            <AppBody>
              <Home />
            </AppBody>
          </AppContainer>
        </LanguageProvider>
      </LightDarkThemeProvider>
    </div>
  );
};

export default App;
