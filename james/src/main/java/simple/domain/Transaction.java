package simple.domain;

/**
 * Created by Jparker on 2/27/2015.
 */
public class Transaction
{
	private String datetime;
	private String description;
	private double amount;

	public Transaction(String datetime, String description, double amount)
	{
		this.datetime = datetime;
		this.description = description;
		this.amount = amount;
	}

	public String getDatetime()
	{
		return datetime;
	}

	public void setDatetime(String datetime)
	{
		this.datetime = datetime;
	}

	public String getDescription()
	{
		return description;
	}

	public void setDescription(String description)
	{
		this.description = description;
	}

	public double getAmount()
	{
		return amount;
	}

	public void setAmount(double amount)
	{
		this.amount = amount;
	}
}
