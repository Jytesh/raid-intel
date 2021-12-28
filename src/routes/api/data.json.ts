import { getFriendlyAlliances } from '$lib/utils';
import { getNation, getNations } from '$lib/utils/api';

/** @type {import('@sveltejs/kit').RequestHandler} */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function get({ query }) {
	try {
		const nationID = query.get('id');
		if (!nationID) return { body: { error: 'No Nation ID Provided ' } };
		const nation = await getNation(nationID);
		if (!nation) return { body: { error: 'No Nation Found' } };
		const data = await getNations(nation.id, getFriendlyAlliances(nation), nation.score);
		return { body: { data } };
	} catch (e) {
		console.error(e);
		return {
			status: 400,
			body: { error: e.message }
		};
	}
}
