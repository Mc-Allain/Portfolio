import "./App.css";
import Home from "./pages/Home";
import LanguageProvider from "./providers/Language";
import LightDarkThemeProvider from "./providers/LightDarkTheme";

const App = () => {

  return (
    <div className="App">
      <LightDarkThemeProvider>
        <LanguageProvider>
          <Home />
        </LanguageProvider>
      </LightDarkThemeProvider>
    </div>
  );
};

export default App;
