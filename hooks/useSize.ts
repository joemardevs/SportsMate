import { useEffect, useState } from "react";
import { useWindowDimensions } from "react-native";

/**
 * Hook to get the size based on the height of the screen
 * @returns size object with xs, sm, md, lg, xl
 */
const useSize = () => {
  const { width, height } = useWindowDimensions();
  const [size, setSize] = useState({
    xs: 0,
    sm: 0,
    md: 0,
    lg: 0,
    xl: 0,
  });

  const calculateSize = () => {
    setSize({
      xs: height * 0.01,
      sm: height * 0.015,
      md: height * 0.02,
      lg: height * 0.025,
      xl: height * 0.03,
    });
  };

  useEffect(() => {
    calculateSize();
  }, []);

  return size;
};

export default useSize;
