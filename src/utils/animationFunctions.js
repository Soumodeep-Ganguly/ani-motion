const animationListBorder = ({ borderColor, borderWidth, duration, delay }) => ({
    transition: `border ${duration || 1}s ease-in-out ${delay || 0}s`,
    border: `${borderWidth || 0}px solid ${borderColor || 'transparent'}`,
});

const animationListBackground = ({ backgroundColor, duration, delay }) => ({
    transition: `background-color ${duration || 1}s ease-in-out ${delay || 0}s`,
    backgroundColor: backgroundColor || 'transparent',
});

const animationListScale = ({ scaleFactor, duration, delay }) => ({
    transition: `transform ${duration || 1}s ease-in-out ${delay || 0}s`,
    transform: `scale(${scaleFactor || 1.2})`,
});

const animationListRotate = ({ degrees, duration, delay }) => ({
    transition: `transform ${duration || 1}s ease-in-out ${delay || 0}s`,
    transform: `rotate(${degrees || 0}deg)`,
});

const animationListFade = ({ fadeValue, duration, delay }) => ({
    transition: `opacity ${duration || 1}s ease-in-out ${delay || 0}s`,
    opacity: fadeValue || 1,
});

const animationListColorChange = ({ targetColor, duration, delay }) => ({
    transition: `color ${duration || 1}s ease-in-out ${delay || 0}s`,
    color: targetColor || '#000',
});

const animationListSlideUp = ({ duration, delay }) => ({
    animation: `${duration || 1}s ${delay || 0}s slideUp`,
});

const animationListSlideDown = ({ duration, delay }) => ({
    animation: `${duration || 1}s ${delay || 0}s slideDown`,
});

const animationListSlideRight = ({ duration, delay }) => ({
    animation: `${duration || 1}s ${delay || 0}s slideRight`,
});

const animationListSlideLeft = ({ duration, delay }) => ({
    animation: `${duration || 1}s ${delay || 0}s slideLeft`,
});

const animationListZoomIn = ({ duration, delay, zoomCount }) => ({
    animation: `${(duration || 1) * (zoomCount ? zoomCount !== 'infinite' ? zoomCount : 1 : 1)}s ${delay || 0}s zoomIn ${zoomCount || 1}`
});

const animationListZoomOut = ({ duration, delay, zoomCount }) => ({
    animation: `${(duration || 1) * (zoomCount ? zoomCount !== 'infinite' ? zoomCount : 1 : 1)}s ${delay || 0}s zoomOut ${zoomCount || 1}`,
});

const animationListBounce = ({ duration, delay, bounceCount }) => ({
    animation: `${(duration || 1) * (bounceCount ? bounceCount !== 'infinite' ? bounceCount : 1 : 1)}s ${delay || 0}s ${bounceCount || 1} bounce`
});

const animationListSpin = ({ duration, delay }) => ({
    transition: `transform ${duration || 1}s ease-in-out ${delay || 0}s`,
    transform: 'rotate(360deg)',
});

const animationListFlip = ({ duration, delay, flipCount }) => ({
    animation: `${(duration || 1) * (flipCount ? flipCount !== 'infinite' ? flipCount : 1 : 1)}s ${delay || 0}s ease-in-out flip ${flipCount || 1}`,
});

const animationListElastic = ({ duration, delay, elasticityCount }) => ({
    animation: `${(duration || 1) * (elasticityCount ? elasticityCount !== 'infinite' ? elasticityCount : 1 : 1)}s ${delay || 0}s ease-in-out elastic ${elasticityCount || 1}`,
});

const animationListPulse = ({ duration, delay, pulseCount }) => ({
    animation: `pulse ${(duration || 1) * (pulseCount ? pulseCount !== 'infinite' ? pulseCount : 1 : 1)}s ease-in-out ${delay || 0}s ${pulseCount || 1}`,
    // transform: 'scale(1)',
});

const animationListBlink = ({ duration, delay, blinkCount }) => ({
    animation: `blink ${(duration || 1) * (blinkCount ? blinkCount !== 'infinite' ? blinkCount : 1 : 1)}s ease-in-out ${delay || 0}s ${blinkCount || 1}`,
    // opacity: 0,
});

const animationListShake = ({ duration, delay, shakeCount }) => ({
    animation: `shake ${(duration || 1) * (shakeCount ? shakeCount !== 'infinite' ? shakeCount : 1 : 1)}s ease-in-out ${delay || 0}s ${shakeCount || 1}`,
    // transform: 'translateX(5px)',
});

const animationListSpinningLoader = ({ height, width, borderWidth, circleColor, spinnerColor, speed }) => ({
    animation: `spin ${speed || 1}s linear infinite`,
    border: `${borderWidth || 4}px solid ${circleColor || 'rgba(0, 0, 0, 0.1)'}`,
    borderTop: `${borderWidth || 4}px solid ${spinnerColor || '#000'}`,
    borderRadius: '50%',
    width: `${width || 20}px`,
    height: `${height || 20}px`,
});

const animationListZigzag = ({ duration, delay, zigzagCount }) => ({
    animation: `zigzag ${(duration || 1) * (zigzagCount ? zigzagCount !== 'infinite' ? zigzagCount : 1 : 1)}s ease-in-out ${delay || 0}s ${zigzagCount || 1}`,
    transform: 'translateX(0)',
});

const animationListSpring = ({ duration, delay, springCount }) => ({
    animation: `spring ${(duration || 1) * (springCount ? springCount !== 'infinite' ? springCount : 1 : 1)}s ease-in-out ${delay || 0}s ${springCount || 1}`,
    transform: 'translateY(0)',
});

const animationListFadeIn = ({ duration, delay, fadeCount }) => ({
    animation: `${(duration || 1) * (fadeCount ? fadeCount !== 'infinite' ? fadeCount : 1 : 1)}s ${delay || 0}s ease-in-out fadeIn ${fadeCount || 1}`,
    opacity: 1,
});

const animationListFadeOut = ({ duration, delay, fadeCount }) => ({
    animation: `${(duration || 1) * (fadeCount ? fadeCount !== 'infinite' ? fadeCount : 1 : 1)}s ${delay || 0}s ease-in-out fadeOut ${fadeCount || 1}`,
    opacity: 0,
});

export {
    animationListBorder, animationListBackground, animationListScale, animationListRotate, 
    animationListFade, animationListColorChange, animationListSlideUp, animationListSlideDown, 
    animationListSlideRight, animationListSlideLeft, animationListZoomIn, animationListZoomOut, 
    animationListBounce, animationListSpin, animationListFlip, animationListElastic, 
    animationListPulse, animationListBlink, animationListShake, animationListSpinningLoader, 
    animationListZigzag, animationListSpring, animationListFadeIn, animationListFadeOut
}