package simple.domain;

/**
 * Created by James on 2/13/2015.
 */
public class Account {
    private final String id;
    private final double balance;
    private final int type;
    private final String nickname;

    public Account(String id, double balance, int type, String nickname) {
        this.id = id;
        this.balance = balance;
        this.type = type;
        this.nickname = nickname;
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
}
