package simple;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import simple.domain.Account;
import simple.domain.AccountsContainer;

/**
 * Created by James on 2/13/2015.
 */
@RestController
public class Controller {
    @RequestMapping(value = "/accounts", method = RequestMethod.GET)
    public Account[] listAccounts() {
        return AccountsContainer.getAccounts();
    }

    @RequestMapping(value = "/account/{id}", method = RequestMethod.GET)
    public Account getAccountByIndex(@PathVariable("id") String id) {
        return AccountsContainer.getAccount(id);
    }
}
