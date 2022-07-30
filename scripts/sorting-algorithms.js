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

function main(){
    const unsorted = [6,5,3,1,8,7,2,4];
    document.write("Bubble Sort:<br>");
    document.write("<br>Unsorted list = "+unsorted+"<br>");
    document.write("Sorted list = "+bubbleSort(unsorted));
}

main();