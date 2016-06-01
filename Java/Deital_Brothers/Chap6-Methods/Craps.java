import java.util.*;

public class Craps
{

	private static final Random randomNums = new Random(); 
	
	private enum Status {CONT, WON, LOST};
	
	private static final int SNAKE_EYES = 2;
	private static final int TREY = 3;
	private static final int SEVEN = 7;
	private static final int YO_LEVEN = 11;
	private static final int BOX_CARS = 12; 
	
	//main method 
	public static void main(String[] args)
	{
		int myPoint = 0;
		Status gameStatus; 
		
		int sumOfDice = rollDice();
		
		switch(sumOfDice)
		{
			case SEVEN: 
			case YO_LEVEN: 
				gameStatus = Status.WON; 
				break;
			case SNAKE_EYES: 
			case TREY:
			case BOX_CARS: 
				gameStatus = Status.LOST; 
				break;
			default:
				gameStatus = Status.CONT; 
				myPoint = sumOfDice;
				System.out.printf("\nYour die roll point is %d\n", myPoint); 		 	
		}
		
		while(gameStatus == Status.CONT)
		{
			sumOfDice = rollDice(); 
			if(sumOfDice == myPoint)
			{
				gameStatus = Status.WON;
			} else 
			{
				if(sumOfDice == SEVEN)
				{
					gameStatus = Status.LOST; 
				}
			}
		}
		
		if(gameStatus == Status.WON)
		{
			System.out.println("Player Wins");
		} else 
		{
			System.out.println("Player loses");
		}
		
		
	}//end of main method
	
	public static int rollDice()
	{
		int die1 = 1 + randomNums.nextInt(6);
		int die2 = 1 + randomNums.nextInt(6);
		
		int sum = die1 + die2; 
		
		System.out.printf("Your die rolls : Die 1 = %d , Die 2 = %d : : Total for this roll is %d \n" , die1, die2, sum);
		
		return sum;
	}	

}//end of class method
