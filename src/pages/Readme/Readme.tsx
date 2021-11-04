import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol } from '@ionic/react';
import './Readme.css'

const Readme: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Read Me</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="readme-container">
          <IonGrid>
            <IonRow>
              <IonCol size="12" sizeMd="6" className="readme-grid">
                <div className="readme-content-illustration">
                  <img src="assets/images/readme-illustration-1.png" alt="" />
                </div>
                <div className="readme-content-texts">
                  <div className="readme-content-title">
                    <h1>Terms</h1>
                  </div>
                  <div className="readme-content-subtitle">
                    Quisque quis nisl vel nibh lobortis maximus sit amet eget tortor. Aenean ex neque, pellentesque id dui non, cursus semper lectus. Curabitur faucibus, erat eget auctor accumsan, dolor dolor blandit urna, ac vulputate magna nulla sit amet nisi.
                  </div>
                </div>
              </IonCol>
              <IonCol size="12" sizeMd="6" className="readme-grid">
                <div className="readme-content-illustration">
                  <img src="assets/images/readme-illustration-2.png" alt="" />
                </div>
                <div className="readme-content-texts">
                  <div className="readme-content-title">
                    <h1>Conditions</h1>
                  </div>
                  <div className="readme-content-subtitle">
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

export default Readme;
