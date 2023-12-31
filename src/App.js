import { ColorModeContext,useMode } from "./theme";
import { CssBaseline,ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import SideBar from "./scenes/global/SideBar"
import { Dashboard } from "@mui/icons-material";
import { Routes,Route } from "react-router-dom";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard/>} />
            </Routes>
          </main>
      </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
    
  );
}

export default App;
