import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';

const Check: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton /> 
          </IonButtons>
          <IonTitle>Cek Kepribadian Diri</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid className="ion-text-center ">
          <IonRow>
            <IonCol>
              <img src="https://bangness.net/wp-content/uploads/2019/01/Social-Learning1.png"/>
              <h3>Selamat datang di Sistem Pakar Kepribadian Diri</h3>
              <IonButton fill="solid" routerLink="/">Lanjut</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Check;
