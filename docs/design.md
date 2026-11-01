# Design

One page. If a change fights this document, change the document first.

## Aim
Someone hiring for an AI engineering role gives this site about 30 seconds. In that time they should see what Prateek builds, one piece of evidence that he builds it well, and how to reach him. Everything else stays quiet.

## Concept
Prateek's work is reading noisy logs and finding the one line that matters. The site borrows that idea once, in the hero: a short log excerpt where five lines match a pattern and one does not. That line is the only thing on the site ever marked with the highlighter colour. The rest is typography and space.

## Tokens

| Token | Light | Dark | Used for |
| --- | --- | --- | --- |
| paper | `#F7F8F6` | `#111315` | page background |
| ink | `#15181B` | `#E9EBE7` | text, borders on focus |
| ink-soft | `#4F565E` | `#A3AAB2` | secondary text |
| line | `#DCDFDA` | `#272B2F` | hairlines between rows |
| mark | `#FFE27A` | `#E3B341` | the highlighter: anomaly line, link hover |
| mark-ink | `#15181B` | `#111315` | text on top of mark |
| mark-wash | `#FFEFA8` | `#4A3B0F` | background wash behind the anomaly line |

Contrast: ink on paper and ink-soft on paper are above 7:1 in both themes; mark-ink on mark is above 9:1.

## Type
- Instrument Sans (variable, self-hosted) for everything.
- JetBrains Mono (variable, self-hosted) only for the log excerpt and code. Never for labels.
- Body 17px / 1.65, measure about 62 characters. Name and page titles 600 weight, tight tracking (-0.02em). Section headings 20px, 600, sentence case.
- No all-caps labels, no eyebrows above headings, no arrows appended to links, no middle-dot meta strings.

## Layout
- One column, 42rem wide, left aligned. Wider only for nothing.
- Lists are rows separated by hairlines, never cards.
- Section spacing is 5rem on desktop, 3.5rem on mobile.
- The header is solid (no blur), wordmark left and four links right. On narrow screens the links wrap under the wordmark; there is no hamburger.

## Motion
- Allowed properties: `transform` and `opacity`. Nothing else is animated, and never `filter`.
- One orchestrated moment: the log lines rise in once on load and the odd line gets its highlight. CSS only.
- Hover and focus changes are instant colour changes; links get the highlighter on hover.
- `prefers-reduced-motion` turns the load sequence off. No infinite animations.
- The `motion` library is not used on the public site.

## Review notes
First draft reached for a cream background with a serif, then for rounded cards with soft shadows. Both are the common defaults and say nothing about this person, so they were dropped in favour of the log concept, the paper/ink palette and hairline rows.
