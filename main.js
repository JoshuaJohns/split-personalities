const originalDisorderFormat = "Depression|$|Bipolar|$|Manic|$|Anxiety|$|Anorexia|$|Posttraumtic Stress|$|Seasonal Affective|$|Bulimia";
let split = originalDisorderFormat.split("|$|");
let aray = split.join("</div><div>");
console.log(`<div>${aray}</div>`);