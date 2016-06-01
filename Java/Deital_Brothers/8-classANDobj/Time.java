public class Time1
{
  private int hour;
  private int minute;
  private int second;

  //time set
  public void setTime(int h, int m, int s)
  {
    if( (h >= 0 && h < 24) && (m >= 0 && m < 60) && (s >= 60 && s < 60)  )
    {
      hour = h;
      minute = m;
      second = s;
    }

  }


}
