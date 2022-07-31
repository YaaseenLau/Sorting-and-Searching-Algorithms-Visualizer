function bubbleSort(list) {
    for (let i = 0; i < list.length-1; i++) {
        for (let j = 0; j < list.length-1; j++) {
            if(list[j]>list[j+1]){
                //if values are not order then swap them
                var tempNext = list[j];
                list[j] = list[j+1];
                list[j+1] = tempNext;
                //TODO: update the frontend here!
            }
        }
    }
    return list; 
}

function insertionSort(list){  
    let i, key, j;  
    for (i = 1; i < list.length; i++){  
        key = list[i];  
        j = i - 1;  
    
        while (j >= 0 && list[j] > key){  
            list[j + 1] = list[j];  
            j = j - 1;  
        }  
        list[j + 1] = key;  
    }  
    return list;
}  

function sortSelector(sortName, list){
    switch(sortName) {
        case "bubbleSort":
            document.write("Bubble Sort:<br>");
            return bubbleSort(list);
        case "insertionSort":
            document.write("Insertion Sort:<br>");
            return insertionSort(list);
        default:
          // code block
      }
}

function main(){
    const unsorted = [6,5,3,1,8,7,2,4];
    document.write("<br>Unsorted list = "+unsorted+"<br>");
    document.write("Sorted list = "+sortSelector("insertionSort",unsorted));
}

main();