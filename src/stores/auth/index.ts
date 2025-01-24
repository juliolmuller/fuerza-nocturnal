import createStore from 'zustand';
import { devtools } from 'zustand/middleware';

import actions from './auth.actions';
import initialState from './auth.state';
import { AuthStore } from './auth.types';

const useAuthStore = createStore<AuthStore>(
  devtools(
    (set, get) => ({
      ...initialState,
      ...actions(set, get),
    }),
    { name: 'auth' },
  ),
);

export default useAuthStore;
