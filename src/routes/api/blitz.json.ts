// import { getNation } from '$lib/utils/api';

/** @type {import('@sveltejs/kit').RequestHandler} */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function get({ url }) {
	try {
		const nationID = url.searchParams.get('id');
		// if (!nationID) return { body: { error: 'No Nation ID Provided ' } };
		// const nation = await getNation(nationID);
    // if (!nation) return { body: { error: 'No Nation Found' } };
    const data = await fetch(`https://blitzapi.jb2k4.repl.co/raids?key=omegalol&id=${nationID}&min_infra=5000`)
		return { body: { data: await data.json() } };
	} catch (e) {
		console.error(e);
		return {
			status: 400,
			body: { error: e.message }
		};
	}
}
