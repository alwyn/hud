package simple.domain;

/**
 * Created by James on 2/13/2015.
 */
public class Account {
    private final String id;
    private final double balance;
    private final int type;
    private final String nickname;
    private final Transaction[] transactionHistory;

    public Account(String id, double balance, int type, String nickname) {
        this.id = id;
        this.balance = balance;
        this.type = type;
        this.nickname = nickname;
        this.transactionHistory = generateTransactionHistory();
    }

    private Transaction[] generateTransactionHistory()
    {
        return new Transaction[] {
                new Transaction("02/20/15 11:33 AM", "Hotdog Stand", 7.89d),
                new Transaction("02/20/15 12:56 PM", "Arby's", 5.23d),
                new Transaction("02/20/15 13:04 PM", "Target 0403", 47.65d),
                new Transaction("02/20/15 13:46 PM", "Starsux 'Coffee'", 12.89d),
                new Transaction("02/20/15 14:14 PM", "Butts Emporium", 545.89d),
                new Transaction("02/20/15 14:32 PM", "Mortgage Payment", 8583938.89d),
                new Transaction("02/20/15 23:50 PM", "Xfer from x3493 to x9079", 100d)
        };
    }

    public String getId() {
        return id;
    }

    public double getBalance() {
        return balance;
    }

    public String getNickname() {
        return nickname;
    }

    public int getType() {
        return type;
    }

    public Transaction[] getTransactionHistory()
    {
        return transactionHistory;
    }
}
