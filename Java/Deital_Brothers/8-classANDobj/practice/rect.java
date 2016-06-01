public class rect
{
  float width;
  float length;

  public void setLength(float length)
  {
    if(length > 0.0 && length < 20.0)
    {
      this.length = length;
    }
    else
    {
      throw new IllegalArgumentException("Not in the valid range 0.0 - 20.0");
    }
  }

  public void setWidth(float width)
  {
    if(width > 0.0 && width < 20.0 )
    {
      this.width = width;
    }
    else
    {
        throw new IllegalArgumentException("Not in the valid range 0.0 - 20.0");
    }
  }

  public float getArea()
  {
    return width * length;
  }

  public float getPerimeter()
  {
    return (width + width) + (length + length);
  }


}
