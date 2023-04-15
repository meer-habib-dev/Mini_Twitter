import {MMKV} from 'react-native-mmkv';

const STORAGE_KEY_PREFIX = '@miniTwitter';
// const storage = new Object();
const storage = new MMKV();
const setStorageItem = async (key: any, value: any) => {
  const storageKey = `${STORAGE_KEY_PREFIX}:${key}`;
  storage.set(storageKey, value);
};

const getStorageItem = (key: any, type = 'str' || 'num' || 'bool') => {
  const storageKey = `${STORAGE_KEY_PREFIX}:${key}`;
  return type === 'str'
    ? storage.getString(storageKey)
    : type === 'num'
    ? storage.getNumber(storageKey)
    : storage.getBoolean(storageKey);
};

const updateStorageItem = (
  key: any,
  value: any,
  type = 'str' || 'num' || 'bool',
) => {
  const storageKey = `${STORAGE_KEY_PREFIX}:${key}`;
  const currentValue =
    type === 'str'
      ? storage.getString(storageKey)
      : type === 'num'
      ? storage.getNumber(storageKey)
      : storage.getBoolean(storageKey);
  const updatedValue = {...currentValue, ...value};
  storage.set(storageKey, updatedValue);
};

const deleteStorageItem = (key: any) => {
  const storageKey = `${STORAGE_KEY_PREFIX}:${key}`;
  storage.delete(storageKey);
};

setTimeout(() => {
  const storedTimestamp: number = getStorageItem('auth-token-timestamp', 'num');
  const elapsed = Date.now() - storedTimestamp;
  const hour = 500 * 60 * 60; // 30 min in milliseconds

  if (elapsed >= hour) {
    deleteStorageItem('auth-token');
    deleteStorageItem('auth-token-timestamp');
  }
}, 500 * 60 * 60);
export {setStorageItem, getStorageItem, updateStorageItem, deleteStorageItem};
