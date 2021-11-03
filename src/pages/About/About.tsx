import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol } from '@ionic/react';
import './About.css'

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>About Us</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="about-container">
          <IonGrid>
            <IonRow>
              <IonCol size="12" sizeMd="4" className="about-grid">
                <div className="about-content-illustration">
                  <img src="assets/images/readme-illustration-1.png" alt="" />
                </div>
                <div className="about-content-texts">
                    <div className="about-content-title">
                        <h1>Alfonso Darren</h1>
                        <div className="about-content-desc">
                            Frontend Engineer
                        </div>
                    </div>
                    <div className="about-content-subtitle">
                    Quisque quis nisl vel nibh lobortis maximus sit amet eget tortor. Aenean ex neque, pellentesque id dui non, cursus semper lectus. Curabitur faucibus, erat eget auctor accumsan, dolor dolor blandit urna, ac vulputate magna nulla sit amet nisi.
                    </div>
                </div>
              </IonCol>
              <IonCol size="12" sizeMd="4" className="about-grid about-grid-middle">
                <div className="about-content-illustration">
                  <img src="assets/images/readme-illustration-1.png" alt="" />
                </div>
                <div className="about-content-texts">
                    <div className="about-content-title">
                        <h1>Jonathan</h1>
                        <div className="about-content-desc">
                            Frontend Engineer
                        </div>
                    </div>
                    <div className="about-content-subtitle">
                    Quisque quis nisl vel nibh lobortis maximus sit amet eget tortor. Aenean ex neque, pellentesque id dui non, cursus semper lectus. Curabitur faucibus, erat eget auctor accumsan, dolor dolor blandit urna, ac vulputate magna nulla sit amet nisi.
                    </div>
                </div>
              </IonCol>
              <IonCol size="12" sizeMd="4" className="about-grid">
                <div className="about-content-illustration">
                  <img src="assets/images/readme-illustration-1.png" alt="" />
                </div>
                <div className="about-content-texts">
                    <div className="about-content-title">
                        <h1>Felix Laynardi</h1>
                        <div className="about-content-desc">
                            Frontend Engineer
                        </div>
                    </div>
                    <div className="about-content-subtitle">
                    Quisque quis nisl vel nibh lobortis maximus sit amet eget tortor. Aenean ex neque, pellentesque id dui non, cursus semper lectus. Curabitur faucibus, erat eget auctor accumsan, dolor dolor blandit urna, ac vulputate magna nulla sit amet nisi.
                    </div>
                </div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default About;
