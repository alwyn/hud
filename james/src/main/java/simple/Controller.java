package simple;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import simple.domain.Account;
import simple.domain.AccountsContainer;

/**
 * Created by James on 2/13/2015.
 */
@RestController
public class Controller {
    @RequestMapping("/accounts")
    public Account[] listAccounts() {
        return AccountsContainer.getAccounts();
    }

    @RequestMapping("/account/{index}")
    public Account getAccountByIndex(@PathVariable("index") int index) {
        return AccountsContainer.getAccount(index);
    }
}
