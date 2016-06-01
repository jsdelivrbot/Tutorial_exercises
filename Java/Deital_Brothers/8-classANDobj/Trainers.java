public enum Trainers
{
  //ENUM constants
  NIKE("ROSHES - Running Trainers" , "2012"),
  ADDIDAS("STANSMITH - Chilling Trainers", "1996"),
  PUMA("BOBCATS - All Terrain trainers", "1984"),
  REEBOK("CLASSICS - Standards baby", "1210");

  //instance fields
  private final String trainer;
  private final String year;

  //enum contructor
  Trainers(String trainer, String year)
  {
    this.trainer = trainer;
    this.year = year;
  }

  //accessor for trainer
  public String getTitle()
  {
    return trainer;
  }

  //accessor for year
  public String getYear()
  {
    return year;
  }
}
