.PHONY: install dev build start lint format check ci clean typecheck pre-commit

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

typecheck:
	npm run typecheck

pre-commit:
	pre-commit install
	pre-commit run --all-files
