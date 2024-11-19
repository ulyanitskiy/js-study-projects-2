class EmailService {
    static instance = null;
    _logs = [];

    constructor() {
        if (EmailService.instance) {
            return EmailService.instance;
        }
        this._premiumEmails = [];
        EmailService.instance = this;
    }

    addPremiumEmail(email) {
        if (this._premiumEmails.length >= 5) {
            this._log('Error: Cannot add more than 5 premium emails.');
            throw new Error('Cannot add more than 5 premium emails.');
        }
        this._premiumEmails.push(email);
        this._log(`Added premium email: ${email}`);
    }

    get premiumEmails() {
        return this._premiumEmails;
    }

    _log(message) {
        this._logs.push(message);
        console.log(message);
    }

    get logs() {
        return this._logs;
    }
}

class PremiumEmailService extends EmailService {
    constructor() {
        super();
        if (PremiumEmailService.instance) {
            return PremiumEmailService.instance;
        }
        PremiumEmailService.instance = this;
    }
}

class EnterpriseEmailService extends EmailService {
    constructor() {
        super();
    }

    migratePremiumEmails(targetService) {
        if (!(targetService instanceof PremiumEmailService)) {
            this._log('Error: Target service must be an instance of PremiumEmailService.');
            throw new Error('Target service must be an instance of PremiumEmailService.');
        }
        targetService._premiumEmails = targetService._premiumEmails.concat(this._premiumEmails);
        this._premiumEmails = [];
        this._log('Migrated premium emails to target service.');
    }
}

const premiumService1 = new PremiumEmailService();
const premiumService2 = new PremiumEmailService();
const enterpriseService = new EnterpriseEmailService();

premiumService1.addPremiumEmail('vip1@premium.com');
premiumService1.addPremiumEmail('vip2@premium.com');

console.log(premiumService1.premiumEmails);

enterpriseService.addPremiumEmail('enterprise@premium.com');
enterpriseService.migratePremiumEmails(premiumService2);

console.log(premiumService2.premiumEmails);
console.log(premiumService1.logs);
