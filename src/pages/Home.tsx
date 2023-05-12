import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import ActionButtons from '../components/ActionButtons';
import ProfileCard from '../components/ProfileCard';

const Home: React.FC = () => {
  const profileEvents = {
    onMatch: () => { },
    onUnmatch: () => { },
    onReset: () => { }
  }

  const profiles = [
    {
      id: 1,
      image: "https://tudosobrecachorros.com.br/wp-content/uploads/cachorros-fofos-04-1024x640.jpg",
      name: "Dog1",
      bio: "loren ipsumloren ipsumloren ipsumloren ipsum",
      ...profileEvents
    },
    {
      id: 2,
      image: "https://www.petz.com.br/blog/wp-content/uploads/2020/11/pode-dar-plasil-para-cachorro.jpg",
      name: "Dog2",
      bio: "loren ipsumloren ipsumloren ipsumloren ipsum",
      ...profileEvents
    },
    {
      id: 3,
      image: "https://tudosobrecachorros.com.br/wp-content/uploads/cachorros-fofos-11-1024x768.jpg",
      name: "Dog3",
      bio: "loren ipsumloren ipsumloren ipsumloren ipsum",
      ...profileEvents
    }

  ]

  return (
    <IonPage>
      <IonHeader mode="ios">
        <IonToolbar mode="ios">
          <IonTitle>Animations</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className='cards-stack-container'>
          {profiles.map(profile => (
            <ProfileCard {...profile} key={profile.id} />
          ))}
        </div>

        <ActionButtons />
      </IonContent>
    </IonPage>
  );
};

export default Home;
