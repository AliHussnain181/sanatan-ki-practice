import { createClient } from "next-sanity";




export const client = createClient({
    dataset:process.env.NEXT_PUBLIC_SANITY_DATASET,
    projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    // token:process.env.NEXT_TOKEN,
    useCdn:true,
    apiVersion: '2021-10-21',
})