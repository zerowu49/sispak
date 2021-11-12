import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol } from '@ionic/react';
import './Readme.css'
import terms from '../../images/readme-illustration-1.png'
import cons from '../../images/readme-illustration-2.png'

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
                  <img src={terms} alt="" />
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
                  <img src={cons} alt="" />
                </div>
                <div className="readme-content-texts">
                  <div className="readme-content-title">
                    <h1>Conditions</h1>
                  </div>
                  <div className="readme-content-subtitle">
                    Pengetahuan sistem pakar (Knowledge Base) didapat berdasarkan 
                    data yang telah dihimpun oleh &nbsp;
                    <a href="https://openpsychometrics.org/tests/O4TS/development/">
                      OSPP Four Temperaments Scale
                    </a>.
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
