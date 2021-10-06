import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';

const Dashboard: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid className="ion-text-center ">
          <IonRow>
            <IonCol size="2"></IonCol>
            <IonCol>
              <img src="https://bangness.net/wp-content/uploads/2019/01/Social-Learning1.png"/>
              <h3>Selamat datang di Sistem Pakar Kepribadian Diri</h3>
              <IonButton fill="solid" routerLink="/page/Check">Cek Kepribadian Diri</IonButton>
            </IonCol>
            <IonCol size="2"></IonCol>
            <IonCol className="ion-align-self-center">
              <img src="https://www.disinfo.eu/wp-content/uploads/2019/12/team.png"/>
              <h3>Tentang Kami</h3>
              <IonButton fill="solid" routerLink="/page/About">Cek About</IonButton>
            </IonCol>
            <IonCol size="2"></IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
