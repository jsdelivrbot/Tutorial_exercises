import javax.swing.JOptionPane;

public class InputD
{

	public static void main(String[] args)
	{
	
		boolean secPass = false; 
		
		//prompt user to enter name
		String name = JOptionPane.showInputDialog("What is your name?"); 
		
		switch (name)
		{
			case "charlie":
				secPass = true;
				break;
			case "dasha":
				secPass = true; 
				break;
			case "Jack": 
				secPass = true;
				break; 
			case "Jill": 
				secPass = true;
				break;
				 			
		}
		
		String message = String.format("Welcome, %s, to Java programming!", name);
		
		if(secPass)
		{
			JOptionPane.showMessageDialog(null, message);	
		}
		else 
		{
			JOptionPane.showConfirmDialog(null, "I am legally allowed to enter the sys", "Are you authorized to use this System?", 				  JOptionPane.INFORMATION_MESSAGE);
		}
		 
		 
		 
		
		
	} 

}
