import java.util.*;

class test {

	public static void main(String[] args){

	String name = "Charlie";
	String shop = "vino";
	Scanner scanner = new Scanner(System.in);
	int num1, num2;
	
	System.out.println("Please enter your first integer");
	num1 = scanner.nextInt();
	System.out.println("Please enter your second integer");
	num2 = scanner.nextInt();
	
	int sum = num1 + num2; 
	
	System.out.printf("Your computed sum is %d%n", sum);
	
	}

}

