### Quick-find & Quick-union
----

| Algorithm | Initialize | Union | Find |
|-----------|------------|-------|------|
| quick-find|    N       | N     | 1    |
| quick-union | N        | N     |  N   |

<b>Quick-find defect</b>
- Union is too expensive
- Trees are flat but too expensive to keep them flat

<b>Quick Union defect</b>
- Trees can get tall.
- Find to expensive (Worst case: N accesses)

----

#### <u>Improvements</u>

1. <b> Weighted quick-union </b> : Modify quick-union to avoid all trees.
  - Keep track of size of each tree (number of objects)
  - Balance by linking root of smaller tree to route of larger tree


2. <b>Path Compression</b>  
  - Reassign root id of children to flatten the tree
