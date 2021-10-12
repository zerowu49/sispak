import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonMenuButton, IonPage, IonRow, IonText, IonTitle, IonToolbar, useIonToast } from '@ionic/react';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import Pilihan from '../components/Pilihan';
import { ConfidenceSifat, JawabanContext } from '../data/jawaban-context';
import { PernyataanContext } from '../data/pernyataan-context';
import { RuleContext } from '../data/rule-context';

const Check: React.FC = () => {
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
        color: 'success',
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
    history.push('/page/Result')
  }

  console.info(`tahap: ${tahap}`)

  const tombolBalik = (
    <>
      <IonButton onClick={() => setTahap(value => value-1)}>
        Balik
      </IonButton>
    </>
  )

  const tombolMaju = (
    <>
      <IonButton onClick={() => setTahap(value => value+1)}>
        Selanjutnya
      </IonButton>
    </>
  )

  const tombolSubmit = (
    <>
      <IonButton onClick={fungsiSubmit}>
        Submit
      </IonButton>
    </>
  )

  let tombolNavigasi

  if(tahap == 4) tombolNavigasi = (
    <> 
      {tombolBalik}
      {tombolSubmit}
    </>
  )
  else if (tahap == 1) tombolNavigasi = tombolMaju
  else 
    tombolNavigasi = (
      <> 
        {tombolBalik}
        {tombolMaju}
      </>
    )
  

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
        <IonText id="tahap">Tahap: {tahap}</IonText>
        <IonGrid className="ion-text-center">
          {listPernyataan}
          {tombolNavigasi}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Check;
