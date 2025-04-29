export default function useGeolocation() {
  const isGeolocationAvailable = window && !!window.navigator?.geolocation;

  return {
    isAvailable: isGeolocationAvailable,
    getPosition,
  };

  async function getPosition(): Promise<GeolocationPosition> {
    return new Promise(function (resolve, reject) {
      window.navigator?.geolocation.getCurrentPosition(
        (position) => {
          resolve(position);
        },
        (error) => {
          reject(error);
        },
      );
    });
  }
}
