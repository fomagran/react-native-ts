import { useEffect, useState } from "react";
import * as Font from "expo-font";
import { initWorkouts } from "../storage/workout";

export default function useCachedResources() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await initWorkouts();
        await Font.loadAsync({
          "anton-regular": require("../assets/fonts/Anton-Regular.ttf"),
          "fascinate-regular": require("../assets/fonts/Fascinate-Regular.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setIsLoadingComplete(true);
      }
    }

    loadResourcesAndDataAsync();
  }, [isLoadingComplete]);

  return isLoadingComplete;
}
