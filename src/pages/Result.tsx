import { IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useContext, useState } from 'react';
import { JawabanContext } from '../data/jawaban-context';
import { RuleContext } from '../data/rule-context';

const Result: React.FC = () => {
  const jwbData = useContext(JawabanContext)
  const ruleData = useContext(RuleContext)

  console.info(jwbData.confidenceSifat)

  let totalConfidence = 0
  for (let i = 0; i < jwbData.confidenceSifat.length; i++) {
    const element = jwbData.confidenceSifat[i];
    totalConfidence += element.confidence
  }
  console.info(totalConfidence)

  let persenData : number[] = []
  for (let i = 0; i < jwbData.confidenceSifat.length; i++) {
    const element = jwbData.confidenceSifat[i];
    const persen = element.confidence / totalConfidence
    console.log(`Nilai skrg : ${persen}`)
    persenData.concat(persen)
    console.info(persenData)
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
        <IonGrid>
          <IonRow>
            <IonCol>
              {totalConfidence}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default Result;

