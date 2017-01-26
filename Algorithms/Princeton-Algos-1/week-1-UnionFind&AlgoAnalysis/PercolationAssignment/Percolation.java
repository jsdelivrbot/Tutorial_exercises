/******************************************************************************
 *
 * @title  - Princeton Algorithms : PercolationBad programming assignment 1
 * @program- Percolation
 * @author - Charlie Storey
 * @link   - http://coursera.cs.princeton.edu/algs4/assignments/percolation.html
 *
 ******************************************************************************/

import edu.princeton.cs.algs4.WeightedQuickUnionUF;


public class Percolation
{

    //track current number of sites open
    private int openSitesCount;
    //number of sites in grid

    private int gridSize;
    //track open/blocked sites

    private boolean[] openSites;
    //square of grid

    private int gridSqaure;

    //Virtual sites for top and bottom
    private int virtualTopSite;
    private int virtualBottomSite;

    //QU algorithm
    private WeightedQuickUnionUF grid;

    /**
     * Instantiate class variables
     * @param n  - Square grid number to be setup
     */
    public Percolation(int n)
    {
        if(n <= 0){
            throw new IllegalArgumentException("Value higher than 0 required");
        }
        grid = new WeightedQuickUnionUF(n*n+2);     //Create UF grid
        openSites = new boolean[n*n];               //Track open sites with boolean arr
        gridSize = n*n;                             //Track overall grid size
        gridSqaure = n;                             //Hold row length for mapping
        openSitesCount = 0;                         //Track num of open sites
        virtualTopSite = gridSize;                  //Assign top virtual reference
        virtualBottomSite = gridSize + 1;           //Assign virtual bottom reference
    }

    /**
     *   Open site if not already currently open
     *   @param row - 2d row coordinate
     *   @param col - 2d column coordinate
     */
    public void open(int row, int col)
    {
        confirmInRange(row,col);
        int mappedValue = this.convertCoords(row,col);
        if(this.isOpen(row,col)){
            return;
        }
        else{
            openSites[mappedValue] = true;
            this.openSiteAndCheckNeighbors(mappedValue, row, col);
            openSitesCount++;
        }
    }

    /**
     *   Check whether coordinates relate to an
     *   open site.
     *   @param row - 2d row coordinate
     *   @param col - 2d column coordinate
     *   @return boolean based on open/close status
     */
    public boolean isOpen(int row, int col)
    {   this.confirmInRange(row,col);
        int mappedValue = this.convertCoords(row,col);
        return openSites[mappedValue];
    }

    /**
     *   Determine if coordinates can be connected to an
     *   open top site via open neighbours.
     *   @param row - 2d row coordinate
     *   @param col - 2d column coordinate
     *   @return boolean based on successful fill
     */
    public boolean isFull(int row, int col)
    {
        return grid.connected(virtualTopSite, this.convertCoords(row,col));
    }


    /**
     *   Return number of open sites in system
     *   @return - Int number of sites
     */
    public int numberOfOpenSites()
    {
        return openSitesCount;
    }

    /**
     *    Determine if a bottom site can be connected
     *    to a top site.
     *    @return  - Boolean based on percolation
     */
    public boolean percolates()
    {
        return grid.connected(virtualTopSite, virtualBottomSite);
    }


    /* Private Methods
    =================*/

     /**
      *   Map 2D coordinates given to 1D array
      *   @param row   - 2d row coordinate
      *   @param col  - 2d column coordinate
      *   @return int - 1d array index of 2d coords
      */
    private int convertCoords(int row, int col){
        return ((row-1) * gridSqaure) + ( col - 1) ;
    }

    /**
     *    Connect open site to open neighbours and connect
     *    site to virtual top/bottom.
     *    @param  site - 1d array index of current site
     *    @param  row  - 2d column coordinate of current site
     *    @param  col  - 2d column coordinate of current site
     */
    private void openSiteAndCheckNeighbors(int site, int row, int col){

        boolean virtualBottom = false;
        boolean virtualTop = false;

        //Check for top and bottom sites to add to virtual site
        if(site < gridSqaure){
            grid.union(virtualTopSite, site);
            virtualTop = true;
        }
        if(site >= ( gridSize - gridSqaure ) && site <= gridSize - 1){
            grid.union(virtualBottomSite, site);
            virtualBottom = true;
        }

        //Check surrounding neighbours for a match
        this.attemptToConnectToNeighbors(site, row, col, virtualTop, virtualBottom);

    }

    /**
     *    Identify any open sites which are neighbors of current site
     *    @param site - 1d array index of current site
     *    @param row  - 2d array index of current site
     *    @param col  - 2d column coordinate of current site
     *    @param top - boolean if top site identified
     *    @param bottom - boolean if bottom site connected
     */
    private void attemptToConnectToNeighbors(int site,int row,int col,boolean top, boolean bottom){

        if( col != 1 && this.isOpen(row,col-1)){
            grid.union(site, site-1);
        }

        if(col != gridSqaure && this.isOpen(row,col+1)){
            grid.union(site, site+1);
        }

        if(!top && this.isOpen(row-1,col)) {
            grid.union(site, site-gridSqaure);
        }

        if(!bottom && this.isOpen(row+1, col)){
            grid.union(site, site+gridSqaure);
        }

    }

    /**
     *    Identify whether row and column indices are within
     *    current grid size.
     *    @param row  - 2d array index of current site
     *    @param col  - 2d column coordinate of current site
     */
    private void confirmInRange(int row, int col){
        if( row < 1 || row > gridSqaure || col < 1 || col > gridSqaure){
            throw new IndexOutOfBoundsException("Values out of grid bounds");
        }
    }
}
