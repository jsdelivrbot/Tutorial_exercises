public class Time1
{
  private int hour;
  private int minute;
  private int second;

  //time set
  public void setTime(int h, int m, int s)
  {
    if( (h >= 0 && h < 24) && (m >= 0 && m < 60) && (s >= 0 && s < 60)  )
    {
      hour = h;
      minute = m;
      second = s;
    }
    else
    {
      throw new IllegalArgumentException("Hour / minute or second out of range");
    }
  }

    //convert string in universal time format
    public String toUniversalString()
    {
      return String.format("%d:%02d:%02d %s", hour , minute, second);
    }

    //return object toString
  public String toString()
  {
    return String.format("%d:%02d:%02d %s", ((hour == 0 || hour == 12) ? 12 : hour % 12), minute, second,
                        (hour < 12 ? "AM" : "PM"));
  }




}
