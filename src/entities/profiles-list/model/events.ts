import {createEvent} from "effector";

export interface Profile {
    id: number;
    name: string;
    gender: string;
    birthdate: string;
    city: string;
}

export const addProfile = createEvent()
export const deleteProfile = createEvent<number>()
export const updateProfileName = createEvent<{id: number, name: string}>()
export const updateProfileGender = createEvent<{id: number, gender: string}>()
export const updateProfileBirthdate = createEvent<{id: number, birthdate: string}>()
export const updateProfileCity = createEvent<{id: number, city: string}>()
export const clearInputs = createEvent()
export const setNewName = createEvent<string>()
export const setNewGender = createEvent<string>()
export const setNewBirthdate = createEvent<string>()
export const setNewCity = createEvent<string>()
