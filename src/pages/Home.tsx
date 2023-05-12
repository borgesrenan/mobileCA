import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import ActionButtons from '../components/ActionButtons';
import ProfileCard from '../components/ProfileCard';
import { useState } from 'react';

const Home: React.FC = () => {

  const [animatedMatchButton, setAnimatedMatchButton] = useState(false)
  const [animatedUnmatchButton, setAnimatedUnmatchButton] = useState(false)


  const profileEvents = {
    onMatch: () => {
      setAnimatedMatchButton(true)
      setAnimatedUnmatchButton(false)
    },
    onUnmatch: () => {
      setAnimatedUnmatchButton(true)
      setAnimatedMatchButton(false)
    },
    onReset: () => {
      setAnimatedMatchButton(false)
      setAnimatedUnmatchButton(false)
    },
  }

  const profiles = [
    {
      id: 1,
      image: "https://tudosobrecachorros.com.br/wp-content/uploads/cachorros-fofos-04-1024x640.jpg",
      name: "Max",
      bio: "Hi, I'm Max! I'm a friendly dog who loves long walks and playing fetch. My favorite snack is peanut butter, and I love curling up on the couch with my owners.",
      ...profileEvents
    },
    {
      id: 2,
      image: "https://www.petz.com.br/blog/wp-content/uploads/2020/11/pode-dar-plasil-para-cachorro.jpg",
      name: "Buddy",
      bio: "My name is Luna, and I'm a playful pup. I'm always up for an adventure and love exploring new places. When I'm not busy sniffing around, I enjoy cuddling up with my favorite stuffed animal.",
      ...profileEvents
    },
    {
      id: 3,
      image: "https://tudosobrecachorros.com.br/wp-content/uploads/cachorros-fofos-11-1024x768.jpg",
      name: "Charlie",
      bio: "Hey there, I'm Charlie! I'm a spunky little canine with a big personality. I love playing tug-of-war and chasing after squirrels in the park. My favorite thing in the world is snuggling up with my humans on the couch.",
      ...profileEvents
    },
    {
      id: 4,
      image: "https://i.pinimg.com/originals/7f/2c/35/7f2c359c5dfcc05d5814ec4e601318d4.jpg",
      name: "Rocky",
      bio: "I'm Daisy, a sweet and affectionate dog. I love nothing more than getting belly rubs and cuddles from my favorite people. When I'm not lounging around, I enjoy going on short walks and playing with my squeaky toys.",
      ...profileEvents
    },
    {
      id: 5,
      image: "https://petpillow.com.br/wp-content/uploads/2020/01/cachorros-fofos.jpg",
      name: "Cooper",
      bio: "Hi, I'm Cooper! I'm a friendly dog who loves to play in the water. Whether it's swimming in the lake or splashing around in a puddle, I'm always up for some wet and wild fun. When I'm not soaking wet, I enjoy lounging in the sun and getting some belly rubs",
      ...profileEvents
    },
    {
      id: 6,
      image: "https://www.bma.art.br/wp-content/uploads/2019/08/imagens-de-cachorros-fofinhos.jpg",
      name: "Daisy",
      bio: "My name is Sadie, and I'm a gentle and loving pup. I'm a bit of a couch potato, but I do enjoy short walks around the neighborhood. When I'm not napping, you can usually find me snuggled up with my favorite stuffed animal.",
      ...profileEvents
    },
    

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

        <ActionButtons {...{
          animatedMatchButton,
          animatedUnmatchButton,
        }} />
      </IonContent>
    </IonPage>
  );
};

export default Home;
