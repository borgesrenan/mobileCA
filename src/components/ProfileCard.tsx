import { IonCard, IonImg, IonText, createGesture } from '@ionic/react';
import React, { useEffect } from 'react';
import './ProfileCard.css'


interface ContainerProps {
    image: string
    name: string
    bio: string
    onMatch: () => void
    onUnmatch: () => void
    onReset: () => void
}

const ProfileCard: React.FC<ContainerProps> = (props) => {

    const ref = React.useRef<HTMLInputElement>(null)

    useEffect(() => {
        gestureInit()
    }, [])

    const gestureInit = () => {
        const card = ref.current;
        if (card) {
            const gesture = createGesture({
                el: card,
                gestureName: 'card-swipe',
                onMove: (detail) => {
                    card.style.transform = `translateX(${detail.deltaX}px) rotate(${detail.deltaX / 20
                        }deg)`
                    if (detail.deltaX > 0) {
                        props.onMatch()
                    } else {
                        props.onUnmatch()
                    }
                },
                onEnd: (detail) => {
                    const windowWidth = window.innerWidth
                    props.onReset()
                    card.style.transition =
                        '1.25s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                    if (detail.deltaX > windowWidth / 2) {
                        card.style.transform = `translateX(${windowWidth * 1.5}px)`
                    } else if (detail.deltaX < -windowWidth / 2) {
                        card.style.transform = `translateX(-${windowWidth * 1.5}px)`
                    } else {
                        card.style.transform = ''
                    }
                },
            })
            gesture.enable()
        }
    }

    return (
        <div ref={ref}>
            <IonCard mode="ios">
                <div className='card-container'>
                    <IonImg src={props.image} />
                </div>
                <div className='details-container'>
                    <IonText className='name'>{props.name}</IonText>
                    <IonText className='bio'>
                        <p>{props.bio}</p>
                    </IonText>
                </div>
            </IonCard>
        </div>
    );
};

export default ProfileCard;
