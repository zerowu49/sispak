import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonMenuButton, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { useContext, useState } from 'react';
import Pilihan from '../components/Pilihan';
import { PernyataanContext } from '../data/pernyataan-context';

// TODO: Change to use context
const rule = [
  ['P1','P2'],
  ['P3','P4'],
  ['P1','P3'],
  ['P2','P4'],
]

const Result: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Result</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <p>Isi</p>
      </IonContent>
    </IonPage>
  )
}

export default Result;

