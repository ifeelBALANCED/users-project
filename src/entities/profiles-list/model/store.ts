import {
    addProfile,
    clearInputs,
    deleteProfile,
    Profile,
    setNewBirthdate,
    setNewCity,
    setNewGender,
    setNewName,
    updateProfileBirthdate,
    updateProfileCity,
    updateProfileGender,
    updateProfileName
} from "./events";
import {createStore} from "effector";
import connectLocalStorage from "effector-localstorage";


type Store = {
    profiles: Profile[],
    newName: string,
    newGender: string,
    newBirthdate: string,
    newCity: string,
}

export const addProfilesList = (
    profiles: Profile[],
    name: string,
    gender: string,
    birthdate: string,
    city: string,
) => [
    ...profiles,
    {
        id: Math.max(0, Math.max(...profiles.map(({id}) => id))) + 1,
        name,
        gender,
        birthdate,
        city
    }
]

export const removeProfile = (profiles: Profile[], id: number) =>
    profiles.filter(profile => profile.id !== id)

export const updateName = (
    profiles: Profile[],
    id: number,
    name: string,
) => profiles.map(profile => ({
    ...profile,
    name: profile.id === id ? name : profile.name,
}))

export const updateGender = (
    profiles: Profile[],
    id: number,
    gender: string,
) => profiles.map(profile => ({
    ...profile,
    gender: profile.id === id ? gender : profile.gender,
}))

export const updateBirthdate = (
    profiles: Profile[],
    id: number,
    birthdate: string,
) => profiles.map(profile => ({
    ...profile,
    birthdate: profile.id === id ? birthdate : profile.birthdate,
}))

export const updateCity = (
    profiles: Profile[],
    id: number,
    city: string,
) => profiles.map(profile => ({
    ...profile,
    city: profile.id === id ? city : profile.city,
}))
const profilesLocalStorage = connectLocalStorage("profiles")
    .onError((err) => console.log(err))

export const $addFormValues = createStore<Store>(profilesLocalStorage.init({
    profiles: [],
    newName: "",
    newGender: "",
    newBirthdate: "",
    newCity: "",
}))
    .on(setNewName, (state, newName) => ({
        ...state,
        newName
    }))
    .on(setNewGender, (state, newGender) => ({
        ...state,
        newGender
    }))
    .on(setNewBirthdate, (state, newBirthdate) => ({
        ...state,
        newBirthdate
    }))
    .on(setNewCity, (state, newCity) => ({
        ...state,
        newCity
    }))
    .on(addProfile, (state) => ({
        ...state,
        profiles: addProfilesList(
            state.profiles,
            state.newName,
            state.newGender,
            state.newBirthdate,
            state.newCity
        ),
        newName: "",
        newGender: "",
        newBirthdate: "",
        newCity: "",
    }))
    .on(deleteProfile, (state, id) => ({
        ...state,
        profiles: removeProfile(state.profiles, id)
    }))
    .on(updateProfileName, (state, {
        id,
        name,
    }) => ({
        ...state,
        profiles: updateName(
            state.profiles,
            id,
            name,
        ),
    }))
    .on(updateProfileGender, (state, {
        id,
        gender,
    }) => ({
        ...state,
        profiles: updateGender(
            state.profiles,
            id,
            gender,
        ),
    }))
    .on(updateProfileBirthdate, (state, {
        id,
        birthdate,
    }) => ({
        ...state,
        profiles: updateBirthdate(
            state.profiles,
            id,
            birthdate,
        ),
    }))
    .on(updateProfileCity, (state, {
        id,
        city,
    }) => ({
        ...state,
        profiles: updateCity(
            state.profiles,
            id,
            city,
        ),
    }))

$addFormValues.reset(clearInputs)

$addFormValues.watch(profilesLocalStorage)
