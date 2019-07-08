function cursorCheck(str) {
	const arr = str.split(' ');
	let isItem = arr.some(item => {
		item = item.toLowerCase();
		return (item === 'ironman' || item === 'cursor' || item === 'ostap');
	});
	return isItem;
};
