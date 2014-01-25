#!/bin/sh

rake generate

cd public
jekyll serve
