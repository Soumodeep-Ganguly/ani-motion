import { 
    animationListBorder, animationListBackground, animationListScale, animationListRotate, 
    animationListFade, animationListColorChange, animationListSlideUp, animationListSlideDown, 
    animationListSlideRight, animationListSlideLeft, animationListZoomIn, animationListZoomOut, 
    animationListBounce, animationListSpin, animationListFlip, animationListElastic, 
    animationListPulse, animationListBlink, animationListShake, animationListSpinningLoader, 
    animationListZigzag, animationListSpring, animationListFadeIn, animationListFadeOut
} from './animationFunctions';

const animationTypes = {
    border: (settings) => animationListBorder(settings),
    background: (settings) => animationListBackground(settings),
    scale: (settings) => animationListScale(settings),
    rotate: (settings) => animationListRotate(settings),
    fade: (settings) => animationListFade(settings),
    colorChange: (settings) => animationListColorChange(settings),
    slideUp: (settings) => animationListSlideUp(settings),
    slideDown: (settings) => animationListSlideDown(settings),
    slideRight: (settings) => animationListSlideRight(settings),
    slideLeft: (settings) => animationListSlideLeft(settings),
    zoomIn: (settings) => animationListZoomIn(settings),
    zoomOut: (settings) => animationListZoomOut(settings),
    bounce: (settings) => animationListBounce(settings),
    spin: (settings) => animationListSpin(settings),
    flip: (settings) => animationListFlip(settings),
    elastic: (settings) => animationListElastic(settings),
    pulse: (settings) => animationListPulse(settings),
    blink: (settings) => animationListBlink(settings),
    shake: (settings) => animationListShake(settings),
    spinner: (settings) => animationListSpinningLoader(settings),
    zigzag: (settings) => animationListZigzag(settings),
    spring: (settings) => animationListSpring(settings),
    fadeIn: (settings) => animationListFadeIn(settings),
    fadeOut: (settings) => animationListFadeOut(settings),
    // Add more animation types here
};

export default animationTypes