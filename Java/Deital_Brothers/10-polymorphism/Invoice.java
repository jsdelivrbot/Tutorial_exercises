public class Invoice implements Payable
{
  private String partNumber;
  private String partDescription;
  private int quantity;
  private double pricePerItem;

  //declare constructor
  public Invoice(String part, String description, int quantity, double price)
  {
    partNumber = part;
    partDescription = description;
    setQuantity( quantity );
    setPricePerItem( price );
  }

  //Set Part number
  public void setPartNumber(String part)
  {
    partNumber = part;
  }

  public String getPartNumber()
  {
    return partNumber;
  }

  public void setPartDescription(String description)
  {
    partDescription = description;
  }

  public Strinf getPartDescription()
  {
    return partDescription;
  }

  public void setQuantity(int quantity)
  {
    if(quantity > 0)
    {
      this.quantity = quantity;
    }
    else
    {
      throw new IllegalArgumentException("Quantity needs to be over 0")
    }
  }

  public int getQuantity()
  {
    return quantity;
  }

  public void setPricePerItem(int item)
  {
    if(item > 0.1)
    {
      pricePerItem = item;
    }
    else
    {
      throw new IllegalArgumentException("Price per Item needs to be over 1 penny");
    }
  }

  public double getPricePerItem()
  {
    return pricePerItem;
  }

  //override default object toString method
  @Override
  public String toString()
  {
    return String.format("%s: \n%s: (%s) \n%s: %d \n%s: £%,.2f",
        "invoice", "part number" , getPartNumber(), "Part Description" , getPartDescription(),
        "Quantity" , getQuantity(), "pricePerItem" , getPricePerItem());
  }

  //method required to carry out contract with Payable class
  

}//end of class
