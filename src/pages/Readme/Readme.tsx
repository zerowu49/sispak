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
                    Penggunaan sistem pakar sebagai deteksi kepribadian seseorang
                    yang mengandalkan seluruhnya terhadap sistem ini tidak disarankan.
                    Sistem pakar ini bertujuan untuk mensimulasikan dan membantu
                    diagnosis oleh pakar psikolog, bukan untuk menggantikan 
                    peran mereka seluruhnya.
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
                    Pengetahuan sistem pakar (Knowledge Base) didapat berdasarkan 
                    data yang telah dihimpun oleh OSPP Four Temperaments Scale 
                    <a href="https://openpsychometrics.org/tests/O4TS/development/">
                    (https://openpsychometrics.org/tests/O4TS/development/).
                    </a>
                    <br/>
                    Dalam data tersebut, kepribadian manusia dikategorikan 
                    dalam 4 kategori, yakni sanguine, choleric, melancholic,
                    dan phlegmatic. Algoritma yang digunakan untuk menghitung
                    persentase keyakinan adalah Algoritma Certainty Factor.
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
