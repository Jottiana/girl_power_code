import { motion } from 'framer-motion';

const AnimatedHeader = () => {
  const title = "Girl Power Code";
  
  // Génère un tableau d'objets pour chaque lettre avec un identifiant unique
  const letters = title.split("").map((letter, i) => ({ letter, id: `${letter}-${i}` }));

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const letterAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <motion.h1
      style={{ display: 'flex', gap: '5px', fontSize: '2rem', color: '#ff66cc' }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map(({ letter, id }) => (
        <motion.span
          key={id} // Utilise `id` plutôt que `index` comme clé unique
          variants={letterAnimation}
          style={{ display: 'inline-block' }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default AnimatedHeader;
