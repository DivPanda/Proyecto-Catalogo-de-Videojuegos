const API_URL = import.meta.env.VITE_API_URL;

export const getGames = async () => {
  try {
    if (!API_URL) {
      throw new Error("La variable de entorno VITE_API_URL no está definida.");
    }
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Error al obtener los datos de la API");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en getGames:", error);
    return [];
  }
};
