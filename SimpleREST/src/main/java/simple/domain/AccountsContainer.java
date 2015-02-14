package simple.domain;

import java.util.ArrayList;

/**
 * Created by James on 2/13/2015.
 */
public class AccountsContainer {
    private static ArrayList<Account> accounts;

    public static Account[] getAccounts() {
        Account[] accountsArr = new Account[accounts.size()];
        return accounts.toArray(accountsArr);
    }

    public static Account getAccount(int index) {
        return accounts.get(index);
    }

    static {
        accounts = new ArrayList<>();
        accounts.add(new Account("10020102", 2302.33));
        accounts.add(new Account("10340122", 103.57));
        accounts.add(new Account("00650105", 4456.80));
        accounts.add(new Account("34349839", 3403.30));
        accounts.add(new Account("67796065", 23.23));
        accounts.add(new Account("12305904", 4546.34));
        accounts.add(new Account("954594359", 963.43));
        accounts.add(new Account("03894230", 583.34));
        accounts.add(new Account("1239043", 34234.37));
        accounts.add(new Account("123091230", 3423.35));
        accounts.add(new Account("12203025", 3475.76));
        accounts.add(new Account("77878", 293.23));
        accounts.add(new Account("932032438902490234", 98903498.75));
        accounts.add(new Account("03349023483982498234902384329420934824982343242323534", 332942398.43));
    }
}
