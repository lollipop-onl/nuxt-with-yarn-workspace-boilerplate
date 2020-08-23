import { DefineActionContext, DefineStoreModule } from '@lollipop-onl/vuex-typesafe-helper';

export type IState = {};

export const state = (): IState => ({});

export const getters = {};

export const mutations = {};

type Ctx = DefineActionContext<IState, typeof getters, typeof mutations>;

export const actions = {};

export type Store = DefineStoreModule<
  '',
  IState,
  typeof getters,
  typeof mutations,
  Omit<typeof actions, 'nuxtServerInit'>
>;
