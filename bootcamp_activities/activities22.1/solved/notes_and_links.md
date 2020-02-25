Visualization Searching Sorted List
https://www.cs.usfca.edu/~galles/visualization/Search.html

Benchmark NPM Package
https://www.npmjs.com/package/benchmark

https://www.thecodingdelight.com/big-o-time-complexity-simplified/

Sufficiently large values of length will cause heap size exceeded errors. 

node --max-old-space-size=4096 linearSearch.js

"O of n squared"

Big O notation is useful when analyzing algorithms for efficiency. For example, the time (or the number of steps) it takes to complete a problem of size n.

O(n) - Linear time complexity
The time it will take to run the algorithm will increase proportionately as the size of input n increases.

O(log n) - Logarithmic time complexity
Every subsequent level of the tree you divide problem into half and do constant amount of additional work.

O(n^2) - Quadratic time complexity
A good example of this is checking to see whether there are any duplicates in a deck of cards by starting with the suit. 

Interview Questions
https://www.interviewbit.com/


Define the word algorithm.

Answer: A set of steps to solve a problem or perform a calculation.

Explain how you might choose, objectively, between two different algorithms.

Answer: Benchmarking/timing running time.

What the time complexity is for an algorithm that takes twice as long to run if you double the size of its input; three times as long if you triple the size of its input; etc.

Answer: Linear.

Explain why binary search is so fast.

Answer: Because it halves the search space on each iteration.

Name one essential difference between binary search and linear search.

Answer: Time complexity. At worst, linear search will always take longer than binary search.

Explain when one might use binary search.

Answer: When searching in a sorted array; or, when we have the option of sorting the array before we search.

Explain when one might opt for linear search.

Answer: when searching in an unsorted array in situations where we can't sort the array first.


2 Condition Solution to Chris' Problem
if (dayofweek=='Saturday' || dayofweek=='Sunday')
    //Not Sending Email

//if greater than the first never not on a Monday
if (date('d')>1 && dayofweek!='Monday')
    //Not Sending Email



