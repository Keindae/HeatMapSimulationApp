var jsonText = '{"kentwood": { "serviceSales":"117194", "servicePercent":"13", "healthCareSales":"509522", "healthCarePercent":"12", "manufacturingSales":"2414552", "manufacturingPercent": "18",  "wholesaleerSales":"1345761", "wholesalePercent":"11", "retailSales":"894947", "retailSalesPercent":"15", "retailSalesPerCapita":"18009", "retailPercent":"10"}, "grandRapids": { "serviceSales":"448575", "servicePercent":"49", "healthCareSales":"3152436", "healthCarePercent":"73", "manufacturingSales":"7029490", "manufacturingPercent": "53",  "wholesaleerSales":"4778902", "wholesalePercent":"40",  "retailSales":"1672643", "retailSalesPercent":"28", "retailSalesPerCapita":"8784", "retailPercent":"5"}, "wyoming": { "serviceSales":"99688", "servicePercent":"11", "healthCareSales":"430834", "healthCarePercent":"10", "manufacturingSales":"1682627", "manufacturingPercent": "13",  "wholesaleerSales":"3082980", "wholesalePercent":"26",  "retailSales":"1114227", "retailSalesPercent":"19", "retailSalesPerCapita":"15186", "retailPercent":"8"}, "grandville": { "serviceSales":"86257", "servicePercent":"10", "healthCareSales":"", "healthCarePercent":"", "manufacturingSales":"374569", "manufacturingPercent": "3",  "wholesaleerSales":"389605", "wholesalePercent":"3",  "retailSales":"792200", "retailSalesPercent":"13", "retailSalesPerCapita":"50795", "retailPercent":"27"}, "walker": { "serviceSales":"83243", "servicePercent":"9", "healthCareSales":"111681", "healthCarePercent":"3", "manufacturingSales":"1139547", "manufacturingPercent": "9",  "wholesaleerSales":"1443402", "wholesalePercent":"12",  "retailSales":"798188", "retailSalesPercent":"13", "retailSalesPerCapita":"33,254", "retailPercent":"17"}, "sparta": { "serviceSales":"", "servicePercent":"", "healthCareSales":"", "healthCarePercent":"", "manufacturingSales":"", "manufacturingPercent": "",  "wholesaleerSales":"", "wholesalePercent":"",  "retailSales":"", "retailSalesPercent":"", "retailSalesPerCapita":"", "retailPercent":"1"}, "rockford": { "serviceSales":"18985", "servicePercent":"2", "healthCareSales":"27139", "healthCarePercent":"1", "manufacturingSales":"247367", "manufacturingPercent": "2",  "wholesaleerSales":"", "wholesalePercent":"",  "retailSales":"46226", "retailSalesPercent":"1", "retailSalesPerCapita":"7,899", "retailPercent":"4"}, "lowell": { "serviceSales":"", "servicePercent":"", "healthCareSales":"7784", "healthCarePercent":"1", "manufacturingSales":"", "manufacturingPercent": "",  "wholesaleerSales":"", "wholesalePercent":"",  "retailSales":"115374", "retailSalesPercent":"2", "retailSalesPerCapita":"18,849", "retailPercent":"10"}, "caledonia": { "serviceSales":"24343", "servicePercent":"3", "healthCareSales":"", "healthCarePercent":"", "manufacturingSales":"136098", "manufacturingPercent": "1",  "wholesaleerSales":"173156", "wholesalePercent":"1",  "retailSales":"240359", "retailSalesPercent":"4", "retailSalesPerCapita":"18837", "retailPercent":"10"}, "byronCenter": { "serviceSales":"28091", "servicePercent":"3", "healthCareSales":"56605", "healthCarePercent":"1", "manufacturingSales":"246604", "manufacturingPercent": "2",  "wholesaleerSales":"780894", "wholesalePercent":"7",  "retailSales":"259420", "retailSalesPercent":"4", "retailSalesPerCapita":"12338", "retailPercent":"7"}, "comstock": { "serviceSales":"", "servicePercent":"", "healthCareSales":"", "healthCarePercent":"", "manufacturingSales":"", "manufacturingPercent": "",  "wholesaleerSales":"", "wholesalePercent":"",  "retailSales":"", "retailSalesPercent":"", "retailSalesPerCapita":"", "retailPercent":""}}';

var citysEcon = JSON.parse(jsonText);



var gradArray = jsgradient.generateGradient('#ffffff', '#000000', 100);

function setGrandRapidsColor(hex){
	grandRapidsData.setStyle({
        fillColor: hex
    });
}

function setWyomingColor(hex){
	wyomingData.setStyle({
        fillColor: hex
    });
}

function setGrandvilleColor(hex){
	grandvilleData.setStyle({
        fillColor: hex
    });
}

function setWalkerColor(hex){
	walkerData.setStyle({
        fillColor: hex
    });
}

function setKentwoodColor(hex){
	kentwoodData.setStyle({
        fillColor: hex
    });
}

function setLowellColor(hex){
	lowellData.setStyle({
        fillColor: hex
    });
}

function setByronCenterColor(hex){
	byronCenterData.setStyle({
        fillColor: hex
    });
}

function setComstockColor(hex){
	comstockData.setStyle({
        fillColor: hex
    });
}

function setRockfordColor(hex){
	rockfordData.setStyle({
        fillColor: hex
    });
}

function setCedarSpringsColor(hex){
	cedarSpringsData.setStyle({
        fillColor: hex
    });
}

function setCaledoniaColor(hex){
	caledoniaData.setStyle({
        fillColor: hex
    });
}

function setSpartaColor(hex){
	spartaData.setStyle({
        fillColor: hex
    });
}

function setServices(){

	grandRapidsInfoWindow.setContent(citysEcon.grandRapids.serviceSales + " ($1000)");
	setGrandRapidsColor(gradArray[citysEcon.grandRapids.servicePercent]);

	wyomingInfoWindow.setContent(citysEcon.wyoming.serviceSales + " ($1000)");
	setWyomingColor(gradArray[citysEcon.wyoming.servicePercent]);

	grandvilleInfoWindow.setContent(citysEcon.grandville.serviceSales + " ($1000)");
	setGrandvilleColor(gradArray[citysEcon.grandville.servicePercent]);

	walkerInfoWindow.setContent(citysEcon.walker.serviceSales + " ($1000)");
	setWalkerColor(gradArray[citysEcon.walker.servicePercent]);

	kentwoodInfoWindow.setContent(citysEcon.kentwood.serviceSales + " ($1000)");
	setKentwoodColor(gradArray[citysEcon.kentwood.servicePercent]);

	//lowellInfoWindow.setContent(citys.lowell.population);
	//setLowellColor(gradArray[citys.lowell.servicePercent]);

	byronCenterInfoWindow.setContent(citysEcon.byronCenter.serviceSales + " ($1000)");
	setByronCenterColor(gradArray[citysEcon.byronCenter.servicePercent]);

	//comstockInfoWindow.setContent(citys.comstock.serviceSales + " ($1000)");
	//setComstockColor(gradArray[citys.comstock.servicePercent]);

	rockfordInfoWindow.setContent(citysEcon.rockford.serviceSales + " ($1000)");
	setRockfordColor(gradArray[citysEcon.rockford.servicePercent]);

	//grandRapidsInfoWindow.setContent(citys.grandRapids.population);
	//setCedarSpringsColor(gradArray[citys.]);

	caledoniaInfoWindow.setContent(citysEcon.caledonia.serviceSales + " ($1000)");
	setCaledoniaColor(gradArray[citysEcon.caledonia.servicePercent]);

	//spartaInfoWindow.setContent(citys.sparta.serviceSales + " ($1000)");
	//setSpartaColor(gradArray[citys.sparta.servicePercent]);
}

function setHealthCareRevenue(){
	grandRapidsInfoWindow.setContent(citysEcon.grandRapids.healthCareSales + " $1000");
	setGrandRapidsColor(gradArray[citysEcon.grandRapids.healthCarePercent]);

	wyomingInfoWindow.setContent(citysEcon.wyoming.healthCareSales + " ($1000)");
	setWyomingColor(gradArray[citysEcon.wyoming.healthCarePercent]);

	grandvilleInfoWindow.setContent(citysEcon.grandville.healthCareSales + " ($1000)");
	setGrandvilleColor(gradArray[citysEcon.grandville.healthCarePercent]);

	walkerInfoWindow.setContent(citysEcon.walker.healthCareSales + " ($1000)");
	setWalkerColor(gradArray[citysEcon.walker.healthCarePercent]);

	kentwoodInfoWindow.setContent(citysEcon.kentwood.healthCareSales + " ($1000)");
	setKentwoodColor(gradArray[citysEcon.kentwood.healthCarePercent]);

	lowellInfoWindow.setContent(citysEcon.lowell.healthCareSales + " ($1000)");
	setLowellColor(gradArray[citys.lowell.healthCarePercent]);

	byronCenterInfoWindow.setContent(citysEcon.byronCenter.healthCareSales + " ($1000)");
	setByronCenterColor(gradArray[citysEcon.byronCenter.healthCarePercent]);

	comstockInfoWindow.setContent(citys.comstock.healthCareSales + " ($1000)");
	setComstockColor(gradArray[citys.comstock.healthCarePercent]);

	rockfordInfoWindow.setContent(citysEcon.rockford.healthCareSales + " ($1000)");
	setRockfordColor(gradArray[citysEcon.rockford.healthCarePercent]);

	caledoniaInfoWindow.setContent(citysEcon.caledonia.healthCareSales + " ($1000)");
	setCaledoniaColor(gradArray[citysEcon.caledonia.healthCarePercent]);

	spartaInfoWindow.setContent(citys.sparta.healthCareSales + " ($1000)");
	setSpartaColor(gradArray[citys.sparta.healthCarePercent]);
}

function setManufacturingSales(){
	grandRapidsInfoWindow.setContent(citysEcon.grandRapids.manufacturingSales + " ($1000)");
	setGrandRapidsColor(gradArray[citysEcon.grandRapids.manufacturingPercent]);

	wyomingInfoWindow.setContent(citysEcon.wyoming.manufacturingSales + " ($1000)");
	setWyomingColor(gradArray[citysEcon.wyoming.manufacturingPercent]);

	grandvilleInfoWindow.setContent(citysEcon.grandville.manufacturingSales + " ($1000)");
	setGrandvilleColor(gradArray[citysEcon.grandville.manufacturingPercent]);

	walkerInfoWindow.setContent(citysEcon.walker.manufacturingSales + " ($1000)");
	setWalkerColor(gradArray[citysEcon.walker.manufacturingPercent]);

	kentwoodInfoWindow.setContent(citysEcon.kentwood.manufacturingSales + " ($1000)");
	setKentwoodColor(gradArray[citysEcon.kentwood.manufacturingPercent]);

	lowellInfoWindow.setContent(citysEcon.lowell.manufacturingSales + " ($1000)");
	setLowellColor(gradArray[citys.lowell.manufacturingPercent]);

	byronCenterInfoWindow.setContent(citysEcon.byronCenter.manufacturingSales + " ($1000)");
	setByronCenterColor(gradArray[citysEcon.byronCenter.manufacturingPercent]);

	comstockInfoWindow.setContent(citys.comstock.manufacturingSales + " ($1000)");
	setComstockColor(gradArray[citys.comstock.manufacturingPercent]);

	rockfordInfoWindow.setContent(citysEcon.rockford.manufacturingSales + " ($1000)");
	setRockfordColor(gradArray[citysEcon.rockford.manufacturingPercent]);

	caledoniaInfoWindow.setContent(citysEcon.caledonia.manufacturingSales + " ($1000)");
	setCaledoniaColor(gradArray[citysEcon.caledonia.manufacturingPercent]);

	spartaInfoWindow.setContent(citys.sparta.manufacturingSales + " ($1000)");
	setSpartaColor(gradArray[citys.sparta.manufacturingPercent]);
}

function setWholesale(){
	grandRapidsInfoWindow.setContent(citysEcon.grandRapids.wholesaleerSales + " ($1000)");
	setGrandRapidsColor(gradArray[citysEcon.grandRapids.wholesalePercent]);

	wyomingInfoWindow.setContent(citysEcon.wyoming.wholesaleerSales + " ($1000)");
	setWyomingColor(gradArray[citysEcon.wyoming.wholesalePercent]);

	grandvilleInfoWindow.setContent(citysEcon.grandville.wholesaleerSales + " ($1000)");
	setGrandvilleColor(gradArray[citysEcon.grandville.wholesalePercent]);

	walkerInfoWindow.setContent(citysEcon.walker.wholesaleerSales + " ($1000)");
	setWalkerColor(gradArray[citysEcon.walker.wholesalePercent]);

	kentwoodInfoWindow.setContent(citysEcon.kentwood.wholesaleerSales + " ($1000)");
	setKentwoodColor(gradArray[citysEcon.kentwood.wholesalePercent]);

	lowellInfoWindow.setContent(citysEcon.lowell.wholesaleerSales + " ($1000)");
	setLowellColor(gradArray[citys.lowell.wholesalePercent]);

	byronCenterInfoWindow.setContent(citysEcon.byronCenter.wholesaleerSales + " ($1000)");
	setByronCenterColor(gradArray[citysEcon.byronCenter.wholesalePercent]);

	comstockInfoWindow.setContent(citys.comstock.wholesaleerSales + " ($1000)");
	setComstockColor(gradArray[citys.comstock.wholesalePercent]);

	rockfordInfoWindow.setContent(citysEcon.rockford.wholesaleerSales + " ($1000)");
	setRockfordColor(gradArray[citysEcon.rockford.wholesalePercent]);

	caledoniaInfoWindow.setContent(citysEcon.caledonia.wholesaleerSales + " ($1000)");
	setCaledoniaColor(gradArray[citysEcon.caledonia.wholesalePercent]);

	spartaInfoWindow.setContent(citys.sparta.wholesaleerSales + " ($1000)");
	setSpartaColor(gradArray[citys.sparta.wholesalePercent]);
}

function setRetail(){
	grandRapidsInfoWindow.setContent(citysEcon.grandRapids.retailSales + " ($1000)");
	setGrandRapidsColor(gradArray[citysEcon.grandRapids.retailSalesPercent]);

	wyomingInfoWindow.setContent(citysEcon.wyoming.retailSales + " ($1000)");
	setWyomingColor(gradArray[citysEcon.wyoming.retailSalesPercent]);

	grandvilleInfoWindow.setContent(citysEcon.grandville.retailSales + " ($1000)");
	setGrandvilleColor(gradArray[citysEcon.grandville.retailSalesPercent]);

	walkerInfoWindow.setContent(citysEcon.walker.retailSales + " ($1000)");
	setWalkerColor(gradArray[citysEcon.walker.retailSalesPercent]);

	kentwoodInfoWindow.setContent(citysEcon.kentwood.retailSales + " ($1000)");
	setKentwoodColor(gradArray[citysEcon.kentwood.retailSalesPercent]);

	lowellInfoWindow.setContent(citysEcon.lowell.retailSales + " ($1000)");
	setLowellColor(gradArray[citys.lowell.retailSalesPercent]);

	byronCenterInfoWindow.setContent(citysEcon.byronCenter.retailSales + " ($1000)");
	setByronCenterColor(gradArray[citysEcon.byronCenter.retailSalesPercent]);

	comstockInfoWindow.setContent(citys.comstock.retailSales + " ($1000)");
	setComstockColor(gradArray[citys.comstock.retailSalesPercent]);

	rockfordInfoWindow.setContent(citysEcon.rockford.retailSales + " ($1000)");
	setRockfordColor(gradArray[citysEcon.rockford.retailSalesPercent]);

	caledoniaInfoWindow.setContent(citysEcon.caledonia.retailSales + " ($1000)");
	setCaledoniaColor(gradArray[citysEcon.caledonia.retailSalesPercent]);

	spartaInfoWindow.setContent(citys.sparta.retailSales + " ($1000)");
	setSpartaColor(gradArray[citys.sparta.retailSalesPercent]);
}

function setRetailPerCapita(){
	grandRapidsInfoWindow.setContent(citysEcon.grandRapids.retailSalesPerCapita + " ($1000)");
	setGrandRapidsColor(gradArray[citysEcon.grandRapids.retailPercent]);

	wyomingInfoWindow.setContent(citysEcon.wyoming.retailSalesPerCapita + " ($1000)");
	setWyomingColor(gradArray[citysEcon.wyoming.retailPercent]);

	grandvilleInfoWindow.setContent(citysEcon.grandville.retailSalesPerCapita + " ($1000)");
	setGrandvilleColor(gradArray[citysEcon.grandville.retailPercent]);

	walkerInfoWindow.setContent(citysEcon.walker.retailSalesPerCapita + " ($1000)");
	setWalkerColor(gradArray[citysEcon.walker.retailPercent]);

	kentwoodInfoWindow.setContent(citysEcon.kentwood.retailSalesPerCapita + " ($1000)");
	setKentwoodColor(gradArray[citysEcon.kentwood.retailPercent]);

	lowellInfoWindow.setContent(citysEcon.lowell.retailSalesPerCapita + " ($1000)");
	setLowellColor(gradArray[citys.lowell.retailPercent]);

	byronCenterInfoWindow.setContent(citysEcon.byronCenter.retailSalesPerCapita + " ($1000)");
	setByronCenterColor(gradArray[citysEcon.byronCenter.retailPercent]);

	comstockInfoWindow.setContent(citys.comstock.retailSalesPerCapita + " ($1000)");
	setComstockColor(gradArray[citys.comstock.retailPercent]);

	rockfordInfoWindow.setContent(citysEcon.rockford.retailSalesPerCapita + " ($1000)");
	setRockfordColor(gradArray[citysEcon.rockford.retailPercent]);

	caledoniaInfoWindow.setContent(citysEcon.caledonia.retailSalesPerCapita + " ($1000)");
	setCaledoniaColor(gradArray[citysEcon.caledonia.retailPercent]);

	spartaInfoWindow.setContent(citys.sparta.retailSalesPerCapita + " ($1000)");
	setSpartaColor(gradArray[citys.sparta.retailPercent]);
}
