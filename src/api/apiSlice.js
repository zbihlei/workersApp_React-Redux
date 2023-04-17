import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001'}),
    tagTypes: ['Workers', 'Filter'],
    endpoints: builder => ({
        getWorkers: builder.query({
            query: () => '/workers',
            providesTags: ['Workers', 'Filter']
        }),
        deleteWorker: builder.mutation({
            query: id=>({
                url: `/workers/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Workers', 'Filter']
        }),
        createWorker: builder.mutation({
            query: client =>({
                url: '/workers/',
                method: 'POST',
                body: client
            }),
            invalidatesTags: ['Workers', 'Filter']
        }),
        getFilters: builder.query({
            query: ()=>'/filters'
        }),
        getFilteredWorker: builder.query({
            query: (filter = '') => `/workers?position=${filter}`,
            providesTags: ['Filter']
        }),
        getHighSalary: builder.query({
            query: () => '/workers?salary_like=\\b[1-9][0-9]{3}\\b',
            providesTags: ['Filter']
        })
    })
});

export const {useGetWorkersQuery, 
            useDeleteWorkerMutation, 
            useCreateWorkerMutation, 
            useGetFiltersQuery, 
            useGetFilteredWorkerQuery,
            useGetHighSalaryQuery} = apiSlice;