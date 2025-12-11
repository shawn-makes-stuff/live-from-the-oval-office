# Live from the Oval Office

An in-browser, choose-your-own-interview that remixes real presidential quotes. You play the moderator; the game responds with branching dialogue pulled from `dialogues.json`, while rolling news tickers come from `news.json`. Scores track authoritarian drift via per-option metrics.

## Quick start
- Open `index.html` in your browser (no build step).
- Sound is optional; toggle mute in the UI.

## Content & data
- Dialogue nodes live in `dialogues.json` with real quote sources and per-option score fields (`pressAttack`, `realityDenial`, `authoritarianBend`, `normRespect`, `driftScore`).
- Satirical-but-plausible headline snippets live in `news.json`; the ticker pulls from this list at runtime.

## Contributing
- Keep quotes real and include sources.
- Preserve ASCII in data files.
- For new headlines, keep them reality-adjacent with a light absurdist edge.
