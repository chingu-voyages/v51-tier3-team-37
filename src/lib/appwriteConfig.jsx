import { Client, Account } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66e594cd0039db4e0af2');

export const account = new Account(client);
export { ID } from 'appwrite';