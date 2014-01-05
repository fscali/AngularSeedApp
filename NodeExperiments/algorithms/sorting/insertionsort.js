var  v = [4, 1, 3, 5, -1, 1000];
function insertionSort(v, reverse){
	var i, j;
	for (j = 1; j < v.length; j++){
		key = v[j];
		i = j - 1;
		if(!reverse){
			while (i >= 0 && v[i]> key){
				v[i+1] = v[i]
				i--;
				console.log("partial: " + v);

			}
		}
		else{

			while (i >= 0 && v[i]< key){
				v[i+1] = v[i]
				i--;
				console.log("partial: " + v);

			}
		}
		v[i+1] = key;
		console.log("fine partial: " + v);

	}
	return v;

}
console.log("Initial vector: " + v);

insertionSort(v, true);