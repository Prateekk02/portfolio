import { useTransform, useSpring, useScroll } from 'motion/react'
import { useRef } from 'react';

export const useScrollAnimations = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })

  const translateContent = useTransform(scrollYProgress, [0, 1], [-200, 200])

  const rawOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
  const opacityContent = useSpring(rawOpacity, {
    stiffness: 200,
    damping: 20,
    mass: 2.5,
  })

  const scaleContent = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5])

  const blurContent = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [10, 0, 0, 10])

  return {
    scrollYProgress,
    translateContent,
    opacityContent,
    scaleContent,
    blurContent,
  }
}
