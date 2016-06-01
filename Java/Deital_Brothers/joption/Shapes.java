//Demonstrates drawinf different shapes 

import java.awt.Graphics; 
import javax.swing.*;

public class Shapes extends JPanel
{

	private int choice; 
	
	//constructor
	public Shapes(int choice)
	{
		this.choice = choice; 
	}
	
	//draws cascading shape 
	public void paintComponent(Graphics g)
	{
		super.paintComponent(g);
		
		for(int i = 0; i < 10; i++)
		{
			switch(choice)
			{
				case 1: //rectangle
				g.drawRect( 10 + i * 10, 10 + i * 10, 50 + i * 10, 50 + i * 10);
				break; 
				case 2: //oval
				g.drawOval(10 + i * 10, 10 + i * 10, 50 + i * 50, 50 + i * 50);
				break;
			} //E/Switch
		} //E/for
	}
}
