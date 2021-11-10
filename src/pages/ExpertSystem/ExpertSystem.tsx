import { IonButton, IonButtons, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonMenuButton, IonPage, IonProgressBar, IonRow, IonText, IonTitle, IonToolbar, useIonToast } from '@ionic/react';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import Pilihan from '../../components/Pilihan';
import { ConfidenceSifat, JawabanContext } from '../../data/jawaban-context';
import { PernyataanContext } from '../../data/pernyataan-context';
import { RuleContext } from '../../data/rule-context';

const ExpertSystem: React.FC = () => {
  const [tahap, setTahap] = useState(1)
  const pytData = useContext(PernyataanContext)
  const jwbData = useContext(JawabanContext)
  const ruleData = useContext(RuleContext)
  const history = useHistory()
  const [presentToast, dismissToast] = useIonToast();

  const durasiToast = 1500

  const listPernyataan = pytData.pernyataan.map(pyt => {
    if(ruleData.rule[tahap-1].member.includes(pyt.id))
      return (<Pilihan id={pyt.id}></Pilihan>)
  })

  const fungsiSubmit = () => {
    let selisih = pytData.pernyataan.length - jwbData.jawaban.length 
    /// Cek apakah semua data sudah dimasukkan
    if (selisih > 0){
      // Menampilkan toast
      presentToast({
        buttons: [
          { text: 'Baik', handler: dismissToast },
        ],
        color: 'warning',
        message: `${selisih} pernyataan belum dijawab semua nih. Yuk cek lagi!`,
        duration: durasiToast,
      })
      return
    }
    

    /// Kalkulasi jawaban

    // Ambil list rule
    ruleData.rule.forEach(rule => {
      // Ambil list member pernyataan
      const listPyt = rule.member

      // Ambil jawaban user
      const jwb = jwbData.jawaban.filter(e => listPyt.includes(e.id))

      // Ambil nilai confidence dalam pernyataan
      const pyt = pytData.pernyataan.filter(e => listPyt.includes(e.id))
      
      // console.warn(pyt)
      
      // Hitung nilai cf awal
      let totalCF = 0
      for (let index = 0; index < jwb.length; index++) {
        const cfAwal = jwb[index].confidence * pyt[index].value
        if(totalCF == 0)
          totalCF = cfAwal
        else
          totalCF = totalCF + cfAwal*(1-totalCF)
      }
      console.info(totalCF)
      console.info(rule.nama)

      // Simpan nilai total CF masing-masing
      const cfdSifat : ConfidenceSifat = {
        nama: rule.nama,
        confidence: totalCF
      }
      jwbData.updateConfidenceSifat(cfdSifat)
    })

    // Redicect
    history.push('/result')
  }

  console.info(`tahap: ${tahap}`)

  const tombolBalik = (
    <IonButton color="danger" onClick={() => setTahap(value => value - 1)}>
      Previous
    </IonButton>
  )

  const tombolMaju = (
    <IonButton color="success" onClick={() => setTahap(value => value + 1)}>
      Next
    </IonButton>
  )

  const tombolSubmit = (
    <IonButton color="primary" onClick={fungsiSubmit}>
      Submit
    </IonButton>
  )

  let tombolNavigasi

  if(tahap == 4) tombolNavigasi = (
    <IonRow>
      <IonCol className="ion-text-end">
      {tombolBalik}
      </IonCol>
      <IonCol className="ion-text-start">
      {tombolSubmit}
      </IonCol>
    </IonRow>
  )
  else if (tahap == 1) tombolNavigasi = (<IonRow><IonCol className="ion-text-center">{tombolMaju}</IonCol></IonRow>)
  else 
    tombolNavigasi = (
      <IonRow>
        <IonCol className="ion-text-end">
        {tombolBalik}
        </IonCol>
        <IonCol className="ion-text-start">
        {tombolMaju}
        </IonCol>
      </IonRow>
    )

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton /> 
          </IonButtons>
          <IonTitle>Cek Kepribadian Diri</IonTitle>
          <IonText className="ion-margin-end ion-padding-end" slot="end">Tahap {tahap}</IonText>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid className="ion-padding">
          <IonRow className="ion-justify-content-center">
            <IonCol size-md="10">
              {listPernyataan}
            </IonCol>
          </IonRow>
          {tombolNavigasi}
        </IonGrid>
      </IonContent>
      <IonFooter>
        <IonProgressBar value={(1 / pytData.pernyataan.length) * jwbData.jawaban.length}></IonProgressBar>
      </IonFooter>
    </IonPage>
  );
};

export default ExpertSystem;
