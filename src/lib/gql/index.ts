import type { GraphQLClient } from 'graphql-request';
import type * as Dom from 'graphql-request/dist/types.dom';
import { gql } from 'graphql-request';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string with format `Y-m-d`, e.g. `2011-05-23`. */
  Date: any;
  /** A datetime string with format `Y-m-d H:i:s`, e.g. `2018-05-23 13:43:32`. */
  DateTime: any;
  /** A datetime and timezone string in ISO 8601 format `Y-m-dTH:i:sO`, e.g. `2020-04-20T13:53:12+02:00`. */
  DateTimeTz: any;
};

/** Schema For https://api.politicsandwar.com/graphql */
export type Alliance = {
  __typename?: 'Alliance';
  acceptmem?: Maybe<Scalars['Boolean']>;
  acronym?: Maybe<Scalars['String']>;
  /** This field will return null unless you are in this alliance and have access to view its bank */
  aluminum?: Maybe<Scalars['Float']>;
  /** All bank transactions within the last 14 days, this field will return null unless you are in this alliance and have access to view its bank */
  bankrecs?: Maybe<Array<Maybe<Bankrec>>>;
  /** This field will return null unless you are in this alliance and have access to view its bank */
  bauxite?: Maybe<Scalars['Float']>;
  /** This field will return null unless you are in this alliance and have access to view its bank */
  coal?: Maybe<Scalars['Float']>;
  color?: Maybe<Scalars['String']>;
  flag?: Maybe<Scalars['String']>;
  /** This field will return null unless you are in this alliance and have access to view its bank */
  food?: Maybe<Scalars['Float']>;
  forumlink?: Maybe<Scalars['String']>;
  /** This field will return null unless you are in this alliance and have access to view its bank */
  gasoline?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['ID']>;
  irclink?: Maybe<Scalars['String']>;
  /** This field will return null unless you are in this alliance and have access to view its bank */
  iron?: Maybe<Scalars['Float']>;
  /** This field will return null unless you are in this alliance and have access to view its bank */
  lead?: Maybe<Scalars['Float']>;
  /** This field will return null unless you are in this alliance and have access to view its bank */
  money?: Maybe<Scalars['Float']>;
  /** This field will return null unless you are in this alliance and have access to view its bank */
  munitions?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  nations: Array<Nation>;
  /** This field will return null unless you are in this alliance and have access to view its bank */
  oil?: Maybe<Scalars['Float']>;
  received_treaties: Array<Treaty>;
  score?: Maybe<Scalars['Float']>;
  sent_treaties: Array<Treaty>;
  /** This field will return null unless you are in this alliance and have access to view its bank */
  steel?: Maybe<Scalars['Float']>;
  /** All tax records within the last 14 days, this field will return null unless you are in this alliance and have access to view its bank */
  taxrecs?: Maybe<Array<Maybe<Bankrec>>>;
  /** This field will return null unless you are in this alliance and have access to view its bank */
  uranium?: Maybe<Scalars['Float']>;
};

/** A paginated list of Alliance items. */
export type AlliancePaginator = {
  __typename?: 'AlliancePaginator';
  /** A list of Alliance items. */
  data: Array<Alliance>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export enum AlliancePosition {
  Applicant = 'APPLICANT',
  Heir = 'HEIR',
  Leader = 'LEADER',
  Member = 'MEMBER',
  Noalliance = 'NOALLIANCE',
  Officer = 'OFFICER'
}

export enum AttackType {
  Airvair = 'AIRVAIR',
  Airvinfra = 'AIRVINFRA',
  Airvmoney = 'AIRVMONEY',
  Airvships = 'AIRVSHIPS',
  Airvsoldiers = 'AIRVSOLDIERS',
  Airvtanks = 'AIRVTANKS',
  Allianceloot = 'ALLIANCELOOT',
  Fortify = 'FORTIFY',
  Ground = 'GROUND',
  Missile = 'MISSILE',
  Missilefail = 'MISSILEFAIL',
  Naval = 'NAVAL',
  Nuke = 'NUKE',
  Nukefail = 'NUKEFAIL',
  Peace = 'PEACE',
  Victory = 'VICTORY'
}

export type Bankrec = {
  __typename?: 'Bankrec';
  aluminum?: Maybe<Scalars['Float']>;
  bauxite?: Maybe<Scalars['Float']>;
  coal?: Maybe<Scalars['Float']>;
  date?: Maybe<Scalars['DateTime']>;
  food?: Maybe<Scalars['Float']>;
  gasoline?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['ID']>;
  iron?: Maybe<Scalars['Float']>;
  lead?: Maybe<Scalars['Float']>;
  money?: Maybe<Scalars['Float']>;
  munitions?: Maybe<Scalars['Float']>;
  note?: Maybe<Scalars['String']>;
  oil?: Maybe<Scalars['Float']>;
  /** ID of the Banking Nation */
  pid?: Maybe<Scalars['ID']>;
  rid?: Maybe<Scalars['ID']>;
  rtype?: Maybe<Scalars['Int']>;
  sid?: Maybe<Scalars['ID']>;
  steel?: Maybe<Scalars['Float']>;
  stype?: Maybe<Scalars['Int']>;
  tax_id?: Maybe<Scalars['ID']>;
  uranium?: Maybe<Scalars['Float']>;
};

export type City = {
  __typename?: 'City';
  airforcebase?: Maybe<Scalars['Int']>;
  aluminumrefinery?: Maybe<Scalars['Int']>;
  bank?: Maybe<Scalars['Int']>;
  barracks?: Maybe<Scalars['Int']>;
  bauxitemine?: Maybe<Scalars['Int']>;
  coalmine?: Maybe<Scalars['Int']>;
  coalpower?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['Date']>;
  drydock?: Maybe<Scalars['Int']>;
  factory?: Maybe<Scalars['Int']>;
  farm?: Maybe<Scalars['Int']>;
  gasrefinery?: Maybe<Scalars['Int']>;
  hospital?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  infrastructure?: Maybe<Scalars['Float']>;
  ironmine?: Maybe<Scalars['Int']>;
  land?: Maybe<Scalars['Float']>;
  leadmine?: Maybe<Scalars['Int']>;
  mall?: Maybe<Scalars['Int']>;
  munitionsfactory?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  nuclearpower?: Maybe<Scalars['Int']>;
  oilpower?: Maybe<Scalars['Int']>;
  oilwell?: Maybe<Scalars['Int']>;
  policestation?: Maybe<Scalars['Int']>;
  powered?: Maybe<Scalars['Boolean']>;
  recyclingcenter?: Maybe<Scalars['Int']>;
  stadium?: Maybe<Scalars['Int']>;
  steelmill?: Maybe<Scalars['Int']>;
  subway?: Maybe<Scalars['Int']>;
  supermarket?: Maybe<Scalars['Int']>;
  uramine?: Maybe<Scalars['Int']>;
  windpower?: Maybe<Scalars['Int']>;
};

export type Color = {
  __typename?: 'Color';
  bloc_name?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  turn_bonus?: Maybe<Scalars['Int']>;
};

export type Nation = {
  __typename?: 'Nation';
  adv_city_planning?: Maybe<Scalars['Boolean']>;
  adv_engineering_corps?: Maybe<Scalars['Boolean']>;
  aircraft?: Maybe<Scalars['Int']>;
  alliance?: Maybe<Alliance>;
  alliance_id?: Maybe<Scalars['ID']>;
  alliance_position?: Maybe<AlliancePosition>;
  /** This field will return null unless you are an officer or higher in the same alliance as this nation, and this nation allows alliance bank access */
  aluminum?: Maybe<Scalars['Float']>;
  arable_land_agency?: Maybe<Scalars['Boolean']>;
  armss?: Maybe<Scalars['Boolean']>;
  /** This field will return null unless you are an officer or higher in the same alliance as this nation, and this nation allows alliance bank access */
  bauxite?: Maybe<Scalars['Float']>;
  bauxitew?: Maybe<Scalars['Boolean']>;
  beigeturns?: Maybe<Scalars['Int']>;
  cfce?: Maybe<Scalars['Boolean']>;
  cia?: Maybe<Scalars['Boolean']>;
  cities: Array<City>;
  city_planning?: Maybe<Scalars['Boolean']>;
  clinical_research_center?: Maybe<Scalars['Boolean']>;
  /** This field will return null unless you are an officer or higher in the same alliance as this nation, and this nation allows alliance bank access */
  coal?: Maybe<Scalars['Float']>;
  color?: Maybe<Scalars['String']>;
  continent?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  /** All defensive wars within the last 14 days */
  defensive_wars: Array<War>;
  dompolicy?: Maybe<Scalars['String']>;
  egr?: Maybe<Scalars['Boolean']>;
  espionage_available?: Maybe<Scalars['Boolean']>;
  flag?: Maybe<Scalars['String']>;
  /** This field will return null unless you are an officer or higher in the same alliance as this nation, and this nation allows alliance bank access */
  food?: Maybe<Scalars['Float']>;
  /** This field will return null unless you are an officer or higher in the same alliance as this nation, and this nation allows alliance bank access */
  gasoline?: Maybe<Scalars['Float']>;
  green_tech?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  /** This field will return null unless you are an officer or higher in the same alliance as this nation, and this nation allows alliance bank access */
  iron?: Maybe<Scalars['Float']>;
  irond?: Maybe<Scalars['Boolean']>;
  ironw?: Maybe<Scalars['Boolean']>;
  itc?: Maybe<Scalars['Boolean']>;
  last_active?: Maybe<Scalars['DateTime']>;
  /** This field will return null unless you are an officer or higher in the same alliance as this nation, and this nation allows alliance bank access */
  lead?: Maybe<Scalars['Float']>;
  leader_name?: Maybe<Scalars['String']>;
  massirr?: Maybe<Scalars['Boolean']>;
  missiles?: Maybe<Scalars['Int']>;
  mlp?: Maybe<Scalars['Boolean']>;
  /** This field will return null unless you are an officer or higher in the same alliance as this nation, and this nation allows alliance bank access */
  money?: Maybe<Scalars['Float']>;
  moon_landing?: Maybe<Scalars['Boolean']>;
  /** This field will return null unless you are an officer or higher in the same alliance as this nation, and this nation allows alliance bank access */
  munitions?: Maybe<Scalars['Float']>;
  nation_name?: Maybe<Scalars['String']>;
  nrf?: Maybe<Scalars['Boolean']>;
  nukes?: Maybe<Scalars['Int']>;
  num_cities?: Maybe<Scalars['Int']>;
  /** All offensive wars within the last 14 days */
  offensive_wars: Array<War>;
  /** This field will return null unless you are an officer or higher in the same alliance as this nation, and this nation allows alliance bank access */
  oil?: Maybe<Scalars['Float']>;
  pirate_economy?: Maybe<Scalars['Boolean']>;
  population?: Maybe<Scalars['Int']>;
  projects?: Maybe<Scalars['Int']>;
  propb?: Maybe<Scalars['Boolean']>;
  /** All received bank transactions within the last 14 days */
  received_bankrecs: Array<Bankrec>;
  recycling_initiative?: Maybe<Scalars['Boolean']>;
  score?: Maybe<Scalars['Float']>;
  /** All sent bank transactions within the last 14 days */
  sent_bankrecs: Array<Bankrec>;
  ships?: Maybe<Scalars['Int']>;
  soldiers?: Maybe<Scalars['Int']>;
  space_program?: Maybe<Scalars['Boolean']>;
  specialized_police_training?: Maybe<Scalars['Boolean']>;
  /** This field will return null unless you are an officer or higher in the same alliance as this nation, and this nation allows alliance bank access */
  spies?: Maybe<Scalars['Int']>;
  spy_satellite?: Maybe<Scalars['Boolean']>;
  /** This field will return null unless you are an officer or higher in the same alliance as this nation, and this nation allows alliance bank access */
  steel?: Maybe<Scalars['Float']>;
  tanks?: Maybe<Scalars['Int']>;
  telecom_satellite?: Maybe<Scalars['Boolean']>;
  treasures: Array<Treasure>;
  uap?: Maybe<Scalars['Boolean']>;
  /** This field will return null unless you are an officer or higher in the same alliance as this nation, and this nation allows alliance bank access */
  uranium?: Maybe<Scalars['Float']>;
  vds?: Maybe<Scalars['Boolean']>;
  vmode?: Maybe<Scalars['Int']>;
  warpolicy?: Maybe<Scalars['String']>;
};

/** A paginated list of Nation items. */
export type NationPaginator = {
  __typename?: 'NationPaginator';
  /** A list of Nation items. */
  data: Array<Nation>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** Pagination information about the corresponding list of items. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** Count of nodes in current request. */
  count?: Maybe<Scalars['Int']>;
  /** Current page of request. */
  currentPage?: Maybe<Scalars['Int']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Last page in connection. */
  lastPage?: Maybe<Scalars['Int']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** Total number of node in connection. */
  total?: Maybe<Scalars['Int']>;
};

/** Pagination information about the corresponding list of items. */
export type PaginatorInfo = {
  __typename?: 'PaginatorInfo';
  /** Total count of available items in the page. */
  count: Scalars['Int'];
  /** Current pagination page. */
  currentPage: Scalars['Int'];
  /** Index of first item in the current page. */
  firstItem?: Maybe<Scalars['Int']>;
  /** If collection has more pages. */
  hasMorePages: Scalars['Boolean'];
  /** Index of last item in the current page. */
  lastItem?: Maybe<Scalars['Int']>;
  /** Last page number of the collection. */
  lastPage: Scalars['Int'];
  /** Number of items per page in the collection. */
  perPage: Scalars['Int'];
  /** Total items available in the collection. */
  total: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  alliances?: Maybe<AlliancePaginator>;
  colors?: Maybe<Array<Maybe<Color>>>;
  nations?: Maybe<NationPaginator>;
  tradeprices?: Maybe<Array<Maybe<Tradeprice>>>;
  trades?: Maybe<Array<Maybe<Trade>>>;
  treasures?: Maybe<Array<Maybe<Treasure>>>;
  wars?: Maybe<Array<Maybe<War>>>;
};


export type QueryAlliancesArgs = {
  first: Scalars['Int'];
  id?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryNationsArgs = {
  alliance_id?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  alliance_position?: InputMaybe<Scalars['Int']>;
  cities?: InputMaybe<Scalars['Int']>;
  color?: InputMaybe<Scalars['String']>;
  created_after?: InputMaybe<Scalars['Date']>;
  first: Scalars['Int'];
  id?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  leader_name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  max_cities?: InputMaybe<Scalars['Int']>;
  max_score?: InputMaybe<Scalars['Float']>;
  min_cities?: InputMaybe<Scalars['Int']>;
  min_score?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  nation_name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  page?: InputMaybe<Scalars['Int']>;
  vmode?: InputMaybe<Scalars['Boolean']>;
};


export type QueryTradepricesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryTradesArgs = {
  accepted?: InputMaybe<Scalars['Boolean']>;
  buy_or_sell?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  nation_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  offer_resource?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<TradeType>;
};


export type QueryWarsArgs = {
  active?: InputMaybe<Scalars['Boolean']>;
  alliance_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  days_ago?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nation_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type Trade = {
  __typename?: 'Trade';
  accepted?: Maybe<Scalars['Boolean']>;
  /** buy/sell */
  buy_or_sell?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  date_accepted?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  offer_amount?: Maybe<Scalars['Int']>;
  offer_resource?: Maybe<Scalars['String']>;
  receiver?: Maybe<Nation>;
  /** ID of the Nation Buying */
  rid?: Maybe<Scalars['ID']>;
  sender?: Maybe<Nation>;
  /** ID of the Nation Selling */
  sid?: Maybe<Scalars['ID']>;
  /** Total in $ for the Trade */
  total?: Maybe<Scalars['Int']>;
  type?: Maybe<TradeType>;
};

export enum TradeType {
  Alliance = 'ALLIANCE',
  Global = 'GLOBAL',
  Personal = 'PERSONAL'
}

export type Tradeprice = {
  __typename?: 'Tradeprice';
  aluminum?: Maybe<Scalars['Float']>;
  bauxite?: Maybe<Scalars['Float']>;
  coal?: Maybe<Scalars['Float']>;
  credits?: Maybe<Scalars['Float']>;
  date?: Maybe<Scalars['Date']>;
  food?: Maybe<Scalars['Float']>;
  gasoline?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['ID']>;
  iron?: Maybe<Scalars['Float']>;
  lead?: Maybe<Scalars['Float']>;
  munitions?: Maybe<Scalars['Float']>;
  oil?: Maybe<Scalars['Float']>;
  steel?: Maybe<Scalars['Float']>;
  uranium?: Maybe<Scalars['Float']>;
};

export type Treasure = {
  __typename?: 'Treasure';
  bonus?: Maybe<Scalars['Int']>;
  color?: Maybe<Scalars['String']>;
  continent?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nation?: Maybe<Nation>;
  spawndate?: Maybe<Scalars['Date']>;
};

export type Treaty = {
  __typename?: 'Treaty';
  alliance1?: Maybe<Alliance>;
  alliance2?: Maybe<Alliance>;
  date?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['ID']>;
  treaty_type?: Maybe<Scalars['String']>;
  turns_left?: Maybe<Scalars['Int']>;
};

export type War = {
  __typename?: 'War';
  airsuperiority?: Maybe<Scalars['ID']>;
  att_aircraft_killed?: Maybe<Scalars['Int']>;
  att_alliance_id?: Maybe<Scalars['ID']>;
  att_alum_used?: Maybe<Scalars['Int']>;
  att_fortify?: Maybe<Scalars['Boolean']>;
  att_gas_used?: Maybe<Scalars['Float']>;
  att_infra_destroyed?: Maybe<Scalars['Float']>;
  att_infra_destroyed_value?: Maybe<Scalars['Float']>;
  att_missiles_used?: Maybe<Scalars['Int']>;
  att_money_looted?: Maybe<Scalars['Float']>;
  att_mun_used?: Maybe<Scalars['Float']>;
  att_nukes_used?: Maybe<Scalars['Int']>;
  att_resistance?: Maybe<Scalars['Int']>;
  att_ships_killed?: Maybe<Scalars['Int']>;
  att_soldiers_killed?: Maybe<Scalars['Int']>;
  att_steel_used?: Maybe<Scalars['Int']>;
  att_tanks_killed?: Maybe<Scalars['Int']>;
  attacker?: Maybe<Nation>;
  attacks: Array<WarAttack>;
  attid?: Maybe<Scalars['ID']>;
  attpeace?: Maybe<Scalars['Boolean']>;
  attpoints?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['DateTime']>;
  def_aircraft_killed?: Maybe<Scalars['Int']>;
  def_alliance_id?: Maybe<Scalars['ID']>;
  def_alum_used?: Maybe<Scalars['Int']>;
  def_fortify?: Maybe<Scalars['Boolean']>;
  def_gas_used?: Maybe<Scalars['Float']>;
  def_infra_destroyed?: Maybe<Scalars['Float']>;
  def_infra_destroyed_value?: Maybe<Scalars['Float']>;
  def_missiles_used?: Maybe<Scalars['Int']>;
  def_money_looted?: Maybe<Scalars['Float']>;
  def_mun_used?: Maybe<Scalars['Float']>;
  def_nukes_used?: Maybe<Scalars['Int']>;
  def_resistance?: Maybe<Scalars['Int']>;
  def_ships_killed?: Maybe<Scalars['Int']>;
  def_soldiers_killed?: Maybe<Scalars['Int']>;
  def_steel_used?: Maybe<Scalars['Int']>;
  def_tanks_killed?: Maybe<Scalars['Int']>;
  defender?: Maybe<Nation>;
  defid?: Maybe<Scalars['ID']>;
  defpeace?: Maybe<Scalars['Boolean']>;
  defpoints?: Maybe<Scalars['Int']>;
  groundcontrol?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
  navalblockade?: Maybe<Scalars['ID']>;
  reason?: Maybe<Scalars['String']>;
  turnsleft?: Maybe<Scalars['Int']>;
  war_type?: Maybe<WarType>;
  winner?: Maybe<Scalars['ID']>;
};

export type WarAttack = {
  __typename?: 'WarAttack';
  att_gas_used?: Maybe<Scalars['Float']>;
  att_mun_used?: Maybe<Scalars['Float']>;
  attcas1?: Maybe<Scalars['Int']>;
  attcas2?: Maybe<Scalars['Int']>;
  city_infra_before?: Maybe<Scalars['Float']>;
  cityid?: Maybe<Scalars['ID']>;
  date?: Maybe<Scalars['DateTime']>;
  def_gas_used?: Maybe<Scalars['Float']>;
  def_mun_used?: Maybe<Scalars['Float']>;
  defcas1?: Maybe<Scalars['Int']>;
  defcas2?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  improvementslost?: Maybe<Scalars['Int']>;
  infra_destroyed_value?: Maybe<Scalars['Float']>;
  infradestroyed?: Maybe<Scalars['Float']>;
  loot_info?: Maybe<Scalars['String']>;
  moneystolen?: Maybe<Scalars['Float']>;
  resistance_eliminated?: Maybe<Scalars['Int']>;
  success?: Maybe<Scalars['Int']>;
  type?: Maybe<AttackType>;
  victor?: Maybe<Scalars['ID']>;
};

export enum WarType {
  Attrition = 'ATTRITION',
  Ordinary = 'ORDINARY',
  Raid = 'RAID'
}

export type GetNationQueryVariables = Exact<{
  nationID: Scalars['Int'];
}>;


export type GetNationQuery = { __typename?: 'Query', nations?: { __typename?: 'NationPaginator', data: Array<{ __typename?: 'Nation', id?: string | null | undefined, nation_name?: string | null | undefined, leader_name?: string | null | undefined, alliance_id?: string | null | undefined, score?: number | null | undefined, soldiers?: number | null | undefined, tanks?: number | null | undefined, aircraft?: number | null | undefined, ships?: number | null | undefined, nukes?: number | null | undefined, alliance?: { __typename?: 'Alliance', id?: string | null | undefined, sent_treaties: Array<{ __typename?: 'Treaty', alliance1?: { __typename?: 'Alliance', id?: string | null | undefined } | null | undefined, alliance2?: { __typename?: 'Alliance', id?: string | null | undefined } | null | undefined }>, received_treaties: Array<{ __typename?: 'Treaty', alliance1?: { __typename?: 'Alliance', id?: string | null | undefined } | null | undefined, alliance2?: { __typename?: 'Alliance', id?: string | null | undefined } | null | undefined }> } | null | undefined }> } | null | undefined };

export type GetNationsDataQueryVariables = Exact<{
  min_score: Scalars['Float'];
  max_score: Scalars['Float'];
}>;


export type GetNationsDataQuery = { __typename?: 'Query', nations?: { __typename?: 'NationPaginator', data: Array<{ __typename?: 'Nation', id?: string | null | undefined, nation_name?: string | null | undefined, leader_name?: string | null | undefined, alliance_id?: string | null | undefined, score?: number | null | undefined, soldiers?: number | null | undefined, tanks?: number | null | undefined, aircraft?: number | null | undefined, ships?: number | null | undefined, nukes?: number | null | undefined, alliance?: { __typename?: 'Alliance', id?: string | null | undefined, sent_treaties: Array<{ __typename?: 'Treaty', alliance1?: { __typename?: 'Alliance', id?: string | null | undefined } | null | undefined, alliance2?: { __typename?: 'Alliance', id?: string | null | undefined } | null | undefined }>, received_treaties: Array<{ __typename?: 'Treaty', alliance1?: { __typename?: 'Alliance', id?: string | null | undefined } | null | undefined, alliance2?: { __typename?: 'Alliance', id?: string | null | undefined } | null | undefined }> } | null | undefined }> } | null | undefined };


export const GetNationDocument = gql`
    query getNation($nationID: Int!) {
  nations(first: 1, id: [$nationID]) {
    data {
      id
      nation_name
      leader_name
      alliance_id
      alliance {
        id
        sent_treaties {
          alliance1 {
            id
          }
          alliance2 {
            id
          }
        }
        received_treaties {
          alliance1 {
            id
          }
          alliance2 {
            id
          }
        }
      }
      score
      soldiers
      tanks
      aircraft
      ships
      nukes
    }
  }
}
    `;
export const GetNationsDataDocument = gql`
    query getNationsData($min_score: Float!, $max_score: Float!) {
  nations(first: 500, min_score: $min_score, max_score: $max_score) {
    data {
      id
      nation_name
      leader_name
      alliance_id
      alliance {
        id
        sent_treaties {
          alliance1 {
            id
          }
          alliance2 {
            id
          }
        }
        received_treaties {
          alliance1 {
            id
          }
          alliance2 {
            id
          }
        }
      }
      score
      soldiers
      tanks
      aircraft
      ships
      nukes
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getNation(variables: GetNationQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetNationQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetNationQuery>(GetNationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getNation');
    },
    getNationsData(variables: GetNationsDataQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetNationsDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetNationsDataQuery>(GetNationsDataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getNationsData');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;