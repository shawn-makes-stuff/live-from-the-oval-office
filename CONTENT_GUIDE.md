# Content guide

All player answers are **real, on-the-record quotes** from American politicians. Most are Donald Trump (the player is the President), but any US political figure works when it fits the question -- add `"who": "JD Vance"` to the option for the record (it is not shown in-game; the source link identifies the speaker). Omit `who` for Trump. No invented "moderate" lines. If a tame real quote does not exist for a beat, use a real deflection ("I don't know anything about it", "We'll see what happens", "A lot of people are saying...") and score it low-to-mid.

## Files
- `data/topics/<topic>.js` - one topic per file, calls `registerTopic({...})`.
- `data/core.js` - openings, final question, meltdown interrupt, endings.
- `data/news.js` - ticker headlines.
- Add a new topic: drop a file in `data/topics/` and add a `<script>` tag in `index.html`.

## Topic schema
```js
registerTopic({
  id: "tariffs",              // lowercase snake, used as node-id prefix
  title: "Trade War",         // shown in chyron
  entry: "tariffs_intro",     // first node
  nodes: [
    {
      id: "tariffs_intro",    // must start with "<topic>_"
      prompt: "Moderator question. Must logically follow the answer that led here.",
      options: [
        {
          text: "Verbatim quote (trim with ... allowed, <= 240 chars).",
          source: "https://...",           // primary or major outlet; verified
          date: "2025-04-02",              // YYYY-MM-DD or YYYY-MM
          score: 7,                        // 0-10 fascism points
          cat: "power",                    // see categories
          next: "tariffs_liberation",      // node id or "NEXT_TOPIC"
          who: "JD Vance"                  // optional; omit for Trump
        }
      ]
    }
  ]
});
```

## Categories (`cat`)
`press` `truth` `elections` `power` `violence` `dehumanization` `cronyism` `strongman`

## Scoring rubric (0-10)
- 0-2 tame / procedural / genuine deflection
- 3-5 spin, misleading, self-aggrandizing, mild norm erosion
- 6-8 attacks on press/courts/opponents, reality denial, dehumanizing language
- 9-10 explicit calls for violence, ignoring courts, indefinite power, ending elections

## Tree shape per topic
- `<topic>_intro` with 3-4 options, each leading to its **own** follow-up node.
- Follow-ups have 3-4 options (up to 6 stored; the game shows at most 4 per question, always including a low and a high scorer); each goes to a depth-3 node or `NEXT_TOPIC`.
- At least two lines of questioning reach depth 3. Aim for 7-12 nodes per topic.
- Every node mixes severities: at least one option <= 3 and one >= 7.

## Validate
```
node tools/validate.js
```
