import { IonButton, IonIcon, CreateAnimation } from '@ionic/react';
import React, { useRef } from 'react';
import { heart, closeOutline } from 'ionicons/icons';
import './ActionButtons.css'

const ActionButtons: React.FC = () => {

    //Creating KeyFrames for animations

    const pulseKeyframes = [
        { offset: 0, transform: 'scale(1)' },
        { offset: 0.3, transform: 'scale(1.1)' },
        { offset: 0.5, transform: 'scale(1)' },
        { offset: 0.7, transform: 'scale(1.2)' },
        { offset: 1, transform: 'scale(1)' },
    ]

    const unmatchAnimationRef = useRef<CreateAnimation>(null);
    const matchAnimationRef = useRef<CreateAnimation>(null);

    const playUnmatchButtonAnimation = () => {
        if (unmatchAnimationRef.current !== null) {
            unmatchAnimationRef.current.animation.play();
        }
    }

    const playmatchButtonAnimation = () => {
        if (matchAnimationRef.current !== null) {
            matchAnimationRef.current.animation.play();
        }
    }

    return (
        <div className='action-buttons-container'>
            <CreateAnimation
                ref={unmatchAnimationRef}
                duration={1000}
                iterations={1}
                keyframes={pulseKeyframes}

            >
                <IonButton onClick={() => playUnmatchButtonAnimation}
                    mode='ios' className='unmatch' fill='solid'>
                    <IonIcon icon={closeOutline}></IonIcon>
                </IonButton>
            </CreateAnimation>
            <CreateAnimation
                ref={matchAnimationRef}
                duration={1000}
                iterations={1}
                keyframes={pulseKeyframes}

            >
                <IonButton onClick={() => playmatchButtonAnimation}
                    mode='ios' className='match' fill='solid'>
                    <IonIcon icon={heart}></IonIcon>
                </IonButton>
            </CreateAnimation>
        </div>
    );
};

export default ActionButtons;