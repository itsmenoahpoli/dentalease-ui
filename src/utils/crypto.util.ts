import CryptoJS from "crypto-js";

const SECRET_KEY = import.meta.env.VITE_APP_SECRET_PASSPHRASE as string;

export const encryptData = (data: any) => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
};

export const decryptData = (encrypted: string) => {
  const bytes = CryptoJS.AES.decrypt(encrypted, SECRET_KEY);
  const decrypted = bytes.toString(CryptoJS.enc.Utf8);

  return JSON.parse(decrypted);
};

export const secureStoreStorage = {
  serialize: (state: any) => {
    try {
      const encryptedState = encryptData(state);
      return encryptedState;
    } catch (e) {
      console.error("Failed to encrypt state", e);
    }
  },
  deserialize: (str: string) => {
    const decryptedState = decryptData(str);

    return decryptedState;
  },
};
