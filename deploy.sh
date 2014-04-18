#!/bin/bash -e

cd ..
rake generate
cd -

[[ "$(basename $(pwd))" == '_deploy' ]] || { 
    echo Error
    exit -1;
}

cp -rf ../public/* .
git add --all
git commit -m "Site updated `date`"
git push

echo "Done"

