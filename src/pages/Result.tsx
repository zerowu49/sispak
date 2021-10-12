import { IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonList, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useContext, useState } from 'react';
import { ConfidenceSifat, JawabanContext } from '../data/jawaban-context';
import { RuleContext } from '../data/rule-context';

const Result: React.FC = () => {
  const jwbData = useContext(JawabanContext)
  const ruleData = useContext(RuleContext)

  // Hitung total confidence dari semua kepribadian
  let totalConfidence = 0
  for (let i = 0; i < jwbData.confidenceSifat.length; i++) {
    const element = jwbData.confidenceSifat[i];
    totalConfidence += element.confidence
  }

  // Menghitung persentase confidence masing-masing kepribadian 
  let persenData : any[] = []
  for (let i = 0; i < jwbData.confidenceSifat.length; i++) {
    const element = jwbData.confidenceSifat[i];
    const persen = element.confidence / totalConfidence
    persenData.push(persen)
  }

  // Membuat array baru yang berisikan confidence yang sudah dinormalisasi
  let newData : ConfidenceSifat[] = []
  for (let i = 0; i < jwbData.confidenceSifat.length; i++) {
    newData.push({
      nama: jwbData.confidenceSifat[i].nama,
      confidence: persenData[i],
    })
  }

  const sortSifat = newData.sort((max,val) => max.confidence > val.confidence ? -1: 1)

  const layout = (
    <>
      <h2>Berdasarkan pengecekan kepribadian, ditemukan kepribadian 
        yang menonjol adalah {sortSifat[0].nama} dengan tingkat kepercayaan
        sebesar {(sortSifat[0].confidence * 100).toFixed(2)}%.
      </h2>
      <IonList>
        {sortSifat.map(sifat => {
          return <IonItem>
            {sifat.nama} - {(sifat.confidence * 100).toFixed(2)}
          </IonItem>
        })}
      </IonList>
    </>
  )

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
              {layout}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default Result;

