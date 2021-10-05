import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';

const Knowledge: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Knowledge</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <p>Isi</p>
      </IonContent>
    </IonPage>
  );
};

export default Knowledge;
