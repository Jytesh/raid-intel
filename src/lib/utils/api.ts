import { GraphQLClient } from 'graphql-request';
import { getSdk } from '$lib/gql';
import type { GetNationsDataQuery } from '$lib/gql';
import type { LootMethod } from '.';

type BaseNation = GetNationsDataQuery['nations']['data'][number];
interface Nation extends BaseNation {
	calculated_looted_money?: {
		value: number;
		string: string;
		method: LootMethod;
	};
}
const apiClient = getSdk(
	new GraphQLClient(`${process.env['API_URL']}?api_key=${process.env['API_KEY']}`)
);
if (!global.cache) {
	global.cache = new Map<string, Nation>();
}
const cache: Map<string, Nation | Nation[]> = global.cache;

export async function getNation(id: number): Promise<Nation> {
	let nation = cache.get(String(id));
	if (nation && !Array.isArray(nation)) return nation;
	const data = await apiClient.getNation({ nationID: id });
	nation = data.nations.data[0];
	if (nation) cache.set(String(id), nation);
	return nation;
}

export async function getNations(
	nationID: string,
	friendlyAlliances: string[],
	score: number
): Promise<Nation[]> {
	let nations = cache.get(`${nationID}-nations`);
	if (nations && Array.isArray(nations)) return nations;
	// War Range
	const min_score = score * 1; // actually 0.75
	const max_score = score * 1.5;

	nations = [];
	let cursor = 0;
	for (let i = 0; i <= 5; i++) {
		// Limit to 5 iterations
		const data = (
			await apiClient.getNationsData({ min_score, max_score, page: cursor })
		)
		const collected = data.nations.data.filter((x) => !friendlyAlliances.includes(x.alliance_id));
		cursor = data.nations.paginatorInfo.currentPage + 1
		nations.push(...collected);
		if (!data.nations.paginatorInfo.hasMorePages) break;
	}

	cache.set(`${nationID}-nations`, nations);
	return nations;
}

export type { Nation };
