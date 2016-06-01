public class Date
{
  private int month;
  private int day;
  private int year;

  private static final int[] daysPerMonth = {0,31,28,31,30,31,30,31,31,30,31,30,31};

  //connstructor
  public Date(int theMonth, int theDay, int theYear)
  {
    month = checkMonth(theMonth);
    year = theYear;
    day = checkDay(theDay);
    System.out.printf("Date object connstructor for the date %s\n", this);
  }

  private int checkMonth( int testMonth )
   {
      if ( testMonth > 0 && testMonth <= 12 ) // validate month
         return testMonth;
      else // month is invalid
         throw new IllegalArgumentException( "month must be 1-12" );
   } // end method checkMonth

   // utility method to confirm proper day value based on month and year
   private int checkDay( int testDay )
   {
      // check if day in range for month
      if ( testDay > 0 && testDay <= daysPerMonth[ month ] )
         return testDay;

      // check for leap year
      if ( month == 2 && testDay == 29 && ( year % 400 == 0 ||
           ( year % 4 == 0 && year % 100 != 0 ) ) )
         return testDay;

      throw new IllegalArgumentException(
         "day out-of-range for the specified month and year" );
   } // end method checkDay

   // return a String of the form month/day/year
   public String toString()
   {
      return String.format( "%d/%d/%d %s", month, day, year, "Boooyah mutherfucka" );
   } // end method toString
}
