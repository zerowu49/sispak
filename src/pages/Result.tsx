import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useContext } from 'react';
import { JawabanContext } from '../data/jawaban-context';
import { RuleContext } from '../data/rule-context';

const Result: React.FC = () => {
  const jwbData = useContext(JawabanContext)
  const ruleData = useContext(RuleContext)

  const hitungJawaban = () => {
    
  }

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

