#!/bin/sh

# git branch --merged is not an option in this case, since the merge strategy is 'rebase'
# Force-deletes all branches except for the currently checked-out branch and 'main' branch
git branch | grep -v '^\*' | grep -v main | xargs -n 1 git branch -D