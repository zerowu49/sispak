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
                    <h1>Selamat Datang di Sistem Pakar Kepribadian Diri</h1>
                  </div>
                  <div className="welcome-subtitle">
                    Pepatah mengatakan "Tidak ada yang lebih mengerti dirimu selain 
                    dirimu sendiri". Sudahkah Anda mengenal jati dirimu?
                    Untuk mengenal lebih jauh tentang diri Anda,
                    yuk cek kepribadian Anda sekarang !
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
