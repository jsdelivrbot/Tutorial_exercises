/**
* @class - Implementation of Quick Union (Lazy approach)
*/

class QuickUnionUF
{

  private int[] id;

  //set id of each object to itself
  public QuickUnionUF(int N){
    id = new int[N];
    for(int i = 0; i < N; i++){ id[i] = i; }
  }

  //cycle back through child nodes to
  //reach parent route
  private int root(int i){
    while( i != id[i]){
      i = id[i];
    }
    return i;
  }

  //Check if first and second share
  //the same route
  public boolean connected(int first, int second){
    return root(first) == root(second);
  }

  //change route of first to point to
  //route of second
  public void union(int first, int second){
    int firstRoot = root(first);
    int secondRoot = root(second);
    id[firstRoot] = secondRoot;
  }

  //Personal test methods ----------------------------------------

  private int rootCalled = 0;

  public void testRootClimb(int i){
    rootCalled++;
    System.out.println("Root search called for " + i);
    while(i != id[i]){
      System.out.println("root climb: i not matched | i is " + i);
      i = id[i];
    }
    System.out.println("root climb: root of i found | i is " + i);
    System.out.println();
    System.out.println();
  }

  //---------------------------------------------------------------




}//end of class
