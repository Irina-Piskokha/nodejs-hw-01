import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();

    const newContacts = [];
    for (let i = 0; i < number; i++) {
      newContacts.push(createFakeContact());
    }

    const updatedContacts = [...contacts, ...newContacts];

    await writeContacts(updatedContacts);
    console.log(newContacts);
  } catch (error) {
    console.log(error);
  }
};

generateContacts(5);
