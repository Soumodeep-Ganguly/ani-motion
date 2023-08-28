const bounceKeyframe = () => {
    return <style>
        {`
            @keyframes bounce {
                0% {
                    transform: translateY(0);
                    animation-timing-function: ease-in-out; // Smooth acceleration
                }
                25% {
                    transform: translateY(-40px);
                    animation-timing-function: ease-in-out; // Smooth acceleration
                }
                50% {
                    transform: translateY(0);
                    animation-timing-function: ease-in-out; // Smooth acceleration
                }
                75% {
                    transform: translateY(-20px);
                    animation-timing-function: ease-in-out; // Smooth acceleration
                }
                100% {
                    transform: translateY(0);
                    animation-timing-function: ease-in-out; // Smooth acceleration
                }
            }
        `}
    </style>
}

const slideUpKeyframe = () => {
    return <style>
        {`
            @keyframes slideUp {
                0% {
                    transform: translateY(100%);
                }
                100% {
                    transform: translateY(0);
                }
            }
        `}
    </style>
}

const slideDownKeyframe = () => {
    return <style>
        {`
            @keyframes slideDown {
                0% {
                    transform: translateY(-100%);
                }
                100% {
                    transform: translateY(0);
                }
            }
        `}
    </style>
}

const slideLeftKeyframe = () => {
    return <style>
        {`
            @keyframes slideLeft {
                0% {
                    transform: translateX(100%);
                }
                100% {
                    transform: translateX(0);
                }
            }
        `}
    </style>
}

const slideRightKeyframe = () => {
    return <style>
        {`
            @keyframes slideRight {
                0% {
                    transform: translateX(-100%);
                }
                100% {
                    transform: translateX(0);
                }
            }
        `}
    </style>
}

const zoomInKeyframe = () => {
    return <style>
        {`
            @keyframes zoomIn {
                0% {
                    transform: scale(0);
                }
                100% {
                    transform: scale(1);
                }
            }
        `}
    </style>
}

const zoomOutKeyframe = () => {
    return <style>
        {`
            @keyframes zoomOut {
                0% {
                    transform: scale(1);
                }
                100% {
                    transform: scale(0);
                }
            }
        `}
    </style>
}

const springKeyframe = () => {
    return <style>
        {`
            @keyframes spring {
                0%, 100% {
                    transform: translateY(0);
                }
                20%, 80% {
                    transform: translateY(-10px);
                }
                40%, 60% {
                    transform: translateY(5px);
                }
            }
        `}
    </style>
}

const zigzagKeyframe = () => {
    return <style>
        {`
            @keyframes zigzag {
                0%, 100% {
                    transform: translateX(0);
                }
                25%, 75% {
                    transform: translateX(10px);
                }
                50% {
                    transform: translateX(-10px);
                }
            }
        `}
    </style>
}

const spinKeyframe = () => {
    return <style>
        {`
            @keyframes spin {
                0% {
                    transform: rotate(0);
                }
                100% {
                    transform: rotate(360deg);
                }
            }
        `}
    </style>
}

const shakeKeyframe = () => {
    return <style>
        {`
            @keyframes shake {
                0%, 100% {
                    transform: translateX(0);
                }
                10%, 30%, 50%, 70%, 90% {
                    transform: translateX(-10px);
                }
                20%, 40%, 60%, 80% {
                    transform: translateX(10px);
                }
            }
        `}
    </style>
}

const blinkKeyframe = () => {
    return <style>
        {`
            @keyframes blink {
                0%, 100% {
                    opacity: 1;
                }
                50% {
                    opacity: 0;
                }
            }
        `}
    </style>
}

const pulseKeyframe = () => {
    return <style>
        {`
            @keyframes pulse {
                0%, 100% {
                    transform: scale(1);
                }
                50% {
                    transform: scale(1.1);
                }
            }
        `}
    </style>
}

const flipKeyframe = () => {
    return <style>
        {`
            @keyframes flip {
                0% {
                    transform: perspective(400px) rotateY(0);
                }
                40% {
                    transform: perspective(400px) rotateY(170deg);
                }
                50% {
                    transform: perspective(400px) rotateY(190deg);
                }
                80% {
                    transform: perspective(400px) rotateY(340deg);
                }
                100% {
                    transform: perspective(400px) rotateY(360deg);
                }
            }
        `}
    </style>
}

const elasticKeyframe = () => {
    return <style>
        {`
            @keyframes elastic {
                0%, 100% {
                    transform: scaleX(1);
                }
                20%, 50%, 80% {
                    transform: scaleX(1.25);
                }
                40%, 60% {
                    transform: scaleX(0.85);
                }
            }
        `}
    </style>
}

const fadeInKeyframe = () => {
    return <style>
        {`
            @keyframes fadeIn {
                0% {
                    opacity: 0;
                }
                100% {
                    opacity: 1;
                }
            }
        `}
    </style>
}

const fadeOutKeyframe = () => {
    return <style>
        {`
            @keyframes fadeOut {
                0% {
                    opacity: 1;
                }
                100% {
                    opacity: 0;
                }
            }
        `}
    </style>
}

export default function keyframes(animationType) {
    if(animationType === "bounce") return bounceKeyframe()
    if(animationType === "slideUp") return slideUpKeyframe()
    if(animationType === "slideDown") return slideDownKeyframe()
    if(animationType === "slideLeft") return slideLeftKeyframe()
    if(animationType === "slideRight") return slideRightKeyframe()
    if(animationType === "zoomOut") return zoomOutKeyframe()
    if(animationType === "zoomIn") return zoomInKeyframe()
    if(animationType === "spring") return springKeyframe()
    if(animationType === "zigzag") return zigzagKeyframe()
    if(animationType === "spinner") return spinKeyframe()
    if(animationType === "shake") return shakeKeyframe()
    if(animationType === "blink") return blinkKeyframe()
    if(animationType === "pulse") return pulseKeyframe()
    if(animationType === "flip") return flipKeyframe()
    if(animationType === "elastic") return elasticKeyframe()
    if(animationType === "fadeIn") return fadeInKeyframe()
    if(animationType === "fadeOut") return fadeOutKeyframe()
    
    return null
}