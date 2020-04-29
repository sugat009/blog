#!/bin/bash
# shellcheck disable=SC2164
cd frontend

# 1. Build the frontend
npm run build

# 2. Move files at the build root inside a root subdirectory
mkdir -p build/root
# shellcheck disable=SC2010
for file in $(ls build | grep -E -v '^(index\.html|static|root)$'); do
    mv "build/$file" build/root;
done

# shellcheck disable=SC2103
cd ..

# shellcheck disable=SC2164
cd backend

# Activate virtualenvironment
# shellcheck disable=SC1090
# shellcheck disable=SC2154
source $DJANGO_ONE_VE;

# 3. Build the backend
python manage.py collectstatic --no-input;

# deactivate virtualenv
deactivate

# Go back
cd ..
