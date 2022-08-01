import { Button } from "react-bootstrap";

import { motion } from "framer-motion";

import { whileHover } from "../animations";

const CalculateButton = ({ calculate }) => {
  return (
    <>
      <div className="text-center">
        <motion.div variants={whileHover} initial="hidden" animate="show">
          <Button className="calc" onClick={calculate}>
            Calculate
          </Button>
        </motion.div>
      </div>
    </>
  );
};

export default CalculateButton;
