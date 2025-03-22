#!/usr/bin/env sh

set -e

yarn set version 1.22.19
yarn --version
yarn install --immutable 

yarn eslint
yarn typecheck
yarn test run

yarn chromatic --project-token=${CHROMATIC_TOKEN}