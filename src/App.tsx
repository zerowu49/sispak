import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Knowledge from './pages/Knowledge';
import Check from './pages/Check';
import PernyataanContextProvider from './data/PernyataanContextProvider';
import JawabanContextProvider from './data/JawabanContextProvider';
import Result from './pages/Result';

const App: React.FC = () => {
  return (
    <PernyataanContextProvider>
      <JawabanContextProvider>
        <IonApp>
          <IonReactRouter>
            {/* <IonSplitPane contentId="main"> */}
              <Menu />
              <IonRouterOutlet id="main">
                <Redirect exact from="/" to="/page/Dashboard" />
                <Route exact path="/page/Dashboard" component={Dashboard}/>
                <Route exact path="/page/Check" component={Check}/>
                <Route exact path="/page/About" component={About}/>
                <Route exact path="/page/Knowledge" component={Knowledge}/>
                <Route exact path="/page/Result" component={Result}/>
              </IonRouterOutlet>
            {/* </IonSplitPane> */}
          </IonReactRouter>
        </IonApp>
      </JawabanContextProvider>
    </PernyataanContextProvider>
    
  );
};

export default App;
