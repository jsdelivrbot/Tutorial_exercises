public class WeeklySpend
{

	private final String nameOfPerson;
	private int[][] cashSpent;
	private String nickname; 
	
	public WeeklySpend(String name, int[][] spend)
	{
		nameOfPerson = name; 
		cashSpent = spend;
	}
	
	public void setNick(String nickname)
	{
		this.nickname = nickname;
	}
	
	public String getNickname()
	{
		if(nickname == null)
		{
			return nameOfPerson;
		}
		else 
		{
			return nickname;
		}
	}
	
	public void displayMessage()
	{
		System.out.printf("Hi again %s! \n\n", getNickname());
	}
	
	//call various class instance methods
	public void processSpend()
	{
		outputGrades(); //not yet coded 
		
		System.out.printf("\n%s%d\n%s%d", "Lowest spent was $" , getMinimum(), "Highest Spent was $" , getMaximum()); 
		
		outputBarchart(); //not yet coded 
		
	} 
	
	public int getMinimum()
	{
		int lowSpend = cashSpent[0][0]; 
		
		for(int[] lowestCashSpent : cashSpent)
		{
			for(int spend : lowestCashSpent)
			{
				if( spend < lowSpend)
				{
					lowSpend = spend;
				}
			}
		}
		return;	
		
	}
	
	public int getMaximum()
	{
		return;
	}
	
	public void outputGrades()
	{
	
	}	
	
	public void outputBarchart()
	{
	
	}
	

}
