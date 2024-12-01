/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AboutIndexImport } from './routes/about/index'
import { Route as HomeIndexImport } from './routes/_home/index'
import { Route as AuthProfileIndexImport } from './routes/_auth/profile/index'

// Create/Update Routes

const AboutIndexRoute = AboutIndexImport.update({
  id: '/about/',
  path: '/about/',
  getParentRoute: () => rootRoute,
} as any)

const HomeIndexRoute = HomeIndexImport.update({
  id: '/_home/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const AuthProfileIndexRoute = AuthProfileIndexImport.update({
  id: '/_auth/profile/',
  path: '/profile/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_home/': {
      id: '/_home/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof HomeIndexImport
      parentRoute: typeof rootRoute
    }
    '/about/': {
      id: '/about/'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutIndexImport
      parentRoute: typeof rootRoute
    }
    '/_auth/profile/': {
      id: '/_auth/profile/'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof AuthProfileIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof HomeIndexRoute
  '/about': typeof AboutIndexRoute
  '/profile': typeof AuthProfileIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof HomeIndexRoute
  '/about': typeof AboutIndexRoute
  '/profile': typeof AuthProfileIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_home/': typeof HomeIndexRoute
  '/about/': typeof AboutIndexRoute
  '/_auth/profile/': typeof AuthProfileIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/about' | '/profile'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/about' | '/profile'
  id: '__root__' | '/_home/' | '/about/' | '/_auth/profile/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  HomeIndexRoute: typeof HomeIndexRoute
  AboutIndexRoute: typeof AboutIndexRoute
  AuthProfileIndexRoute: typeof AuthProfileIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  HomeIndexRoute: HomeIndexRoute,
  AboutIndexRoute: AboutIndexRoute,
  AuthProfileIndexRoute: AuthProfileIndexRoute,
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
        "/_home/",
        "/about/",
        "/_auth/profile/"
      ]
    },
    "/_home/": {
      "filePath": "_home/index.tsx"
    },
    "/about/": {
      "filePath": "about/index.tsx"
    },
    "/_auth/profile/": {
      "filePath": "_auth/profile/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */