import Layouts from './Layouts';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SvgAnimation } from '@/components/Animations';

const LoadingPage = () => {
  const [show, setShow] = useState(true);
  setTimeout(() => {
    setShow(false);
  }, 1100);

  return (
    <Layouts>
      <div className="relative flex h-screen w-full items-center justify-center">
        <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  className="text-center"
>
  <h1 className="text-7xl font-black tracking-[0.3em] text-primary-light">
    HANNN
  </h1>

  <div className="mx-auto mt-3 h-[2px] w-24 bg-primary-light" />
</motion.div>
      </div>
    </Layouts>
  );
};

export default LoadingPage;
