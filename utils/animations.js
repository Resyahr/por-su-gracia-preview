// animations.js (utility for shared animation variants)

export const containerVariants = {
    hidden: { opacity: 0, y: 30 }, // Reduce initial y displacement
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6, // Shortened duration
        ease: [0.42, 0, 0.58, 1], // Keep ease for smooth motion
        when: "beforeChildren",
        staggerChildren: 0.1, // Reduce stagger for quicker appearance of children
      },
    },
  };
  
  export const textVariants = {
    hidden: { opacity: 0, y: 10 }, // Slightly less movement for faster animation
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4, // Shorter animation duration
        ease: [0.42, 0, 0.58, 1], // Maintain the smooth ease
      },
    },
  };
  
  export const cardVariants = {
    hidden: { opacity: 0, y: 30 }, // Reduce the displacement for cards
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5, // Slightly faster
        ease: [0.42, 0, 0.58, 1], // Smooth entrance
      },
    },
  };

  export const cardLeftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  };
  
  export const cardRightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  };
  
  export const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 }, // Slight scaling effect for "pop-in"
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5, // Shorter duration for button animation
        ease: [0.42, 0, 0.58, 1], // Smooth and quick appearance
      },
    },
  };

  export const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, // Adjust to balance smoothness and speed
        ease: [0.42, 0, 0.58, 1],
      },
    },
  };

  export const mapVariants = {
    hidden: { opacity: 0, scale: 0.8 }, // Slight initial shrink
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1, // Slower for smoother scaling
        ease: [0.42, 0, 0.58, 1],
      },
    },
  };