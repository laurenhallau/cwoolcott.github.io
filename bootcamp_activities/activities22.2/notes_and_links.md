### Sorting Numbers
201, 39, 54, 461, 93, 377, 413, 176, 164, 317, 109, 113, 36, 235, 17, 60, 53, 474, 257, 48

17, 36, 39, 48, 53, 54, 60, 93, 109, 113, 164, 176, 201, 235, 257, 317, 377, 413, 461, 474


###Visualization Searching Sorted List
https://www.cs.usfca.edu/~galles/visualization/Search.html


###Select Sort
https://visualgo.net/en/sorting

###visuals on this page
http://www.sorting-algorithms.com/

###Chrome's V8 engine uses quick-sort for general arrays, and Insertion sort for arrays with fewer than 10 elements (ca. 760-844).
https://github.com/v8/v8/blob/master/src/js/array.js

###Chris' Quick Sort Pseudo

> [i] 6 2 3 1 5 (4) Value
> 
> [-1]0 1 2 3 4 5 Array   	
    
	i = -1;
	j = 0;
	pivot = array[array.length - 1]
	
	While j < (array.length - 1){
	
		If array[j] < Pivot {
			 i++;
			 Swap values of i and j;
		}
		
		j++
	}
	 
	insert pivot value at array[i] + 1


17, 41, 5, 22, 54, 6, 29, 3, 13
							  P

is 17 greater than Pivot? Yes (swapping)
is 3 less than pivot Yes (swapping)

		  

Smaller items to the left 
larger to the right
