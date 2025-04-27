import * as TaskManager from 'expo-task-manager';
import * as Location from 'expo-location';

export const LOCATION_TASK_NAME = 'background-location-task';

TaskManager.defineTask(LOCATION_TASK_NAME, ({ data, error }: { data?: { locations: Location.LocationObject[] }, error?: Error }) => {
  if (error) {
    console.error('Location Task Error:', error);
    return;
  }
  if (data && data.locations) {
    const { locations } = data;
    console.log('New locations:', locations);
    if (locations.length > 0) {
      const latestLocation = locations[0];
      console.log('Current Location:', latestLocation.coords.latitude, latestLocation.coords.longitude);
    }
  }
});
