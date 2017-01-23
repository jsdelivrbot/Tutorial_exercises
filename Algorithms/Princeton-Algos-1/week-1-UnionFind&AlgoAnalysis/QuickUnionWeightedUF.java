class QuickUnionWeightedUF
{

  private int[] id;
  private int[] sz;

  //set id of each object to itself
  public QuickUnionWeightedUF(int N){
    id = new int[N];
    for(int i = 0; i < N; i++){ id[i] = i; }
  }

  private int root(int i){
    while( i != id[i]){
      id[i] = id[id[i]];  //<!-- (2) Path compression
      i = id[i];
    }
    return i;
  }

  public boolean connected(int p, int q){
    return root(q) == root(p);
  }

  public void union(int p, int q){
    int pRoot = root(p);
    int qRoot = root(q);
    if( pRoot == qRoot ){
      return;
    }
    if(sz[pRoot] < sz[qRoot]){
      id[pRoot] = qRoot;
      sz[qRoot] += sz[pRoot];
    }
    else{
      id[qRoot] = pRoot;
      id[pRoot] += sz[qRoot];
    }
  }

}
