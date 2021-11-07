import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css'

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="welcome-container">
          <IonGrid>
            <IonRow>
              <IonCol size="12" sizeMd="6" className="welcome-grid">
                <div className="welcome-section">
                  <div className="welcome-title">
                    <h1>Selamat Datang</h1>
                  </div>
                  <div className="welcome-subtitle">
                    Quisque quis nisl vel nibh lobortis maximus sit amet eget tortor. Aenean ex neque, pellentesque id dui non, cursus semper lectus. Curabitur faucibus, erat eget auctor accumsan, dolor dolor blandit urna, ac vulputate magna nulla sit amet nisi.
                  </div>
                  <IonButton href="/questions" className="welcome-check-button">
                    Cek Kepribadian Sekarang
                  </IonButton>
                </div>
              </IonCol>
              <IonCol size="12" sizeMd="6" className="welcome-illustration-grid">
                <div className="welcome-illustration">
                  <img src="assets/images/home-illustration.png" alt="" />
                </div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
