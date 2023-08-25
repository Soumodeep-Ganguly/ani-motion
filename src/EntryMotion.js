import React, { useState, useEffect } from 'react';

export default function EntryMotion(props) {
    const [isAnimating, setIsAnimating] = useState(false);

    const defaultAnimationSettings = {
        // borderColor: 'blue',
        // borderWidth: 1,
        duration: 1,
        delay: 0,
        scale: 1,
        opacity: 1,
    };

    const animationTypes = {
        border: (settings) => animationListBorder(settings),
        background: (settings) => animationListBackground(settings),
        scale: (settings) => animationListScale(settings),
        rotate: (settings) => animationListRotate(settings),
        fade: (settings) => animationListFade(settings),
        colorChange: (settings) => animationListColorChange(settings),
        // Add more animation types here
    };

    const getAnimationStyles = () => {
        const animationType = props.animationType || 'border';
        const animationSettings = { ...defaultAnimationSettings, ...props.animationSettings };
        const animationFunction = animationTypes[animationType];

        if (!animationFunction) {
            console.warn(`Animation type "${animationType}" not recognized.`);
            return {};
        }

        const animationStyle = animationFunction(animationSettings);

        return {
            // transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
            // transform: isAnimating ? `scale(${animationSettings.scale})` : `scale(1)`,
            // opacity: isAnimating ? animationSettings.opacity : 1,
            ...animationStyle,
        };
    };

    const animationListBorder = ({ borderColor, borderWidth, duration, delay }) => ({
        transition: `border ${duration}s ease-in-out ${delay}s`,
        border: isAnimating ? `${borderWidth}px solid ${borderColor}` : 'none',
    });

    const animationListBackground = ({ backgroundColor, duration, delay }) => ({
        transition: `background-color ${duration}s ease-in-out ${delay}s`,
        backgroundColor: isAnimating ? backgroundColor : 'transparent',
    });

    const animationListScale = ({ scaleFactor, duration, delay }) => ({
        transition: `transform ${duration}s ease-in-out ${delay}s`,
        transform: isAnimating ? `scale(${scaleFactor})` : 'none',
    });

    const animationListRotate = ({ degrees, duration, delay }) => ({
        transition: `transform ${duration}s ease-in-out ${delay}s`,
        transform: isAnimating ? `rotate(${degrees}deg)` : 'none',
    });
    
    const animationListFade = ({ fadeValue, duration, delay }) => ({
        transition: `opacity ${duration}s ease-in-out ${delay}s`,
        opacity: isAnimating ? fadeValue : 1,
    });
    
    const animationListColorChange = ({ targetColor, duration, delay }) => ({
        transition: `background-color ${duration}s ease-in-out ${delay}s`,
        backgroundColor: isAnimating ? targetColor : 'transparent',
    });

    useEffect(() => {
        if (!isAnimating) {
            const animationDelay = props.animationSettings?.delay || defaultAnimationSettings.delay;
            setTimeout(() => {
                setIsAnimating(true); // Set animation state to true after the animation duration
            }, animationDelay * 1000); // Convert delay to milliseconds
        }
    }, [isAnimating, props.animationSettings])

    return (
        <div
            className={`${props.className || ''} customizable-animation`}
            style={{ ...getAnimationStyles(), ...props.style }}
        >
            {props.children}
        </div>
    );
}