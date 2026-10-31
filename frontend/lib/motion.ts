import { MotionValue, useTransform, useMotionTemplate } from "motion/react";

// --- Standard animation values ---
// Content fade-in: 0.6s | Headers: 0.8s | Small elements: 0.3s
// Y-offset: 20px (content) | 30px (headers)
// Blur: 8px for all
// Easing: easeOut for enter animations, easeInOut for scale/underline

export const textVariant = {
    hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
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
    hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

export const textItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };


  export const childVariantStaggering = {
    hidden: {
        opacity: 0,
        x: -100
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
}

export const parentVariantStaggering = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
            ease: 'easeOut'
        }
    }
}


export const headerVariant = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
      filter: "blur(8px)",
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
      filter: "blur(8px)",
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
    hidden: {
      scaleX: 0,
    },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };


  export const fadeInUp = {
    hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };


// --- Shared scroll transform helpers ---
// Used by ExperienceCard, ProjectCard, and similar scroll-driven sections

export function useScrollCardTransforms(scrollYProgress: MotionValue<number>) {
  const translateContent = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [50, 0, -50]
  );

  const opacityContent = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [0, 0.8, 1, 0.8, 0]
  );

  const scaleContent = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 1],
    [0.85, 0.95, 1, 0.95, 0.85]
  );

  const blurContent = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 1],
    [2, 0, 0, 0, 2]
  );

  const filterBlur = useMotionTemplate`blur(${blurContent}px)`;

  return { translateContent, opacityContent, scaleContent, filterBlur };
}
