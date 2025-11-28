.PHONY: build deploy

build:
	hugo --minify

deploy: build
	cd public && \
	git init && \
	git add . && \
	git commit -m "Deploy site" && \
	git branch -M main && \
	git remote add origin https://github.com/avijit9/avijit9.github.io.git || git remote set-url origin https://github.com/avijit9/avijit9.github.io.git && \
	git push -f origin main

