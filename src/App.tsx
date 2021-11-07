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
import Home from './pages/Home/Home';
import Readme from './pages/Readme/Readme';
import About from './pages/About/About';
import PernyataanContextProvider from './data/PernyataanContextProvider';
import JawabanContextProvider from './data/JawabanContextProvider';
import Result from './pages/Result/Result';
import RuleContextProvider from './data/RuleContextProvider';
import ExpertSystem from './pages/ExpertSystem/ExpertSystem';

const App: React.FC = () => {
  return (
    <PernyataanContextProvider>
      <JawabanContextProvider>
        <RuleContextProvider>
          <IonApp>
            <IonReactRouter>
              {/* <IonSplitPane contentId="main"> */}
                <Menu />
                <IonRouterOutlet id="main">
                  <Redirect exact from="/" to="/home" />
                  <Route exact path="/home" component={Home}/>
                  <Route exact path="/questions" component={ExpertSystem}/>
                  <Route exact path="/aboutus" component={About}/>
                  <Route exact path="/readme" component={Readme}/>
                  <Route exact path="/result" component={Result}/>
                </IonRouterOutlet>
              {/* </IonSplitPane> */}
            </IonReactRouter>
          </IonApp>
        </RuleContextProvider>
      </JawabanContextProvider>
    </PernyataanContextProvider>
    
  );
};

export default App;
