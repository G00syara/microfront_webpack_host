import { loadRemote, registerRemotes } from "@module-federation/enhanced/runtime";
import { lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";

const getMicroFrontendUrl = (scope: string) => {
  const remoteUrls: { [key: string]: string } = {
    app2: 'http://localhost:3001/remoteEntry.js',
    anyRemote: ''
  };
  return remoteUrls[scope];
};

export const useRemote = (scope: string, module: string) => {


  const remoteUrl = getMicroFrontendUrl(scope);

  const LazyComponent = lazy(async () => {
    registerRemotes([
      {
        name: scope,
        alias: scope,
        entry: remoteUrl,
        type: "script", 
      },
    ]);

    return loadRemote<{ default: any }>(`${scope}/${module}`, {
      from: 'runtime',
    }) as Promise<{ default: any }>;
  });

  return (props: any) => {
    return (
      <ErrorBoundary fallback={<p>Ой, произошла ошибка!</p>}>
        <LazyComponent {...props} />
      </ErrorBoundary>
    );
  };
};
