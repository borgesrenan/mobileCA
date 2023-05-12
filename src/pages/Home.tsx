import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import ActionButtons from '../components/ActionButtons';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader mode="ios">
        <IonToolbar mode="ios">
          <IonTitle>Animations</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
       
       <ActionButtons/>
      </IonContent>
    </IonPage>
  );
};

export default Home;
