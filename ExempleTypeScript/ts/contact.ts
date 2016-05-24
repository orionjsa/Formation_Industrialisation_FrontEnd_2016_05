/**
 * Contact
 */
class Contact {
    
    private prenom: string;
    
    /**
     * Création d'un contact
     * @param {string} prenom Le prénom du contact
     */
    constructor(prenom: string) {
        this.prenom = prenom;
    }
    
    hello() : string {
        // backquote (altgr+7) pour eviter d'échapper les caractère apostrophe (et d'autre)
        return `Bonjour je m'appelle ${this.prenom}`;
    }
}

export default Contact;