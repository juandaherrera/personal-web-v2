.PHONY: install dev build start lint format check ci clean

install:
	npm install

dev:
	npm run dev

build:
	npm run build

start:
	npm run start

lint:
	npm run lint

format:
	npm run format

check:
	npm run check

ci:
	npm run check

clean:
	rm -rf .next
