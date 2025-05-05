/*Scrivere il gancio personalizzato useCurrentLocation, che utilizza l'API navigator.geolocation del browser
 per ottenere la posizione attuale dell'utente tramite il metodo incorporato getCurrentPosition.
Il gancio deve restituire la posizione attuale e una funzione per ottenere la posizione attuale, nonché gli stati di errore e di caricamento.*/

import { useState, useCallback } from "react";

const useCurrentLocation = (options = {}) => {
  const [location, setLocation] = useState(null); // { latitude, longitude }
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setError(new Error("Geolocation non supportata dal browser."));
      return;
    }

    setLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setLoading(false);
      },
      (err) => {
        setError(err);
        setLoading(false);
      },
      options
    );
  }, [options]);

  return { location, error, loading, getLocation };
};

export default useCurrentLocation;
