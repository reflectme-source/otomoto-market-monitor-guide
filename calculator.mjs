import {estimateMonthlyCost} from "./pricing.mjs";
const $=id=>document.getElementById(id);
const en=document.documentElement.lang==="en";
function update(){
 try{
  const values={pagesPerRun:Number($("pages").value),runsPerDay:Number($("runs").value),
    detectedChangesPerMonth:Number($("changes").value),days:Number($("days").value)};
  const result=estimateMonthlyCost(values);
  // At least two decimals, up to three: the change event costs 0.001 USD.
  $("estimate").textContent="$"+result.estimatedComponentUsd.toLocaleString("en-US",{
    minimumFractionDigits:2,maximumFractionDigits:3,useGrouping:false});
  $("pagesCount").textContent=result.sourcePageCount+(en?" source-page scans / month":" skanów stron na miesiąc");
  $("calcHint").textContent=en?
   "Excludes any applicable Actor-start, dataset-item and other Apify charges.":
   "Nie obejmuje ewentualnych opłat za starty, elementy datasetu i innych pozycji cennika Apify.";
 }catch{
  $("estimate").textContent="—";
  $("pagesCount").textContent=en?"Check your input":"Sprawdź wpisane wartości";
 }
}
for(const id of ["pages","runs","changes","days"]) $(id).addEventListener("input",update);
update();
