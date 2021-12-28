import type { Nation } from './api';
export function getFriendlyAlliances(nation: Nation): string[] {
	const alliances: string[] = [nation.alliance_id];
	alliances.concat(...nation.alliance.received_treaties.map((x) => x.alliance1?.id));
	alliances.concat(...nation.alliance.sent_treaties.map((x) => x.alliance2?.id));
	return Array.from(new Set(alliances.filter(Boolean))); // Remove Duplicates and filter out empty string
}
