# Tuesday 24 November 2026 — in one picture

[![news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/HeyRdzy/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/HeyRdzy/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124)

One dense newspaper front page summing up **Tuesday 24 November 2026** —
**37 stories, 5 regions, 14 fields** — built on the template that won the
19–21 November editions: masthead + story-count claim, a "THE DAY IN UTC"
strip, a "THE DAY IN NUMBERS" strip, 3 lead stories, 10 secondaries, a
world map with numbered pins, 24 numbered one-line briefs, a DATE CHECK
footer, and a source tag (CONFIRMED / OFFICIALS / REPORTED / CLAIM) on
every story.

## The day's three leads

1. **HUANG IS BACK** — Nvidia's board unanimously reinstates Jensen Huang
   as president, CEO and director, 11 days after he resigned. Shares soar
   31.48% — the best day since 2003 — adding $952bn, the largest
   single-day gain ever. (CONFIRMED — Reuters, CNN, AP, BBC)
2. **THE 700,000** — Leaked Rosstat data analysed by Meduza and Mediazona
   puts likely Russian war dead near 700,000 by September 2026: at least
   490,000 registered deaths plus about 230,000 missing. (REPORTED —
   Meduza, Mediazona, Kyiv Independent, FT)
3. **DRONE IN OUR SKY** — A Russian drone enters Polish airspace near
   Dorohusk in the night; Poland activates air defence, authorises a
   shoot-down, then holds fire as the drone turns east. (CONFIRMED —
   Reuters, Polish Armed Forces, Ukrinform)

Plus 10 secondaries (Megaspeed blacklisted, the EU's 22nd sanctions
package, India's $1.62bn for Nepal, Ukraine's Libya ship claim, Sudan's
grid attacks, Atalanta 4–4 Inter, Ghana's new banknotes, Norway's oil
licences ruled invalid, Melat Kiros making history, Tshisekedi's reform
law) and 24 briefs, numbered 14–37. The map "WHERE IT HAPPENED" pins all
13 main stories across Europe (5), Asia (2), Africa (4) and North
America (2).

## How the image was made

The front page is drawn programmatically (Python + PIL, DejaVu fonts) from
a written editorial brief — every word is real text, so nothing is
garbled and everything stays legible at full size. Each number was checked
against its primary source before it was drawn: Nvidia's +31.48% and
+$952bn (CNN), the Nasdaq's +6.5% (CNN/NY Post), the 700,000 estimate
(Meduza/Mediazona), India's $1.62bn package — $377m grant + $1.24bn
credit (Reuters/AP), the EU's ~60 banks off SWIFT (European Commission),
and the 50,000 missing Megaspeed chips (NY Post/WSJ).

The DATE CHECK footer names what was deliberately left out because it
happened earlier: the ICJ Rohingya ruling (19 Nov), COP31 ending without
a pact (22 Nov), the Indonesia candy-factory fire (21 Nov), Waymo's
freeway pull-back (17–18 Nov), Delta's 1,600-flight outage (22 Nov), and
Nvidia's $115.8bn quarterly profit (17 Nov). It also names what has not
happened yet: Huang's Senate hearing (3 Dec), the EU package's need for
all 27 states, and Megaspeed's Federal Register listing (25 Nov).

## Running it

`main.ts` copies the pre-built `entry.png` into the output directory
(`MAKEFUN_OUTPUT_DIR`, default `out`), validates the PNG magic bytes,
the 1 MiB size cap and the 1024×1024 dimension cap, and verifies the
copy is byte-identical. No network access.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
