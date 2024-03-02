//App.js

import React, { useState } from "react";
import SmallComponent from "./pages/SmallComponent";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

function App() {
  const [toggleDark, settoggleDark] = useState(false);
  const myTheme = createMuiTheme({
    // Theme settings
    palette: {
      type: toggleDark ? "dark" : "light",
    },
  });

  return (
    // Wrapping code in ThemeProvider
    <ThemeProvider theme={myTheme}>
      <SmallComponent toggleDark={toggleDark} settoggleDark={settoggleDark} />
    </ThemeProvider>
  );
}
export default App;
