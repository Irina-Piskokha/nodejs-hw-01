import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    const contacts = await readContacts();
    contacts.splice(0, contacts.length);

    await writeContacts(contacts);
  } catch (error) {
    console.log(error);
  }
};

removeAllContacts();
