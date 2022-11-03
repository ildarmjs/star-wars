import { configureStore } from '@reduxjs/toolkit'
import { peopleApi } from '../services/PeopleService'

export const store = configureStore({
	reducer: {
		[peopleApi.reducerPath]: peopleApi.reducer,
	},
	middleware: getDefaultMiddllware => getDefaultMiddllware().concat(peopleApi.middleware)
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch