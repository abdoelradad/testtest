import Link from "next/link";
import { motion } from "framer-motion";
import { slide, scale } from "../../anim";

export default function Index({
  data,
  isActive,
  setSelectedIndicator,
}: {
  data: any;
  isActive: boolean;
  setSelectedIndicator: any;
}) {
  const { title, href, index } = data;

  return (
    <motion.div
      className={""}
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className={""}
      ></motion.div>
      <Link href={href}>{title}</Link>
    </motion.div>
  );
}
