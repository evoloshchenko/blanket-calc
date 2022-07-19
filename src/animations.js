export const popup = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.75,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.75,
    },
  },
};

export const imageAnimation = {
  hidden: { scale: 1.5, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { ease: "easeInOut", duration: 0.75 },
  },
};

export const whileHover = {
  hidden: { scale: 1 },
  show: {
    scale: 1.2,
    transition: { ease: "backIn", duration: 0.75 },
  },
};
