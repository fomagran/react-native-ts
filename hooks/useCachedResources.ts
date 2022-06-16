import { useEffect, useState } from "react";
import * as Font from "expo-font";

export default function useCachedResources() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
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
