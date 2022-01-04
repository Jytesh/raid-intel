import type { Nation } from './api';
export function getFriendlyAlliances(nation: Nation): string[] {
	const alliances: string[] = [nation.alliance_id];
	alliances.concat(...nation.alliance.received_treaties.map((x) => x.alliance1?.id));
	alliances.concat(...nation.alliance.sent_treaties.map((x) => x.alliance2?.id));
	return Array.from(new Set(alliances.filter(Boolean))); // Remove Duplicates and filter out empty string
}

export enum LootMethod {
	WWL = 'Weighted War Loot',
	NDW = 'No Defensive Wars'
}

export function processNation(nation: Nation): Nation {
	const today = new Date();
	if (Array.isArray(nation.defensive_wars) && nation.defensive_wars.length > 0) {
		const wars = nation.defensive_wars.filter((x) => nation.id !== x.winner && Boolean(x.winner)); // Completed wars with attacker winning
		const value = wars
			.map((x) => {
				const warDate = new Date(x.date);
				const days = Math.floor((today.getTime() - warDate.getTime()) / (1000 * 60 * 60 * 24)); // Number of days attack was before
				const weight = Math.max(0.2, (10 - days) / 10); // Weight of war based on how long ago it was
				const moneyStolen = calculateMoneyStolen(nation, x);
				const money = Math.round(weight * moneyStolen);
				return money;
			})
			.sort((a, b) => b - a)[0];
		nation.calculated_looted_money = {
			value,
			string: value.toLocaleString(),
			method: LootMethod.WWL
		};
	} else {
		nation.calculated_looted_money = { value: 0, string: '0', method: LootMethod.NDW };
	}
	return nation;
}

type War = Nation['defensive_wars'][number];
function calculateMoneyStolen(nation: Nation, war: War): number {
	const cities = nation.cities.map((x) => x.id);
	const loot = war.attacks
		.map((attack) => {
			if (cities.includes(attack.cityid)) return attack.moneystolen;
			if (attack.cityid === '0' && attack.loot_info) {
				/* 
				Final Attack: 
				`${Winner Nation Name} won the war and looted 
				$${loot}, ${loot} Coal, ${loot} Oil, ${loot} Uranium, ${loot} Iron, ${loot} Bauxite, 
				${loot} Lead, ${loot} Gasoline, ${loot} Munitions, ${loot} Steel, ${loot} Aluminum, and ${loot} Food. 
				${Loser Nation Name} also lost ${perc} of the infrastructure in each of their cities.`
			*/
				if (
					attack.loot_info.length > 20 &&
					!attack.loot_info.includes(`${nation.nation_name} won the war`)
				) {
					// lol
					return attack.moneystolen;
				}
			}
			return 0;
		})
		.filter(Boolean)
		.reduce((a, b) => a + b, 0);
	return loot || 0;
}
