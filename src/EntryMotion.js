import React, { useState, useEffect } from 'react';
import animationTypes from './utils/animationTypes';
import keyframes from './utils/keyframes';

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

    const getAnimationStyles = () => {
        if (!isAnimating) {
            return {}; // No animation styles if not animating
        }

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
            {keyframes(props.animationType)}
        </div>
    );
}