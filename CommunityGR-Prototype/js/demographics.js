var jsonText = '{"kentwood": { "population":"48707", "popPercent":"12", "under5":"7","under18":"25","under65":"56","over65":"12","populationPerSquareMile":"2330"},"grandRapids": { "population":"188040", "popPercent":"47", "under5":"8","under18":"25","under65":"56","over65":"11","populationPerSquareMile":"4235.6"},"wyoming": { "population":"72125", "popPercent":"18", "under5":"8","under18":"27","under65":"56","over65":"9","populationPerSquareMile":"2927.3"},"grandville": { "population":"15378", "popPercent":"4", "under5":"7","under18":"25","under65":"53","over65":"15","populationPerSquareMile":"2114.4"}, "walker": { "population":"23537", "popPercent":"6", "under5":"6","under18":"23","under65":"59","over65":"12","populationPerSquareMile":"943.7"},"sparta": { "population":"9110", "popPercent":"2", "under5":"7","under18":"28","under65":"53","over65":"12","populationPerSquareMile":"250.1"},"rockford": { "population":"5719", "popPercent":"1", "under5":"9","under18":"31","under65":"49","over65":"11","populationPerSquareMile":"1764"},"lowell": { "population":"5949", "popPercent":"1", "under5":"6","under18":"26","under65":"58","over65":"10","populationPerSquareMile":"182.6"},"caledonia": { "population":"12332", "popPercent":"3", "under5":"6","under18":"28","under65":"56","over65":"10","populationPerSquareMile":"353.2"},"byronCenter": { "population":"5822", "popPercent":"1", "under5":"7","under18":"31","under65":"48","over65":"14","populationPerSquareMile":"1145.4"}, "comstock":{"population":"10088", "popPercent":"1", "under5":"9","under18":"26","under65":"55","over65":"10"}}';

var citys = JSON.parse(jsonText);

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

function setPopulation(){
	grandRapidsInfoWindow.setContent(citys.grandRapids.population);
	setGrandRapidsColor(gradArray[citys.grandRapids.popPercent]);

	wyomingInfoWindow.setContent(citys.wyoming.population);
	setWyomingColor(gradArray[citys.wyoming.popPercent]);

	grandvilleInfoWindow.setContent(citys.grandville.population);
	setGrandvilleColor(gradArray[citys.grandville.popPercent]);

	walkerInfoWindow.setContent(citys.walker.population);
	setWalkerColor(gradArray[citys.walker.popPercent]);

	kentwoodInfoWindow.setContent(citys.kentwood.population);
	setKentwoodColor(gradArray[citys.kentwood.popPercent]);

	lowellInfoWindow.setContent(citys.lowell.population);
	setLowellColor(gradArray[citys.lowell.popPercent]);

	byronCenterInfoWindow.setContent(citys.byronCenter.population);
	setByronCenterColor(gradArray[citys.byronCenter.popPercent]);

	comstockInfoWindow.setContent(citys.comstock.population);
	setComstockColor(gradArray[citys.comstock.popPercent]);

	rockfordInfoWindow.setContent(citys.rockford.population);
	setRockfordColor(gradArray[citys.rockford.popPercent]);

	//grandRapidsInfoWindow.setContent(citys.grandRapids.population);
	//setCedarSpringsColor(gradArray[citys.]);

	caledoniaInfoWindow.setContent(citys.caledonia.population);
	setCaledoniaColor(gradArray[citys.caledonia.popPercent]);

	spartaInfoWindow.setContent(citys.sparta.population);
	setSpartaColor(gradArray[citys.sparta.popPercent]);
}

function setUnder5(){
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

function setUnder18(){
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

function setUnder65(){
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

function setOver65(){
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
