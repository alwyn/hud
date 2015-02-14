package simple.domain;

/**
 * Created by James on 2/13/2015.
 */
public class Account {
    private final String id;
    private final double balance;

    public Account(String id, double balance) {
        this.id = id;
        this.balance = balance;
    }

    public String getId() {
        return id;
    }

    public double getBalance() {
        return balance;
    }
}
