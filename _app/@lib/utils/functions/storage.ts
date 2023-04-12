import {MMKVLoader} from 'react-native-mmkv-storage';

const storage = new MMKVLoader().initialize();

const getValue = async (key: string) => {
  try {
    return await storage.getStringAsync(key);
  } catch (error) {
    console.error(error);
  } finally {
  }
};

const saveValue = async (key: string, data: string) => {
  try {
    await storage.setStringAsync(key, data);
  } catch (error) {
    console.error(error);
  }
};

const removeValue = async (key: string) => {
  try {
    await storage.removeItem(key);
  } catch (error) {
    console.error(error);
  }
};
export default {getValue, saveValue, removeValue};
