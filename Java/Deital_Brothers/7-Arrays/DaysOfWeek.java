public class DaysOfWeek
{

	final int DAYS_IN_WEEK = 7;
	private Day[] week1;
	private int dayOfWeek; 
	
	//constructor to fill the days into the day objects 
	public DaysOfWeek
	{
		week1 = new Day[DAYS_IN_WEEK]
		String[] days = {"Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"};
		
		//populate the days in the week with days 
		for(int count = 0; count < week1.length; count++)
		{
			week1[count] = new Day(days[count])
		} 
	}
	
	public void mixDaysAround()
	{
		
	}
	  

}
