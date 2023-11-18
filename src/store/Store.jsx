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
import dropReducer from "./DropSlice"
import modalReducer from "./ModalSlice"


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
        drop:dropReducer,
        modal:modalReducer
    }
})


export default Store