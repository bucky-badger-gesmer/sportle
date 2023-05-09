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
};

export type Nba = {
  __typename?: 'NBA';
  franchiseHistory: Maybe<NbaFranchiseHistory>;
  playerIndex: Maybe<Array<Maybe<NbaPlayerIndex>>>;
  /** @deprecated use playerIndex */
  players: Maybe<Array<Maybe<NbaPlayer>>>;
};

export type NbaFranchise = {
  __typename?: 'NbaFranchise';
  conferenceTitles: Maybe<Scalars['Int']>;
  divisionTitles: Maybe<Scalars['Int']>;
  endYear: Maybe<Scalars['String']>;
  games: Maybe<Scalars['Int']>;
  leagueId: Maybe<Scalars['String']>;
  leagueTitles: Maybe<Scalars['Int']>;
  losses: Maybe<Scalars['Int']>;
  playoffAppearances: Maybe<Scalars['Int']>;
  startYear: Maybe<Scalars['String']>;
  teamCity: Maybe<Scalars['String']>;
  teamId: Maybe<Scalars['ID']>;
  teamName: Maybe<Scalars['String']>;
  winPct: Maybe<Scalars['Float']>;
  wins: Maybe<Scalars['Int']>;
  years: Maybe<Scalars['Int']>;
};

export type NbaFranchiseHistory = {
  __typename?: 'NbaFranchiseHistory';
  defunctFranchises: Maybe<Array<Maybe<NbaFranchise>>>;
  franchises: Maybe<Array<Maybe<NbaFranchise>>>;
};

export type NbaPlayer = {
  __typename?: 'NbaPlayer';
  displayFirstLast: Maybe<Scalars['String']>;
  displayLastCommaFirst: Maybe<Scalars['String']>;
  fromYear: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  playerCode: Maybe<Scalars['String']>;
  playerSlug: Maybe<Scalars['String']>;
  toYear: Maybe<Scalars['String']>;
};

export type NbaPlayerIndex = {
  __typename?: 'NbaPlayerIndex';
  active: Maybe<Scalars['Boolean']>;
  career: Maybe<NbaPlayerIndexCareer>;
  college: Maybe<Scalars['String']>;
  country: Maybe<Scalars['String']>;
  draft: Maybe<NbaPlayerIndexDraft>;
  firstName: Maybe<Scalars['String']>;
  headlineStats: Maybe<NbaPlayerIndexHeadlineStats>;
  height: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  jerseyNumber: Maybe<Scalars['String']>;
  lastName: Maybe<Scalars['String']>;
  playerSlug: Maybe<Scalars['String']>;
  position: Maybe<Scalars['String']>;
  team: Maybe<NbaPlayerIndexTeamInfo>;
  weight: Maybe<Scalars['String']>;
};

export type NbaPlayerIndexCareer = {
  __typename?: 'NbaPlayerIndexCareer';
  fromYear: Maybe<Scalars['String']>;
  toYear: Maybe<Scalars['String']>;
};

export type NbaPlayerIndexDraft = {
  __typename?: 'NbaPlayerIndexDraft';
  pick: Maybe<Scalars['Int']>;
  round: Maybe<Scalars['Int']>;
  year: Maybe<Scalars['Int']>;
};

export type NbaPlayerIndexHeadlineStats = {
  __typename?: 'NbaPlayerIndexHeadlineStats';
  assists: Maybe<Scalars['Float']>;
  points: Maybe<Scalars['Float']>;
  rebounds: Maybe<Scalars['Float']>;
  timeFrame: Maybe<Scalars['String']>;
};

export type NbaPlayerIndexTeamInfo = {
  __typename?: 'NbaPlayerIndexTeamInfo';
  abbreviation: Maybe<Scalars['String']>;
  city: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  name: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  _: Maybe<Scalars['String']>;
  nba: Maybe<Nba>;
};

export type PlayerIndexQueryVariables = Exact<{ [key: string]: never; }>;


export type PlayerIndexQuery = { __typename?: 'Query', nba: { __typename?: 'NBA', playerIndex: Array<{ __typename?: 'NbaPlayerIndex', id: string | null, lastName: string | null, firstName: string | null, playerSlug: string | null, jerseyNumber: string | null, position: string | null, height: string | null, weight: string | null, college: string | null, country: string | null, active: boolean | null, team: { __typename?: 'NbaPlayerIndexTeamInfo', id: string | null, slug: string | null, city: string | null, name: string | null, abbreviation: string | null } | null, draft: { __typename?: 'NbaPlayerIndexDraft', year: number | null, round: number | null, pick: number | null } | null, headlineStats: { __typename?: 'NbaPlayerIndexHeadlineStats', points: number | null, rebounds: number | null, assists: number | null, timeFrame: string | null } | null, career: { __typename?: 'NbaPlayerIndexCareer', fromYear: string | null, toYear: string | null } | null } | null> | null } | null };
