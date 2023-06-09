
// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
	// Создание карты.
	var myMap = new ymaps.Map("map", {
		// Координаты центра карты.
		// Порядок по умолчанию: «широта, долгота».
		// Чтобы не определять координаты центра карты вручную,
		// воспользуйтесь инструментом Определение координат.
		center: [55.75846806898367, 37.60108849999989],
		// Уровень масштабирования. Допустимые значения:
		// от 0 (весь мир) до 19.
		zoom: 18
	});
	// Создание геообъекта с типом точка (метка).
	var myGeoObject = new ymaps.GeoObject({
		geometry: {
			type: "Point", // тип геометрии - точка
			coordinates: [55.75846806898367, 37.60108849999989] // координаты точки
		}
	});

	// Размещение геообъекта на карте.
	myMap.geoObjects.add(myGeoObject);
}
