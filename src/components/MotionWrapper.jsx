import { motion } from "framer-motion";
import { useEnableMotion } from "../hooks/useEnableMotion";

export function MotionWrapper({
  as = "div",
  exception = false,
  initial,
  animate,
  transition,
  variants,
  children,
  whileInView,
  viewport,
  key,
  className = "",
  ...rest
}) {
  const enableMotion = useEnableMotion(exception);
  const Component = as; // allows <section>, <div>, etc.

  if (!enableMotion) {
    // render normal element
    return (
      <Component className={className} {...rest}>
        {children}
      </Component>
    );
  }

  // render motion-enabled version
  const MotionComponent = motion[as] || motion.div;
  return (
    <MotionComponent
      initial={initial}
      animate={animate}
      transition={transition}
      variants={variants}
      whileInView={whileInView}
      viewport={viewport}
      className={className}
      key={key}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
}
