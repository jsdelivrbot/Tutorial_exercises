/**
* Testing Union algorithm.
*
*/

class UnionTestClass
{

  public static void main(String[] args)
  {

    QuickUnionUF qu = new QuickUnionUF(10);
    qu.union(4,3);
    qu.union(3,8);
    qu.union(6,5);
    qu.union(9,4);

    qu.testRootClimb(4);
    qu.testRootClimb(6);
    qu.testRootClimb(1);
    qu.testRootClimb(9);

  }

}
