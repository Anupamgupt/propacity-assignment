import { configureStore } from "@reduxjs/toolkit";
import filmReducer from "./FilmSlice"
import peopleReducer from "./PeopleSlice"
import planetReducer from "./PlanetSlice"
import vehicleReducer from "./VehiclesSlice"
import speciesReducer from "./SpeciesSlice"
import starshipReducer from "./StarshipSlice"
import sidebarReducer from "./SidebarSlice"
import sidebarContentReducer from "./SidebarContentSlice"
import menuReducer from "./MenuSlice"


const Store = configureStore({
    reducer:{
        films:filmReducer,
        planets:planetReducer,
        people:peopleReducer,
        vehicle:vehicleReducer,
        species:speciesReducer,
        starship:starshipReducer,
        sidebar:sidebarReducer,
        sideContent:sidebarContentReducer,
        menu:menuReducer,
    }
})


export default Store