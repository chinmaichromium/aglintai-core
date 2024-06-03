// eslint-disable-next-line simple-import-sort/imports
import ErrorBoundary from '@components/Common/ErrorBoundary';
import { DevlinkMainProvider } from '@context/DevlinkContext';
import { PHProvider } from '../components/PostHog/postHog';
import { AuthProvider } from '../context/AuthContext/AuthContext';
import JobsProvider from '../context/JobsContext';
import ScreenSizeProvider from '../context/ResizeWindow/ResizeWindow';
import Theme from '../context/Theme/Theme';
import { QueryProvider } from '../queries';

const BuildProviderTree = (providers) => {
  return ({ children }) => {
    return providers.reduceRight((tree: any, Provider: any) => {
      return <Provider>{tree}</Provider>;
    }, children);
  };
};

const Providers = BuildProviderTree([
  PHProvider,
  ErrorBoundary,
  DevlinkMainProvider,
  Theme,
  ScreenSizeProvider,
  AuthProvider,
  QueryProvider,
  JobsProvider,
]);

export default Providers;
