import { createContext, useState } from "react";

export const PlacesContext = createContext({
    places: [],
    setPlaces: () => {}
})