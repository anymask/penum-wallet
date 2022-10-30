import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAccountsSelector } from '.';
import { routesPath } from '../utils';
import {
  selectRedirectToAccountPage,
  selectSelectedAccount,
  selectState,
} from '../ui/redux';
import { RootWrapperAccount } from '../ui/containers';

export const RootAccounts = () => {
  const navigate = useNavigate();

  const state = useAccountsSelector(selectState);
  const selectedAccount = useAccountsSelector(selectSelectedAccount);
  const isRedirect = useAccountsSelector(selectRedirectToAccountPage);

  useEffect(() => {
    if (!isRedirect) return;

    if (selectedAccount.name && isRedirect) return navigate(routesPath.HOME);

    if (!state.isInitialized) return navigate(routesPath.WELCOME);
    if (state.isInitialized && !state.isLocked)
      return navigate(routesPath.SEED_PHRASE_RULES);
    if (state.isInitialized && state.isLocked)
      return navigate(routesPath.LOGIN);
  }, [state.isInitialized, state.isLocked, selectedAccount, isRedirect]);

  return (
    <RootWrapperAccount>
      <Outlet />
    </RootWrapperAccount>
  );
};
