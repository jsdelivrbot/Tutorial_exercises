import java.awt.Graphics;
import javax.swing.*;

public class DrawPanel extends JPanel
{
	public void paintComponent( Graphics g )
	{
		//call paintComponent to ensure the panel displays correctly 
		super.paintComponent(g); 
		
		int width = getWidth();
		int height = getHeight();
		int counter = getWidth();
		
		//while(counter >= 0)
		//draw
		g.drawLine(0,0,width/4,height);
		g.drawLine(0,0,width/3,height);
		g.drawLine(0,0,width/2,height);
		g.drawLine(0,0,width,height);
		g.drawLine(0,0,width*2,height);
		g.drawLine(0,0,width*3,height);
		g.drawLine(0,0,width*4,height);
	}

}
