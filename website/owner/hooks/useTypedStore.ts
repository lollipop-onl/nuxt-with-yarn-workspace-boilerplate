import { useContext } from '@nuxtjs/composition-api';
import { DefineRootStore } from '@lollipop-onl/vuex-typesafe-helper';
import { Store as RootStore } from '@/store';

type TypedStore = DefineRootStore<RootStore>;

export const useTypedStore = (): TypedStore => {
  const { store } = useContext();

  return store;
};
