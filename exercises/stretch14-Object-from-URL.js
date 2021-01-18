// Create a function named urlDecode that will receive a URL encoded string, and return the a JavaScript object that represents that data.


const urlDecode = function(text) {
	const results = {}
	const removedSpace = text.replaceAll('%20', ' ');
	const pairsArray = removedSpace.split('&');
	pairsArray.forEach(pair => {
		const keyVal = pair.split('=');
		results[keyVal[0]] = keyVal[1]
	})
	return results
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);

/* EXPECTED OUTCOME:
{duck: "rubber"}
{bootcamp: "Lighthouse Labs"}
{city: "Vancouver", weather: "lots of rain"}
"lots of rain"
*/