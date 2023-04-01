import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001'}),
    tagTypes: ['Clients'],
    endpoints: builder => ({
        getClients: builder.query({
            query: () => '/clients',
            providesTags: ['Clients']
        }),
        deleteClients: builder.mutation({
            query: id=>({
                url: `/clients/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Clients']
        }),
        createClient: builder.mutation({
            query: client =>({
                url: '/clients/',
                method: 'POST',
                body: client
            }),
            invalidatesTags: ['Clients']
        }),
        getFilters: builder.query({
            query: ()=>'/filters'
        })
    })
});

export const {useGetClientsQuery, useDeleteClientsMutation, useCreateClientMutation, useGetFiltersQuery} = apiSlice;