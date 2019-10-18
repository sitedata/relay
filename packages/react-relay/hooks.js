/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

'use strict';

const RelayEnvironmentProvider = require('./relay-experimental/RelayEnvironmentProvider');

const fetchQuery = require('./relay-experimental/fetchQuery');
const useFragment = require('./relay-experimental/useFragment');
const useLazyLoadQuery = require('./relay-experimental/useLazyLoadQuery');
const useLegacyPaginationFragment = require('./relay-experimental/useLegacyPaginationFragment');
const useRefetchableFragment = require('./relay-experimental/useRefetchableFragment');
const useRelayEnvironment = require('./relay-experimental/useRelayEnvironment');

const {graphql} = require('relay-runtime');

export type {
  FetchPolicy,
  LoadMoreFn,
  RefetchFn,
  RefetchFnDynamic,
} from 'relay-experimental';

/**
 * The public interface for Relay Hooks
 */
module.exports = {
  RelayEnvironmentProvider: RelayEnvironmentProvider,

  fetchQuery: fetchQuery,
  graphql: graphql,
  useFragment: useFragment,
  useLegacyPaginationFragment: useLegacyPaginationFragment,
  useLazyLoadQuery: useLazyLoadQuery,
  useRefetchableFragment: useRefetchableFragment,
  useRelayEnvironment: useRelayEnvironment,
};
