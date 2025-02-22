/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as GNBLayoutImport } from './routes/_GNBLayout'
import { Route as IndexImport } from './routes/index'
import { Route as LoginIndexImport } from './routes/login/index'
import { Route as GNBLayoutPublishIndexImport } from './routes/_GNBLayout/publish/index'
import { Route as GNBLayoutProblemIndexImport } from './routes/_GNBLayout/problem/index'
import { Route as GNBLayoutProblemSetIndexImport } from './routes/_GNBLayout/problem-set/index'
import { Route as GNBLayoutComponentIndexImport } from './routes/_GNBLayout/component/index'
import { Route as GNBLayoutPublishSearchIndexImport } from './routes/_GNBLayout/publish/search/index'
import { Route as GNBLayoutProblemRegisterIndexImport } from './routes/_GNBLayout/problem/register/index'
import { Route as GNBLayoutProblemProblemIdIndexImport } from './routes/_GNBLayout/problem/$problemId/index'
import { Route as GNBLayoutProblemSetProblemSetIdIndexImport } from './routes/_GNBLayout/problem-set/$problemSetId/index'
import { Route as GNBLayoutPublishRegisterPublishDateIndexImport } from './routes/_GNBLayout/publish/register/$publishDate/index'

// Create/Update Routes

const GNBLayoutRoute = GNBLayoutImport.update({
  id: '/_GNBLayout',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const LoginIndexRoute = LoginIndexImport.update({
  id: '/login/',
  path: '/login/',
  getParentRoute: () => rootRoute,
} as any)

const GNBLayoutPublishIndexRoute = GNBLayoutPublishIndexImport.update({
  id: '/publish/',
  path: '/publish/',
  getParentRoute: () => GNBLayoutRoute,
} as any)

const GNBLayoutProblemIndexRoute = GNBLayoutProblemIndexImport.update({
  id: '/problem/',
  path: '/problem/',
  getParentRoute: () => GNBLayoutRoute,
} as any)

const GNBLayoutProblemSetIndexRoute = GNBLayoutProblemSetIndexImport.update({
  id: '/problem-set/',
  path: '/problem-set/',
  getParentRoute: () => GNBLayoutRoute,
} as any)

const GNBLayoutComponentIndexRoute = GNBLayoutComponentIndexImport.update({
  id: '/component/',
  path: '/component/',
  getParentRoute: () => GNBLayoutRoute,
} as any)

const GNBLayoutPublishSearchIndexRoute =
  GNBLayoutPublishSearchIndexImport.update({
    id: '/publish/search/',
    path: '/publish/search/',
    getParentRoute: () => GNBLayoutRoute,
  } as any)

const GNBLayoutProblemRegisterIndexRoute =
  GNBLayoutProblemRegisterIndexImport.update({
    id: '/problem/register/',
    path: '/problem/register/',
    getParentRoute: () => GNBLayoutRoute,
  } as any)

const GNBLayoutProblemProblemIdIndexRoute =
  GNBLayoutProblemProblemIdIndexImport.update({
    id: '/problem/$problemId/',
    path: '/problem/$problemId/',
    getParentRoute: () => GNBLayoutRoute,
  } as any)

const GNBLayoutProblemSetProblemSetIdIndexRoute =
  GNBLayoutProblemSetProblemSetIdIndexImport.update({
    id: '/problem-set/$problemSetId/',
    path: '/problem-set/$problemSetId/',
    getParentRoute: () => GNBLayoutRoute,
  } as any)

const GNBLayoutPublishRegisterPublishDateIndexRoute =
  GNBLayoutPublishRegisterPublishDateIndexImport.update({
    id: '/publish/register/$publishDate/',
    path: '/publish/register/$publishDate/',
    getParentRoute: () => GNBLayoutRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_GNBLayout': {
      id: '/_GNBLayout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof GNBLayoutImport
      parentRoute: typeof rootRoute
    }
    '/login/': {
      id: '/login/'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginIndexImport
      parentRoute: typeof rootRoute
    }
    '/_GNBLayout/component/': {
      id: '/_GNBLayout/component/'
      path: '/component'
      fullPath: '/component'
      preLoaderRoute: typeof GNBLayoutComponentIndexImport
      parentRoute: typeof GNBLayoutImport
    }
    '/_GNBLayout/problem-set/': {
      id: '/_GNBLayout/problem-set/'
      path: '/problem-set'
      fullPath: '/problem-set'
      preLoaderRoute: typeof GNBLayoutProblemSetIndexImport
      parentRoute: typeof GNBLayoutImport
    }
    '/_GNBLayout/problem/': {
      id: '/_GNBLayout/problem/'
      path: '/problem'
      fullPath: '/problem'
      preLoaderRoute: typeof GNBLayoutProblemIndexImport
      parentRoute: typeof GNBLayoutImport
    }
    '/_GNBLayout/publish/': {
      id: '/_GNBLayout/publish/'
      path: '/publish'
      fullPath: '/publish'
      preLoaderRoute: typeof GNBLayoutPublishIndexImport
      parentRoute: typeof GNBLayoutImport
    }
    '/_GNBLayout/problem-set/$problemSetId/': {
      id: '/_GNBLayout/problem-set/$problemSetId/'
      path: '/problem-set/$problemSetId'
      fullPath: '/problem-set/$problemSetId'
      preLoaderRoute: typeof GNBLayoutProblemSetProblemSetIdIndexImport
      parentRoute: typeof GNBLayoutImport
    }
    '/_GNBLayout/problem/$problemId/': {
      id: '/_GNBLayout/problem/$problemId/'
      path: '/problem/$problemId'
      fullPath: '/problem/$problemId'
      preLoaderRoute: typeof GNBLayoutProblemProblemIdIndexImport
      parentRoute: typeof GNBLayoutImport
    }
    '/_GNBLayout/problem/register/': {
      id: '/_GNBLayout/problem/register/'
      path: '/problem/register'
      fullPath: '/problem/register'
      preLoaderRoute: typeof GNBLayoutProblemRegisterIndexImport
      parentRoute: typeof GNBLayoutImport
    }
    '/_GNBLayout/publish/search/': {
      id: '/_GNBLayout/publish/search/'
      path: '/publish/search'
      fullPath: '/publish/search'
      preLoaderRoute: typeof GNBLayoutPublishSearchIndexImport
      parentRoute: typeof GNBLayoutImport
    }
    '/_GNBLayout/publish/register/$publishDate/': {
      id: '/_GNBLayout/publish/register/$publishDate/'
      path: '/publish/register/$publishDate'
      fullPath: '/publish/register/$publishDate'
      preLoaderRoute: typeof GNBLayoutPublishRegisterPublishDateIndexImport
      parentRoute: typeof GNBLayoutImport
    }
  }
}

// Create and export the route tree

interface GNBLayoutRouteChildren {
  GNBLayoutComponentIndexRoute: typeof GNBLayoutComponentIndexRoute
  GNBLayoutProblemSetIndexRoute: typeof GNBLayoutProblemSetIndexRoute
  GNBLayoutProblemIndexRoute: typeof GNBLayoutProblemIndexRoute
  GNBLayoutPublishIndexRoute: typeof GNBLayoutPublishIndexRoute
  GNBLayoutProblemSetProblemSetIdIndexRoute: typeof GNBLayoutProblemSetProblemSetIdIndexRoute
  GNBLayoutProblemProblemIdIndexRoute: typeof GNBLayoutProblemProblemIdIndexRoute
  GNBLayoutProblemRegisterIndexRoute: typeof GNBLayoutProblemRegisterIndexRoute
  GNBLayoutPublishSearchIndexRoute: typeof GNBLayoutPublishSearchIndexRoute
  GNBLayoutPublishRegisterPublishDateIndexRoute: typeof GNBLayoutPublishRegisterPublishDateIndexRoute
}

const GNBLayoutRouteChildren: GNBLayoutRouteChildren = {
  GNBLayoutComponentIndexRoute: GNBLayoutComponentIndexRoute,
  GNBLayoutProblemSetIndexRoute: GNBLayoutProblemSetIndexRoute,
  GNBLayoutProblemIndexRoute: GNBLayoutProblemIndexRoute,
  GNBLayoutPublishIndexRoute: GNBLayoutPublishIndexRoute,
  GNBLayoutProblemSetProblemSetIdIndexRoute:
    GNBLayoutProblemSetProblemSetIdIndexRoute,
  GNBLayoutProblemProblemIdIndexRoute: GNBLayoutProblemProblemIdIndexRoute,
  GNBLayoutProblemRegisterIndexRoute: GNBLayoutProblemRegisterIndexRoute,
  GNBLayoutPublishSearchIndexRoute: GNBLayoutPublishSearchIndexRoute,
  GNBLayoutPublishRegisterPublishDateIndexRoute:
    GNBLayoutPublishRegisterPublishDateIndexRoute,
}

const GNBLayoutRouteWithChildren = GNBLayoutRoute._addFileChildren(
  GNBLayoutRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '': typeof GNBLayoutRouteWithChildren
  '/login': typeof LoginIndexRoute
  '/component': typeof GNBLayoutComponentIndexRoute
  '/problem-set': typeof GNBLayoutProblemSetIndexRoute
  '/problem': typeof GNBLayoutProblemIndexRoute
  '/publish': typeof GNBLayoutPublishIndexRoute
  '/problem-set/$problemSetId': typeof GNBLayoutProblemSetProblemSetIdIndexRoute
  '/problem/$problemId': typeof GNBLayoutProblemProblemIdIndexRoute
  '/problem/register': typeof GNBLayoutProblemRegisterIndexRoute
  '/publish/search': typeof GNBLayoutPublishSearchIndexRoute
  '/publish/register/$publishDate': typeof GNBLayoutPublishRegisterPublishDateIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '': typeof GNBLayoutRouteWithChildren
  '/login': typeof LoginIndexRoute
  '/component': typeof GNBLayoutComponentIndexRoute
  '/problem-set': typeof GNBLayoutProblemSetIndexRoute
  '/problem': typeof GNBLayoutProblemIndexRoute
  '/publish': typeof GNBLayoutPublishIndexRoute
  '/problem-set/$problemSetId': typeof GNBLayoutProblemSetProblemSetIdIndexRoute
  '/problem/$problemId': typeof GNBLayoutProblemProblemIdIndexRoute
  '/problem/register': typeof GNBLayoutProblemRegisterIndexRoute
  '/publish/search': typeof GNBLayoutPublishSearchIndexRoute
  '/publish/register/$publishDate': typeof GNBLayoutPublishRegisterPublishDateIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/_GNBLayout': typeof GNBLayoutRouteWithChildren
  '/login/': typeof LoginIndexRoute
  '/_GNBLayout/component/': typeof GNBLayoutComponentIndexRoute
  '/_GNBLayout/problem-set/': typeof GNBLayoutProblemSetIndexRoute
  '/_GNBLayout/problem/': typeof GNBLayoutProblemIndexRoute
  '/_GNBLayout/publish/': typeof GNBLayoutPublishIndexRoute
  '/_GNBLayout/problem-set/$problemSetId/': typeof GNBLayoutProblemSetProblemSetIdIndexRoute
  '/_GNBLayout/problem/$problemId/': typeof GNBLayoutProblemProblemIdIndexRoute
  '/_GNBLayout/problem/register/': typeof GNBLayoutProblemRegisterIndexRoute
  '/_GNBLayout/publish/search/': typeof GNBLayoutPublishSearchIndexRoute
  '/_GNBLayout/publish/register/$publishDate/': typeof GNBLayoutPublishRegisterPublishDateIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | ''
    | '/login'
    | '/component'
    | '/problem-set'
    | '/problem'
    | '/publish'
    | '/problem-set/$problemSetId'
    | '/problem/$problemId'
    | '/problem/register'
    | '/publish/search'
    | '/publish/register/$publishDate'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | ''
    | '/login'
    | '/component'
    | '/problem-set'
    | '/problem'
    | '/publish'
    | '/problem-set/$problemSetId'
    | '/problem/$problemId'
    | '/problem/register'
    | '/publish/search'
    | '/publish/register/$publishDate'
  id:
    | '__root__'
    | '/'
    | '/_GNBLayout'
    | '/login/'
    | '/_GNBLayout/component/'
    | '/_GNBLayout/problem-set/'
    | '/_GNBLayout/problem/'
    | '/_GNBLayout/publish/'
    | '/_GNBLayout/problem-set/$problemSetId/'
    | '/_GNBLayout/problem/$problemId/'
    | '/_GNBLayout/problem/register/'
    | '/_GNBLayout/publish/search/'
    | '/_GNBLayout/publish/register/$publishDate/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  GNBLayoutRoute: typeof GNBLayoutRouteWithChildren
  LoginIndexRoute: typeof LoginIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  GNBLayoutRoute: GNBLayoutRouteWithChildren,
  LoginIndexRoute: LoginIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_GNBLayout",
        "/login/"
      ]
    },
    "/": {
      "filePath": "index.ts"
    },
    "/_GNBLayout": {
      "filePath": "_GNBLayout.tsx",
      "children": [
        "/_GNBLayout/component/",
        "/_GNBLayout/problem-set/",
        "/_GNBLayout/problem/",
        "/_GNBLayout/publish/",
        "/_GNBLayout/problem-set/$problemSetId/",
        "/_GNBLayout/problem/$problemId/",
        "/_GNBLayout/problem/register/",
        "/_GNBLayout/publish/search/",
        "/_GNBLayout/publish/register/$publishDate/"
      ]
    },
    "/login/": {
      "filePath": "login/index.tsx"
    },
    "/_GNBLayout/component/": {
      "filePath": "_GNBLayout/component/index.tsx",
      "parent": "/_GNBLayout"
    },
    "/_GNBLayout/problem-set/": {
      "filePath": "_GNBLayout/problem-set/index.tsx",
      "parent": "/_GNBLayout"
    },
    "/_GNBLayout/problem/": {
      "filePath": "_GNBLayout/problem/index.tsx",
      "parent": "/_GNBLayout"
    },
    "/_GNBLayout/publish/": {
      "filePath": "_GNBLayout/publish/index.tsx",
      "parent": "/_GNBLayout"
    },
    "/_GNBLayout/problem-set/$problemSetId/": {
      "filePath": "_GNBLayout/problem-set/$problemSetId/index.tsx",
      "parent": "/_GNBLayout"
    },
    "/_GNBLayout/problem/$problemId/": {
      "filePath": "_GNBLayout/problem/$problemId/index.tsx",
      "parent": "/_GNBLayout"
    },
    "/_GNBLayout/problem/register/": {
      "filePath": "_GNBLayout/problem/register/index.tsx",
      "parent": "/_GNBLayout"
    },
    "/_GNBLayout/publish/search/": {
      "filePath": "_GNBLayout/publish/search/index.tsx",
      "parent": "/_GNBLayout"
    },
    "/_GNBLayout/publish/register/$publishDate/": {
      "filePath": "_GNBLayout/publish/register/$publishDate/index.tsx",
      "parent": "/_GNBLayout"
    }
  }
}
ROUTE_MANIFEST_END */
