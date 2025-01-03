'use client';
/**
 *
 * React Context + Zustand Store for performant and non-re-rendering store
 *
 * @link https://tkdodo.eu/blog/zustand-and-react-context
 *
 */
import { createContext, memo, type PropsWithChildren, useState } from 'react';
import { createStore } from 'zustand';

import { INITIAL_STATE } from '@/jobs/constants';
import {
  type CreateContextStore,
  getContextIntials,
} from '@/utils/zustandContextHelpers';

type Integrations = typeof INITIAL_STATE;

type State = {
  integrations: Integrations;
};

const initial = Object.freeze({
  integrations: INITIAL_STATE,
});

const getInitial = getContextIntials(initial);

type Store = CreateContextStore<State>;

const useIntegrationStoreContext = () => {
  const [store] = useState(
    createStore<Store>((set) => ({
      initial,
      ...getInitial(),
      actions: {
        setIntegrations: (integrations) =>
          set((state) => ({
            integrations: { ...state.integrations, ...integrations },
          })),
        resetIntegrations: () => set(() => ({ integrations: INITIAL_STATE })),
      },
    })),
  );
  return store;
};

export const IntegrationStoreContext = createContext<
  ReturnType<typeof useIntegrationStoreContext> | undefined
>(undefined);

export const IntegrationStoreProvider = memo(
  ({ children }: PropsWithChildren) => {
    const value = useIntegrationStoreContext();
    return (
      <IntegrationStoreContext.Provider value={value}>
        {children}
      </IntegrationStoreContext.Provider>
    );
  },
);
IntegrationStoreProvider.displayName = 'IntegrationStoreProvider';
