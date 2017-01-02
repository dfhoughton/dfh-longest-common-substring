# dfh-longest-common-substring
ye olde longest common substring algorithm for javascript

This algorithm works by memoizing the number of common characters found up to a given point
in a two dimensional array. It returns the set of strings with the greatest common length.
It replicates the pseudocode one can find in wikipedia.

*Beware*, some es6-isms are used in the code: `let` and `Set`. As with all my stuff, the functions
are attached to the `dfh` namespace.

```javascript
dfh.greatestCommonSubstring("cat", "catalog");  // Set {"cat"}
```