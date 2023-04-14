// import {useEffect, useState} from 'react';
// import {MMKV} from 'react-native-mmkv';

// export const storage = new MMKV();
// export const useLocalStorage = (key: string) => {
//   // const [user, setUser] = useMMKVStorage('user', storage, 'robert');
//   const [value, setValue] = useState<string | null>(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const getValue = async () => {
//       try {
//         const data: string | null | undefined = await storage.getStringAsync(
//           key,
//         );
//         data && setValue(data);
//         console.log('storage data', key, data);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     getValue();
//   }, [key]);
//   console.log('log');
//   const saveValue = async (data: string) => {
//     try {
//       await storage.setStringAsync(key, data);
//       setValue(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const removeValue = async () => {
//     try {
//       await storage.removeItem(key);
//       setValue(null);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return {value, saveValue, removeValue, isLoading};
// };
