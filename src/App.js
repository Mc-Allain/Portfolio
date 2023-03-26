import "./App.css";
import Home from "./pages/Home";
import ConstantProvider from "./providers/Constants";
import LanguageProvider from "./providers/Language";
import LightDarkThemeProvider from "./providers/LightDarkTheme";

const App = () => {
  return (
    <div className="App">
      <LightDarkThemeProvider>
        <LanguageProvider>
          <ConstantProvider>
            <Home />
          </ConstantProvider>
        </LanguageProvider>
      </LightDarkThemeProvider>
    </div>
  );
};

export default App;
