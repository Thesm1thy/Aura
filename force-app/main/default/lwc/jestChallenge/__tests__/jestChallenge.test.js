import { createElement } from 'lwc';
import JestChallenge from 'c/jestChallenge';
import createContact from '@salesforce/apex/contactController.createContact';

// Mock the createContact Apex method
jest.mock(
    '@salesforce/apex/ontactController.createContact',
    () => {
        return {
            default: jest.fn()
        };
    },
    { virtual: true }
);

describe('c-jest-challenge', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
        jest.clearAllMocks();
    });

    it('captures input field values and calls createContact', async () => {
        createContact.mockResolvedValue({});

        const element = createElement('c-jest-challenge', {
            is: JestChallenge
        });
        document.body.appendChild(element);

        await Promise.resolve();

        const firstNameInput = element.shadowRoot.querySelector('lightning-input[name="fName"]');
        const lastNameInput = element.shadowRoot.querySelector('lightning-input[name="lName"]');
        const accountNameInput = element.shadowRoot.querySelector('lightning-input[name="aName"]');

        console.log('First Name Input:', firstNameInput);
        console.log('Last Name Input:', lastNameInput);
        console.log('Account Name Input:', accountNameInput);

        expect(firstNameInput).not.toBeNull();
        expect(lastNameInput).not.toBeNull();
        expect(accountNameInput).not.toBeNull();

        firstNameInput.value = 'John';
        lastNameInput.value = 'Doe';

        firstNameInput.dispatchEvent(new CustomEvent('change'));
        lastNameInput.dispatchEvent(new CustomEvent('change'));

        const button = element.shadowRoot.querySelector('lightning-button');
        button.click();

        expect(createContact).toHaveBeenCalledWith({
            firstName: 'John',
            lastName: 'Doe',
            accountName: 'GenePoint'
        });
    });

    it('logs error when createContact fails', async () => {
        createContact.mockRejectedValue(new Error('An error occurred'));

        const element = createElement('c-jest-challenge', {
            is: JestChallenge
        });
        document.body.appendChild(element);

        await Promise.resolve();

        const firstNameInput = element.shadowRoot.querySelector('lightning-input[name="fName"]');
        const lastNameInput = element.shadowRoot.querySelector('lightning-input[name="lName"]');

        expect(firstNameInput).not.toBeNull();
        expect(lastNameInput).not.toBeNull();

        firstNameInput.value = 'John';
        lastNameInput.value = 'Doe';

        firstNameInput.dispatchEvent(new CustomEvent('change'));
        lastNameInput.dispatchEvent(new CustomEvent('change'));

        const button = element.shadowRoot.querySelector('lightning-button');
        button.click();

        expect(createContact).toHaveBeenCalledWith({
            firstName: 'John',
            lastName: 'Doe',
            accountName: 'GenePoint'
        });
    });
});


