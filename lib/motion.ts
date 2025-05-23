
export const textVariant = {
    hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

export const textContainer = {
    hidden: { opacity: 0, y: 30 ,filter:'blur(10px)' },
    show: {
      opacity: 1,
      y: 0,
      filter:'blur(0px)',
      transition: {
        staggerChildren: 0.3,
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };
  
export const textItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };



  export const childVariantStaggering = {
    initial: {
        opacity: 0,
        x: -100 
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: "easeInOut"
        }
    }
}

export const parentVariantStaggering = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,   
            ease: 'easeInOut'
        }
    }
}


export const headerVariant = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  export const blurUpVariant = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  
  export const scaleXVariant = {
    initial: {
      scaleX: 0,
    },
    animate: {
      scaleX: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  

