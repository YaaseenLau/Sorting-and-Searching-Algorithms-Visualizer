function bubbleSort(list) {
    const unsorted = list;
    document.write("Bubble Sort: <br><br>");
    let newlist = list;
    for (let i = 0; i < newlist.length-1; i++) {
        for (let j = 0; j < newlist.length-1; j++) {
            if(newlist[j]>newlist[j+1]){
                //if values are not order then swap them
                var tempNext = newlist[j];
                newlist[j] = newlist[j+1];
                newlist[j+1] = tempNext;
                document.write(newlist);
                document.write("<br>");
            }
        }
    }
    document.write("<br>Unsorted list = "+unsorted+"<br>");
    document.write("Sorted list = "+newlist);
    return newlist; 
}

bubbleSort([6,5,3,1,8,7,2,4]);