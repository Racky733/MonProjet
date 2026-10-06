#!/bin/bash
git pull --rebase
git add .
git commit -m "Auto: $(date '+%Y-%m-%d %H:%M')" || exit 0
git push
