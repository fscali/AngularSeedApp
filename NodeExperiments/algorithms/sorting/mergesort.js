function max(v1, v2){
    if (v1 > v2){
        return v1;
    }
    else{
        return v2;
    }
}


function merge(a, b){
   var la = a.length,
       lb = b.length,
        i,k, j;
    
    var c = [];
    for (i=0, j=0, k=0; k < la+lb; k++){
        if (i == la) {
            c[k] = b[j];
            j++;
        }
        else if (j == lb) {
            c[k] = a[i];
            i++;
        }
        
        else if (a[i] > b[j]){
            c[k] = b[j];
            j++;
        }
        else{
            c[k] = a[i];
            i++;
        }
    }
    return c;
}

function mergesort(v){
    if (v.length > 1) {
       var m = Math.floor((v.length) / 2);
       var v1 = mergesort(v.slice(0, m));
       var v2 = mergesort(v.slice(m));
       return merge(v1, v2);
    }
    else 
        return v;
   
}

console.log(mergesort([3,4,1,-1,10,100,-5]));