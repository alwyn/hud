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
        accounts.add(new Account("10020102", 2302.33, 20, "My savings"));
        accounts.add(new Account("10340122", 103.57, 10, "Checking1"));
        accounts.add(new Account("00650105", 4456.80, 40, "Stupid Loan"));
        accounts.add(new Account("34349839", 3403.30, 50, "Mortgage"));
        accounts.add(new Account("67796065", 23.23, 10, "Checking2"));
        accounts.add(new Account("12305904", 4546.34, 20, "Rainy day fund"));
        accounts.add(new Account("954594359", 963.43, 10, "Kid's checking"));
        accounts.add(new Account("03894230", 583.34, 20, "college fund (and/or party fund)"));
        accounts.add(new Account("1239043", 34234.37, 60, "no idea"));
        accounts.add(new Account("123091230", 3423.35, 30, ""));
        accounts.add(new Account("12203025", 3475.76, 40, ""));
        accounts.add(new Account("77878", 293.23, 10, ""));
        accounts.add(new Account("93203244", 903498.75, 10, ""));
        accounts.add(new Account("0334902344", 2398.43, 20, ""));
    }
}
