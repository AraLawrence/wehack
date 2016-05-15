.vegas-wrapper,
.vegas-overlay,
.vegas-timer,
.vegas-slide,
.vegas-slide-inner {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
    border: none;
    padding: 0;
    margin: 0;
}

.vegas-overlay {
    opacity: .8;
    background: transparent url(overlays/02.png) center center repeat;
}

.vegas-timer {
    top: auto;
    bottom: 0;
    height: 2px;
}
    .vegas-timer-progress {
        width: 0%;
        height: 100%;
        background: black;
        transition: width ease-out;
    }
        .vegas-timer-running .vegas-timer-progress {
            width: 100%;
        }

.vegas-slide,
.vegas-slide-inner {
    margin: 0;
    padding: 0;
    background: transparent center center no-repeat;
    transform: translateZ(0);
}

body .vegas-container {
    overflow: hidden !important;
    position: relative;
}
    
.vegas-video {
    min-width: 100%; 
    min-height: 100%;
    width: auto; 
    height: auto;
}

body.vegas-container {
    overflow: auto;
    position: static;
    z-index: -2;
}
    body.vegas-container > .vegas-timer,
    body.vegas-container > .vegas-overlay,
    body.vegas-container > .vegas-slide {
        position: fixed;
        z-index: -1;
    }

    /* Target Safari IOS7+ in order to add 76px */
    _::full-page-media, _:future, 
    :root body.vegas-container > .vegas-slide,
    :root body.vegas-container > .vegas-overlay {
        bottom: -76px;
    }

/*************************
    Transitions
 *************************/

/* fade */
.vegas-transition-fade,
.vegas-transition-fade2 {
    opacity: 0;
}

.vegas-transition-fade-in,
.vegas-transition-fade2-in {
    opacity: 1;
}

.vegas-transition-fade2-out {
    opacity: 0;
}

/* blur */
.vegas-transition-blur,
.vegas-transition-blur2 {
    opacity: 0;
    filter: blur(32px);
}

.vegas-transition-blur-in,
.vegas-transition-blur2-in {
    opacity: 1;
    filter: blur(0px);
}

.vegas-transition-blur2-out {
    opacity: 0;
}

/* flash */
.vegas-transition-flash,
.vegas-transition-flash2 {
    opacity: 0;
    filter: brightness(25);
}

.vegas-transition-flash-in,
.vegas-transition-flash2-in {
    opacity: 1;
    filter: brightness(1);
}

.vegas-transition-flash2-out {
    opacity: 0;
    filter: brightness(25);
}

/* negative */
.vegas-transition-negative,
.vegas-transition-negative2 {
    opacity: 0;
    filter: invert(100%);
}

.vegas-transition-negative-in,
.vegas-transition-negative2-in {
    opacity: 1;
    filter: invert(0);
}

.vegas-transition-negative2-out {
    opacity: 0;
    filter: invert(100%);
}

/* burn */
.vegas-transition-burn,
.vegas-transition-burn2 {
    opacity: 0;
    filter: contrast(1000%) saturate(1000%);
}

.vegas-transition-burn-in,
.vegas-transition-burn2-in {
    opacity: 1;
    filter: contrast(100%) saturate(100%);
}

.vegas-transition-burn2-out {
    opacity: 0;
    filter: contrast(1000%) saturate(1000%);
}

/* slideLeft */
.vegas-transition-slideLeft,
.vegas-transition-slideLeft2 {
    transform: translateX(100%);
}

.vegas-transition-slideLeft-in,
.vegas-transition-slideLeft2-in {
    transform: translateX(0%); 
}

.vegas-transition-slideLeft2-out {
    transform: translateX(-100%);
}

/* slideRight */
.vegas-transition-slideRight,
.vegas-transition-slideRight2 {
    transform: translateX(-100%);
}

.vegas-transition-slideRight-in,
.vegas-transition-slideRight2-in {
    transform: translateX(0%); 
}

.vegas-transition-slideRight2-out {
    transform: translateX(100%);
}

/* slideUp */
.vegas-transition-slideUp,
.vegas-transition-slideUp2 {
    transform: translateY(100%);
}

.vegas-transition-slideUp-in,
.vegas-transition-slideUp2-in {
    transform: translateY(0%); 
}

.vegas-transition-slideUp2-out {
    transform: translateY(-100%);
}

/* slideDown */
.vegas-transition-slideDown,
.vegas-transition-slideDown2 {
    transform: translateY(-100%);
}

.vegas-transition-slideDown-in,
.vegas-transition-slideDown2-in {
    transform: translateY(0%); 
}

.vegas-transition-slideDown2-out {
    transform: translateY(100%);
}

/* zoomIn */
.vegas-transition-zoomIn,
.vegas-transition-zoomIn2 {
    transform: scale(0);
    opacity: 0;
}

.vegas-transition-zoomIn-in,
.vegas-transition-zoomIn2-in {
    transform: scale(1);
    opacity: 1;
}

.vegas-transition-zoomIn2-out {
    transform: scale(2);
    opacity: 0;
}

/* zoomOut */
.vegas-transition-zoomOut,
.vegas-transition-zoomOut2 {
    transform: scale(2);
    opacity: 0;
}

.vegas-transition-zoomOut-in,
.vegas-transition-zoomOut2-in {
    transform: scale(1);
    opacity: 1;
}

.vegas-transition-zoomOut2-out {
    transform: scale(0);
    opacity: 0;
}

/* swirlLeft */
.vegas-transition-swirlLeft,
.vegas-transition-swirlLeft2 {
    transform: scale(2) rotate(35deg);
    opacity: 0;
}

.vegas-transition-swirlLeft-in,
.vegas-transition-swirlLeft2-in {
    transform: scale(1) rotate(0deg); 
    opacity: 1;
}

.vegas-transition-swirlLeft2-out {
    transform: scale(2) rotate(-35deg);
    opacity: 0;
}

/* swirlRight */
.vegas-transition-swirlRight,
.vegas-transition-swirlRight2 {
    transform: scale(2) rotate(-35deg);
    opacity: 0;
}

.vegas-transition-swirlRight-in,
.vegas-transition-swirlRight2-in {
    transform: scale(1) rotate(0deg);
    opacity: 1;
}

.vegas-transition-swirlRight2-out {
    transform: scale(2) rotate(35deg);
    opacity: 0;
}

/*************************
    Animations
 *************************/

.vegas-animation-kenburns {
    animation: kenburns ease-out;
}
@keyframes kenburns {
    0% {
        transform: scale(1.5);
    }
    100% {
        transform: scale(1);
    }
}

.vegas-animation-kenburnsUp {
    animation: kenburnsUp ease-out;
}
@keyframes kenburnsUp {
    0% {
        transform: scale(1.5) translate(0, 10%);
    }
    100% {
        transform: scale(1) translate(0, 0);
    }
}

.vegas-animation-kenburnsDown {
    animation: kenburnsDown ease-out;
}
@keyframes kenburnsDown {
    0% {
        transform: scale(1.5) translate(0, -10%);
    }
    100% {
        transform: scale(1) translate(0, 0);
    }
}

.vegas-animation-kenburnsLeft {
    animation: kenburnsLeft ease-out;
}
@keyframes kenburnsLeft {
    0% {
        transform: scale(1.5) translate(10%, 0);
    }
    100% {
        transform: scale(1) translate(0, 0);
    }
}

.vegas-animation-kenburnsRight {
    animation: kenburnsRight ease-out;
}
@keyframes kenburnsRight {
    0% {
        transform: scale(1.5) translate(-10%, 0);
    }
    100% {
        transform: scale(1) translate(0, 0);
    }
}

.vegas-animation-kenburnsUpLeft {
    animation: kenburnsUpLeft ease-out;
}
@keyframes kenburnsUpLeft {
    0% {
        transform: scale(1.5) translate(10%, 10%);
    }
    100% {
        transform: scale(1) translate(0, 0);
    }
}

.vegas-animation-kenburnsUpRight {
    animation: kenburnsUpRight ease-out;
}
@keyframes kenburnsUpRight {
    0% {
        transform: scale(1.5) translate(-10%, 10%);
    }
    100% {
        transform: scale(1) translate(0, 0);
    }
}

.vegas-animation-kenburnsDownLeft {
    animation: kenburnsDownLeft ease-out;
}
@keyframes kenburnsDownLeft {
    0% {
        transform: scale(1.5) translate(10%, -10%);
    }
    100% {
        transform: scale(1) translate(0, 0);
    }
}

.vegas-animation-kenburnsDownRight {
    animation: kenburnsDownRight ease-out;
}
@keyframes kenburnsDownRight {
    0% {
        transform: scale(1.5) translate(-10%, -10%);
    }
    100% {
        transform: scale(1) translate(0, 0);
    }
}
