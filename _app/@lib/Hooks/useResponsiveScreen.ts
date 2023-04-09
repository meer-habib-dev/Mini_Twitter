import {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';
interface Props {
  window: {
    width: number;
  };
}
const useResponsiveScreen = () => {
  const [screenWidth, setScreenWidth] = useState(
    Dimensions.get('window').width,
  );
  useEffect(() => {
    const onChange = ({window}: Props) => {
      setScreenWidth(window.width);
    };

    Dimensions.addEventListener('change', onChange);

    // return () => Dimensions.removeEventListener('change', onChange);
  }, []);

  const isScreenSmall = screenWidth < 375;
  const isScreenMedium = screenWidth >= 375 && screenWidth < 768;
  const isScreenLarge = screenWidth >= 768 && screenWidth < 1024;
  const isScreenXLarge = screenWidth >= 1024;

  return {
    screenWidth,
    isScreenSmall,
    isScreenMedium,
    isScreenLarge,
    isScreenXLarge,
  };
};

export default useResponsiveScreen;
