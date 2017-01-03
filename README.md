# dfh-longest-common-substring
ye olde longest common substring algorithm for javascript

This algorithm works by caching the number of common characters found up to a given point
in a two dimensional array. It returns the set of strings with the greatest common length.
This replicates the pseudocode one can find in the
[longest common substring](https://en.wikipedia.org/wiki/Longest_common_substring_problem#Pseudocode)
wikipedia article.

*Beware*, some es6-isms are used in the code: `let` and `Set`. As with all my stuff, the functions
are attached to the `dfh` namespace.

```javascript
dfh.greatestCommonSubstring("cat", "catalog");  // Set {"cat"}
```