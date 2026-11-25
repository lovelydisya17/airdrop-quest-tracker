# Airdrop Quest Tracker

Simple JSON tracker for airdrop quests and points. Edit `quests.json` with your own quests, then run the summary.

## Usage

```sh
node summary.mjs
```

## Quest fields

- `project` — project name
- `task` — what to do
- `points` — points the task is worth
- `done` — true when finished
- `due` — deadline, or null
- `notes` — anything else, for example a link to the quest page

Never put a private key, seed phrase, password, or API key in this file. It is a plain tracker, it never connects to any site.
