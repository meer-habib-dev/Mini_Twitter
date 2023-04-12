import {useEffect, useState} from 'react';
import {MMKVLoader} from 'react-native-mmkv-storage';
const storage = new MMKVLoader().initialize();
export const useLocalStorage = (key: string) => {
  const [value, setValue] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getValue = async () => {
      try {
        const data: string | null | undefined = await storage.getStringAsync(
          key,
        );
        data && setValue(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    getValue();
  }, [key]);

  const saveValue = async (data: string) => {
    try {
      await storage.setStringAsync(key, data);
      setValue(data);
    } catch (error) {
      console.error(error);
    }
  };

  const removeValue = async () => {
    try {
      await storage.removeItem(key);
      setValue(null);
    } catch (error) {
      console.error(error);
    }
  };

  return {value, saveValue, removeValue, isLoading};
};
