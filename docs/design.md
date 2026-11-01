# Design

One page. If a change fights this document, change the document first.

## Aim
Someone hiring for an AI engineering role gives this site about 30 seconds. In that time they should see what Prateek builds, one piece of evidence that he builds it well, and how to reach him. Everything else stays quiet.

## Concept
Quiet typography on a paper surface in light mode and a deep blue surface in dark mode, with drifting blue and violet beams behind the page. The highlighter colour appears only on link hover. The rest is typography and space.

## Tokens

| Token | Light | Dark | Used for |
| --- | --- | --- | --- |
| paper | `#F7F8F6` | `oklch(0.2099 0.0341 263.44)` (deep blue) | page background |
| ink | `#15181B` | `#EAEEF7` | text, borders on focus |
| ink-soft | `#4F565E` | `#AAB3C5` | secondary text |
| line | `#DCDFDA` | white at 14% | hairlines between rows |
| mark | `#FFE27A` | `#E3B341` | the highlighter: link hover |
| mark-ink | `#15181B` | `#101728` | text on top of mark |
| mark-wash | `#FFEFA8` | `#4A3B0F` | reserved |

Contrast: ink on paper and ink-soft on paper are above 7:1 in both themes; mark-ink on mark is above 9:1.

## Type
- Instrument Sans (variable, self-hosted) for everything.
- JetBrains Mono (variable, self-hosted) only for code. Never for labels.
- Body 17px / 1.65, measure about 62 characters. Name and page titles 600 weight, tight tracking (-0.02em). Section headings 20px, 600, sentence case.
- No all-caps labels, no eyebrows above headings, no arrows appended to links, no middle-dot meta strings.

## Layout
- One column, 42rem wide, left aligned. Wider only for nothing.
- Lists are rows separated by hairlines, never cards.
- Section spacing is 5rem on desktop, 3.5rem on mobile.
- The header is solid (no blur), wordmark left and four links right. On narrow screens the links wrap under the wordmark; there is no hamburger.

## Motion
- Allowed properties: `transform` and `opacity`. Nothing else is animated, and never `filter`.
- Background beams: a CSS-only sweep of colour behind a static mask, compositor-only (transform), no JavaScript, still for reduced motion.
- Reveal: each home section fades in and lifts 12px once when it scrolls into view, using Motion with `LazyMotion` (`domAnimation`, about 15 KB) and `MotionConfig reducedMotion="user"`. Only opacity and transform.
- Hover and focus changes are instant colour changes; links get the highlighter on hover.
- `prefers-reduced-motion` stops the beams and the reveal. The beam sweep is the only infinite animation, and it is compositor-only.

## Review notes
First draft reached for a cream background with a serif, then for rounded cards with soft shadows. Both are the common defaults and say nothing about this person, so they were dropped in favour of the paper/ink palette, the blue dark theme and hairline rows.
