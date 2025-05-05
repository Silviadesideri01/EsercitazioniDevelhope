
import useCurrentLocation from "../CustomHooks/useCurrentLocation";

const LocationDisplay = () => {
  const { location, error, loading, getLocation } = useCurrentLocation();

  return (
    <div>
      <button onClick={getLocation}>Ottieni posizione attuale</button>

      {loading && <p>Caricamento...</p>}

      {error && <p style={{ color: 'red' }}>Errore: {error.message}</p>}

      {location && (
        <div>
          <p>Latitudine: {location.latitude}</p>
          <p>Longitudine: {location.longitude}</p>
        </div>
      )}
    </div>
  );
};

export default LocationDisplay;
