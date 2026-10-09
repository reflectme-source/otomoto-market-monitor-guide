// Informational pricing estimates only. Not a billing/checkout module.
// Apify also displays Actor-start / dataset item charges in its live pricing.
export function estimateMonthlyCost({pagesPerRun,runsPerDay,detectedChangesPerMonth,days=30}) {
  const fields = {pagesPerRun,runsPerDay,detectedChangesPerMonth,days};
  for (const [name, value] of Object.entries(fields)) {
    if (!Number.isSafeInteger(value) || value < 0) throw new RangeError("Invalid "+name);
  }
  if (pagesPerRun < 1 || pagesPerRun > 100 || runsPerDay < 1 || runsPerDay > 24
   || days < 1 || days > 31 || detectedChangesPerMonth > 100000) {
    throw new RangeError("Outside bounded estimate");
  }
  const sourcePageCount = pagesPerRun * runsPerDay * days;
  // Represent dollars in tenth-of-cent units; 1 page costs 1 cent = 10 units.
  // A detected change costs 0.1 cent = 1 unit.
  const tenthCents = sourcePageCount * 10 + detectedChangesPerMonth;
  return {
    sourcePageCount,
    sourceScansUsd: sourcePageCount / 100,
    detectedChangeUsd: detectedChangesPerMonth / 1000,
    estimatedComponentUsd: tenthCents / 1000,
    allInPriceVerified: false,
    disclaimer: "Estimate excludes any Actor-start, dataset-item, or other applicable Apify charges. The exact paid price is shown by Apify before running.",
  };
}
