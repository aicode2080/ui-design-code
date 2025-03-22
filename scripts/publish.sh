#!/bin/bash

set -e

echo "大前端ui库系统发布"

git fetch --all --tags
packageVersion=$(git describe --tags $(git rev-list --tags --max-count=1))
packageVersion=${packageVersion:1}

echo "Use package version: ${packageVersion}"

yarn install
yarn generate:index
yarn build
yarn publish --new-version $packageVersion --no-git-tag-version
yarn chromatic --project-token=${CHROMATIC_TOKEN} --auto-accept-changes
