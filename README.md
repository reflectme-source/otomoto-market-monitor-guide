# OTOMOTO Change Monitor — Guide for Dealers and Market Researchers

A free, independent guide to monitoring public OTOMOTO used-car search results. Available in Polish and English, with a bounded pricing calculator and ready-to-run examples.

**Open the guide:** https://reflectme-source.github.io/otomoto-market-monitor-guide/

**Use the paid Actor on Apify:** https://apify.com/green_amazement/otomoto-change-intelligence

## Common buyer workflows

- BMW 3 Series: monitor new listings and asking-price changes.
- Audi A4: compare visible market prices across successful scans.
- Skoda Octavia: maintain a repeatable snapshot of newly appearing search results.

The first successful Actor run establishes a baseline. Later runs may emit change events. A listing leaving a search window is not proof of deletion or sale. This is scan-based monitoring, **not a real-time alert guarantee**.

## Pricing estimate

The interactive calculator illustrates two events shown in the Actor's pricing: $0.01 per successfully scanned page, and $0.001 per detected listing change. Other event charges may apply. Read the full price breakdown on Apify before running.

## Privacy and independence

The website is static. Its calculator runs locally and does not transmit values to a server. The guide is created by ForgeFrame and is not an official OTOMOTO website or affiliate.

For support: forgeframe.lab@gmail.com
