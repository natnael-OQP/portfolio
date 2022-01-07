
export const SpringFadeUp = {
    initial: {
        opacity: 0,
        y:60,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition:{
            delay: 0,
            x: { type: "spring", stiffness: 100 },
            default: { duration: 1 },
        }
    }
    
}

export const FadeUp = {
    initial: {
        opacity: 0,
        x:60,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition:{
            delay: 0,
            x: { type: "spring", stiffness: 100 },
            default: { duration: 1 },
        },
        whileInView: {
            opacity: 1
        },
        viewport:{ once: true }
    }
    
}



export const SpringFadeUpLeft = {
    initial: {
        opacity: 0,
        x:-100,
    },
    animate: {
        opacity: 1,
        x:0,
        transition:{
            delay: 2,
            x: { type: "spring", stiffness: 100 },
            default: { duration: 1 },
        }
    },
    
}

export const FadeUpLeft = {
    initial: {
        opacity: 0,
        x:-50,
    },
    animate: {
        opacity: 1,
        x:0,
        transition:{
            delay: 0,
            x: { type: "spring", stiffness: 100 },
            default: { duration: 1 },
        }
    },
    
}
// Spring
export const SpringFadeUpRight = {
    initial: {
        opacity: 0,
        x:100,
    },
    animate: {
        opacity: 1,
        x:0,
        transition:{
            delay: 2,
            x: { type: "spring", stiffness: 100 },
            default: { duration: 1 },
        }
    },
    
}
//   -----------------  right 
export const FadeUpRight = {
    initial: {
        opacity: 0,
        x:100,
    },
    animate: {
        opacity: 1,
        x:0,
        transition:{
            // delay: 1,
            // x: { type: "spring", stiffness: 100 },
            // default: { duration: 1 },
        }
    },
    
}

export const FadeUpTop = {
    initial: {
        opacity: 0,
        y:-60,
    },
    animate: {
        opacity: 1,
        y:0,
        transition:{
            delay: 1,
            y: { type: "spring", stiffness: 100 },
            default: { duration: 1 },
        }
    },
    
}