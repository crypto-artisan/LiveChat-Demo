import React from "react";

import AllRoutes from "./routes/Routes";

import { configureFakeBackend } from "./helpers";


// For Default import Default.scss
import './assets/scss/Default.scss';

// For Saas import Saas.scss
// import './assets/scss/Saas.scss';

// For Modern demo import Modern.scss
// import './assets/scss/Modern.scss';

// For Creative demo import Creative.scss
// import "./assets/scss/Creative.scss";

// For Purple demo import Purple.scss
// import './assets/scss/Purple.scss';

// For Material demo import Material.scss
// import './assets/scss/Material.scss';


// Other
import './assets/scss/Landing.scss';
import "./assets/scss/Icons.scss";

// configure fake backend
configureFakeBackend();

const App = () => {
  return (
    <>
      <React.Fragment>
        <AllRoutes />
      </React.Fragment>
    </>
  );
};

export default App;
