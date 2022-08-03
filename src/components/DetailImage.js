//Animations
import { motion } from "framer-motion";
import { imageAnimation } from "../animations";

const DetailImage = (props) => {
  return (
    <div className="text-center">
      <div className="overflow">
        <motion.img
          variants={imageAnimation}
          initial="hidden"
          animate="show"
          id={props.id}
          src={props.image}
          alt={props.alt}
        />
      </div>
    </div>
  );
};

export default DetailImage;
