import { client } from '@/sanity/lib/client';
import { NAVIGATION_QUERY } from '@/sanity/lib/queries';
import { NAVIGATION_QUERYResult } from '@/sanity.types';

export async function fetchSanityNavigationData(): Promise<NAVIGATION_QUERYResult> {
    const data = await client.fetch<NAVIGATION_QUERYResult>(NAVIGATION_QUERY);
    return data;
}