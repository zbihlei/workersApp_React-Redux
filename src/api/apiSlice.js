import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001'}),
    tagTypes: ['Workers'],
    endpoints: builder => ({
        getWorkers: builder.query({
            query: () => '/workers',
            providesTags: ['Workers']
        }),
        deleteWorker: builder.mutation({
            query: id=>({
                url: `/workers/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Workers']
        }),
        createWorker: builder.mutation({
            query: client =>({
                url: '/workers/',
                method: 'POST',
                body: client
            }),
            invalidatesTags: ['Workers']
        }),
        getFilters: builder.query({
            query: ()=>'/filters'
        })
    })
});

export const {useGetWorkersQuery, useDeleteWorkerMutation, useCreateWorkerMutation, useGetFiltersQuery} = apiSlice;