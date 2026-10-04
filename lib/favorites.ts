import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = '@virsa_favorites';

export async function getFavorites(): Promise<string[]> {
  try {
    const value = await AsyncStorage.getItem(KEY);
    return value ? JSON.parse(value) : [];
  } catch {
    return [];
  }
}

export async function isFavorite(id: string): Promise<boolean> {
  const favorites = await getFavorites();
  return favorites.includes(id);
}

export async function toggleFavorite(id: string): Promise<boolean> {
  const favorites = await getFavorites();
  const next = favorites.includes(id)
    ? favorites.filter((item) => item !== id)
    : [...favorites, id];
  await AsyncStorage.setItem(KEY, JSON.stringify(next));
  return next.includes(id);
}