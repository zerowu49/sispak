import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonImg, IonAvatar } from '@ionic/react';
import './About.css'
import jo from '../../images/jo.jpg'
import dar from '../../images/dar.jpeg'
import felix from '../../images/felix.jpeg'

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
                  <img src={dar} alt="" />
                </div>
                <div className="about-content-texts">
                    <div className="about-content-title">
                        <h1>Alfonso Darren</h1>
                        <div className="about-content-desc">
                            Frontend Engineer
                        </div>
                    </div>
                    <div className="about-content-subtitle">
                      Melakukan enhancement antarmuka pengguna sistem pakar menggunakan pendekatan class-based styling.
                    </div>
                </div>
              </IonCol>
              <IonCol size="12" sizeMd="4" className="about-grid about-grid-middle">
                <div className="about-content-illustration">
                  <img src={jo} alt="" />
                </div>
                <div className="about-content-texts">
                    <div className="about-content-title">
                        <h1>Jonathan</h1>
                        <div className="about-content-desc">
                            BackEnd Engineer
                        </div>
                    </div>
                    <div className="about-content-subtitle">
                      Berkontribusi dalam pembuatan Inference Engine yang digunakan pada 
                      Sistem Pakar menggunakan metode Certainty Factor.
                    </div>
                </div>
              </IonCol>
              <IonCol size="12" sizeMd="4" className="about-grid">
                <div className="about-content-illustration">
                  <img src={felix} alt="" />
                </div>
                <div className="about-content-texts">
                    <div className="about-content-title">
                        <h1>Felix Laynardi</h1>
                        <div className="about-content-desc">
                            Frontend Engineer
                        </div>
                    </div>
                    <div className="about-content-subtitle">
                      Membuat design dan tampilan antarmuka dari aplikasi sistem pakar dengan framework Ionic ReactJS.
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
