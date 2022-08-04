// const { NEXT_PUBLIC_INFURA_KEY, NEXT_PUBLIC_CONTRACT_ADDRESS, NEXT_PUBLIC_NETWORK_ID } = process.env;

export const env = {
  INFURA_KEY: process.env.NEXT_PUBLIC_INFURA_KEY || '',
  // BACKEND_URL: NEXT_PUBLIC_BACKEND_URL || '',
  CONTRACT_ADDRESS: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || '',
  NETWORK_ID: process.env.NEXT_PUBLIC_NETWORK_ID || '4',
  CRYPTO_COMPARE_API_KEY: process.env.NEXT_PUBLIC_CRYPTO_COMPARE_API_KEY
};
