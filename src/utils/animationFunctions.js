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
    animation: `${duration}s ${delay}s slideUp`,
});

const animationListSlideDown = ({ duration, delay }) => ({
    animation: `${duration}s ${delay}s slideDown`,
});

const animationListSlideRight = ({ duration, delay }) => ({
    animation: `${duration}s ${delay}s slideRight`,
});

const animationListSlideLeft = ({ duration, delay }) => ({
    animation: `${duration}s ${delay}s slideLeft`,
});

const animationListZoomIn = ({ duration, delay }) => ({
    animation: `${duration}s ${delay}s zoomIn`
});

const animationListZoomOut = ({ duration, delay }) => ({
    animation: `${duration}s ${delay}s zoomOut`,
});

const animationListBounce = ({ duration, delay, bounceCount }) => ({
    animation: `${(duration || 1) * (bounceCount || 1)}s ${delay || 0}s ${bounceCount || 1} bounce`
});

export {
    animationListBorder,
    animationListBackground,
    animationListScale,
    animationListRotate,
    animationListFade,
    animationListColorChange,
    animationListSlideUp,
    animationListSlideDown,
    animationListSlideRight,
    animationListSlideLeft,
    animationListZoomIn,
    animationListZoomOut,
    animationListBounce
}