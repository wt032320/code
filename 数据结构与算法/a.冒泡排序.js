// 冒泡排序（未优化）
const bubbleSort = arr => {
	console.time('改进前冒泡排序耗时');
	const length = arr.length;
	if (length <= 1) return;
	// i < length - 1 是因为外层只需要 length-1 次就排好了，第 length 次比较是多余的。
	for (let i = 0; i < length - 1; i++) {
		// j < length - i - 1 是因为内层的 length-i-1 到 length-1 的位置已经排好了，不需要再比较一次。
		for (let j = 0; j < length - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				const temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	console.log('改进前 arr :', arr);
	console.timeEnd('改进前冒泡排序耗时');
};


// 冒泡排序（已优化）
const bubbleSort2 = arr => {
	console.time('改进后冒泡排序耗时');
	const length = arr.length;
	if (length <= 1) return;
	// i < length - 1 是因为外层只需要 length-1 次就排好了，第 length 次比较是多余的。
	for (let i = 0; i < length - 1; i++) {
		let hasChange = false; // 提前退出冒泡循环的标志位
		// j < length - i - 1 是因为内层的 length-i-1 到 length-1 的位置已经排好了，不需要再比较一次。
		for (let j = 0; j < length - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				const temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				hasChange = true; // 表示有数据交换
			}
		}

		if (!hasChange) break; // 如果 false 说明所有元素已经到位，没有数据交换，提前退出
	}
	console.log('改进后 arr :', arr);
	console.timeEnd('改进后冒泡排序耗时');

/**
 *  冒泡排序是稳定的排序算法: 因为当两个数据大小相等时 不会进行数据交换
 *  冒泡排序是原地排序算法: 因为冒泡排序是在原数组进行数据交换 不需要额外的空间
 *  空间复杂度； O(1)
 *  时间复杂度:  O(n^2)
 */