var jsonText = '{"kentwood": { "serviceSales":"117194", "servicePercent":"13", "healthCareSales":"509522", "healthCarePercent":"12", "manufacturingSales":"2414552", "manufacturingPercent": "18",  "wholesaleerSales":"1345761", "wholesalePercent":"11", "retailSales":"894947", "retailSalesPercent":"15", "retailSalesPerCapita":"18009", "retailPercent":""}, "grandRapids": { "serviceSales":"448575", "servicePercent":"49", "healthCareSales":"3152436", "healthCarePercent":"73", "manufacturingSales":"7029490", "manufacturingPercent": "53",  "wholesaleerSales":"4778902", "wholesalePercent":"40",  "retailSales":"1672643", "retailSalesPercent":"28", "retailSalesPerCapita":"8784", "retailPercent":""}, "wyoming": { "serviceSales":"99688", "servicePercent":"11", "healthCareSales":"430834", "healthCarePercent":"10", "manufacturingSales":"1682627", "manufacturingPercent": "13",  "wholesaleerSales":"3082980", "wholesalePercent":"26",  "retailSales":"1114227", "retailSalesPercent":"19", "retailSalesPerCapita":"15186", "retailPercent":""}, "grandville": { "serviceSales":"86257", "servicePercent":"10", "healthCareSales":"", "healthCarePercent":"", "manufacturingSales":"374569", "manufacturingPercent": "3",  "wholesaleerSales":"389605", "wholesalePercent":"3",  "retailSales":"792200", "retailSalesPercent":"13", "retailSalesPerCapita":"50795", "retailPercent":""}, "walker": { "serviceSales":"83243", "servicePercent":"9", "healthCareSales":"111681", "healthCarePercent":"3", "manufacturingSales":"1139547", "manufacturingPercent": "9",  "wholesaleerSales":"1443402", "wholesalePercent":"12",  "retailSales":"798188", "retailSalesPercent":"13", "retailSalesPerCapita":"33,254", "retailPercent":""}, "sparta": { "serviceSales":"", "servicePercent":"", "healthCareSales":"", "healthCarePercent":"", "manufacturingSales":"", "manufacturingPercent": "",  "wholesaleerSales":"", "wholesalePercent":"",  "retailSales":"", "retailSalesPercent":"", "retailSalesPerCapita":"", "retailPercent":""}, "rockford": { "serviceSales":"18985", "servicePercent":"2", "healthCareSales":"27139", "healthCarePercent":"1", "manufacturingSales":"247367", "manufacturingPercent": "2",  "wholesaleerSales":"", "wholesalePercent":"",  "retailSales":"46226", "retailSalesPercent":"1", "retailSalesPerCapita":"7,899", "retailPercent":""}, "lowell": { "serviceSales":"", "servicePercent":"", "healthCareSales":"7784", "healthCarePercent":"1", "manufacturingSales":"", "manufacturingPercent": "",  "wholesaleerSales":"", "wholesalePercent":"",  "retailSales":"115374", "retailSalesPercent":"2", "retailSalesPerCapita":"18,849", "retailPercent":""}, "caledonia": { "serviceSales":"24343", "servicePercent":"3", "healthCareSales":"", "healthCarePercent":"", "manufacturingSales":"136098", "manufacturingPercent": "1",  "wholesaleerSales":"173156", "wholesalePercent":"1",  "retailSales":"240359", "retailSalesPercent":"4", "retailSalesPerCapita":"18837", "retailPercent":""}, "byronCenter": { "serviceSales":"28091", "servicePercent":"3", "healthCareSales":"56605", "healthCarePercent":"1", "manufacturingSales":"246604", "manufacturingPercent": "2",  "wholesaleerSales":"780894", "wholesalePercent":"7",  "retailSales":"259420", "retailSalesPercent":"4", "retailSalesPerCapita":"12338", "retailPercent":""}, "comstock": { "serviceSales":"", "servicePercent":"", "healthCareSales":"", "healthCarePercent":"", "manufacturingSales":"", "manufacturingPercent": "",  "wholesaleerSales":"", "wholesalePercent":"",  "retailSales":"", "retailSalesPercent":"", "retailSalesPerCapita":"", "retailPercent":""}}';

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

	grandRapidsInfoWindow.setContent(citysEcon.grandRapids.serviceSales + " $1000");
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
	grandRapidsInfoWindow.setContent(citys.grandRapids.under5 + "%");
	setGrandRapidsColor(gradArray[citys.grandRapids.under5]);

	wyomingInfoWindow.setContent(citys.wyoming.under5 + "%");
	setWyomingColor(gradArray[citys.wyoming.under5]);

	grandvilleInfoWindow.setContent(citys.grandville.under5 + "%");
	setGrandvilleColor(gradArray[citys.grandville.under5]);

	walkerInfoWindow.setContent(citys.walker.under5 + "%");
	setWalkerColor(gradArray[citys.walker.under5]);

	kentwoodInfoWindow.setContent(citys.kentwood.under5 + "%");
	setKentwoodColor(gradArray[citys.kentwood.under5]);

	lowellInfoWindow.setContent(citys.lowell.under5 + "%");
	setLowellColor(gradArray[citys.lowell.under5]);

	byronCenterInfoWindow.setContent(citys.byronCenter.under5 + "%");
	setByronCenterColor(gradArray[citys.byronCenter.under5]);

	comstockInfoWindow.setContent(citys.comstock.under5 + "%");
	setComstockColor(gradArray[citys.comstock.under5]);

	rockfordInfoWindow.setContent(citys.rockford.under5 + "%");
	setRockfordColor(gradArray[citys.rockford.under5]);

	//grandRapidsInfoWindow.setContent(citys.grandRapids.population);
	//setCedarSpringsColor(gradArray[citys.]);

	caledoniaInfoWindow.setContent(citys.caledonia.under5 + "%");
	setCaledoniaColor(gradArray[citys.caledonia.under5]);

	spartaInfoWindow.setContent(citys.sparta.under5 + "%");
	setSpartaColor(gradArray[citys.sparta.under5]);
}

function setManufacturingSales(){
	grandRapidsInfoWindow.setContent(citys.grandRapids.under18 + "%");
	setGrandRapidsColor(gradArray[citys.grandRapids.under18]);

	wyomingInfoWindow.setContent(citys.wyoming.under18 + "%");
	setWyomingColor(gradArray[citys.wyoming.under18]);

	grandvilleInfoWindow.setContent(citys.grandville.under18 + "%");
	setGrandvilleColor(gradArray[citys.grandville.under18]);

	walkerInfoWindow.setContent(citys.walker.under18 + "%");
	setWalkerColor(gradArray[citys.walker.under18]);

	kentwoodInfoWindow.setContent(citys.kentwood.under18 + "%");
	setKentwoodColor(gradArray[citys.kentwood.under18]);

	lowellInfoWindow.setContent(citys.lowell.under18 + "%");
	setLowellColor(gradArray[citys.lowell.under18]);

	byronCenterInfoWindow.setContent(citys.byronCenter.under18 + "%");
	setByronCenterColor(gradArray[citys.byronCenter.under18]);

	comstockInfoWindow.setContent(citys.comstock.under18 + "%");
	setComstockColor(gradArray[citys.comstock.under18]);

	rockfordInfoWindow.setContent(citys.rockford.under18 + "%");
	setRockfordColor(gradArray[citys.rockford.under18]);

	//grandRapidsInfoWindow.setContent(citys.grandRapids.population);
	//setCedarSpringsColor(gradArray[citys.]);

	caledoniaInfoWindow.setContent(citys.caledonia.under18 + "%");
	setCaledoniaColor(gradArray[citys.caledonia.under18]);

	spartaInfoWindow.setContent(citys.sparta.under18 + "%");
	setSpartaColor(gradArray[citys.sparta.under18]);
}

function setWholesale(){
	grandRapidsInfoWindow.setContent(citys.grandRapids.under65 + "%");
	setGrandRapidsColor(gradArray[citys.grandRapids.under65]);

	wyomingInfoWindow.setContent(citys.wyoming.under65 + "%");
	setWyomingColor(gradArray[citys.wyoming.under65]);

	grandvilleInfoWindow.setContent(citys.grandville.under65 + "%");
	setGrandvilleColor(gradArray[citys.grandville.under65]);

	walkerInfoWindow.setContent(citys.walker.under65 + "%");
	setWalkerColor(gradArray[citys.walker.under65]);

	kentwoodInfoWindow.setContent(citys.kentwood.under65 + "%");
	setKentwoodColor(gradArray[citys.kentwood.under65]);

	lowellInfoWindow.setContent(citys.lowell.under65 + "%");
	setLowellColor(gradArray[citys.lowell.under65]);

	byronCenterInfoWindow.setContent(citys.byronCenter.under65 + "%");
	setByronCenterColor(gradArray[citys.byronCenter.under65]);

	comstockInfoWindow.setContent(citys.comstock.under65 + "%");
	setComstockColor(gradArray[citys.comstock.under65]);

	rockfordInfoWindow.setContent(citys.rockford.under65 + "%");
	setRockfordColor(gradArray[citys.rockford.under65]);

	//grandRapidsInfoWindow.setContent(citys.grandRapids.population);
	//setCedarSpringsColor(gradArray[citys.]);

	caledoniaInfoWindow.setContent(citys.caledonia.under65 + "%");
	setCaledoniaColor(gradArray[citys.caledonia.under65]);

	spartaInfoWindow.setContent(citys.sparta.under65 + "%");
	setSpartaColor(gradArray[citys.sparta.under65]);
}

function setRetail(){
	grandRapidsInfoWindow.setContent(citys.grandRapids.over65 + "%");
	setGrandRapidsColor(gradArray[citys.grandRapids.over65]);

	wyomingInfoWindow.setContent(citys.wyoming.over65 + "%");
	setWyomingColor(gradArray[citys.wyoming.over65]);

	grandvilleInfoWindow.setContent(citys.grandville.over65 + "%");
	setGrandvilleColor(gradArray[citys.grandville.over65]);

	walkerInfoWindow.setContent(citys.walker.over65 + "%");
	setWalkerColor(gradArray[citys.walker.over65]);

	kentwoodInfoWindow.setContent(citys.kentwood.over65 + "%");
	setKentwoodColor(gradArray[citys.kentwood.over65]);

	lowellInfoWindow.setContent(citys.lowell.over65 + "%");
	setLowellColor(gradArray[citys.lowell.over65]);

	byronCenterInfoWindow.setContent(citys.byronCenter.over65 + "%");
	setByronCenterColor(gradArray[citys.byronCenter.over65]);

	comstockInfoWindow.setContent(citys.comstock.over65 + "%");
	setComstockColor(gradArray[citys.comstock.over65]);

	rockfordInfoWindow.setContent(citys.rockford.over65 + "%");
	setRockfordColor(gradArray[citys.rockford.over65]);

	//grandRapidsInfoWindow.setContent(citys.grandRapids.population);
	//setCedarSpringsColor(gradArray[citys.]);

	caledoniaInfoWindow.setContent(citys.caledonia.over65 + "%");
	setCaledoniaColor(gradArray[citys.caledonia.over65]);

	spartaInfoWindow.setContent(citys.sparta.over65 + "%");
	setSpartaColor(gradArray[citys.sparta.over65]);
}
