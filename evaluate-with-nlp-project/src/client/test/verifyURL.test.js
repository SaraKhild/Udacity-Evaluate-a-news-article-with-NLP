// Import the js file to test
import { is_url_valid } from "../js/verifyURL";


describe('Test if "is_url_valid()" function is exist' , () => {
    test('It should return true', async () => {
        expect(is_url_valid).toBeDefined();
    });
});

describe('Test "is_url_valid()" should be a function' , () => {
    test('It should be a function', async () => {
        expect(typeof is_url_valid).toBe("function");
    });
});

describe('Test the function "is_url_valid()" for valid url' , () => {
     //'https' is valid
    var TheURLIs = "https://skillcrush.com/blog/skills-to-become-a-front-end-developer/";
    test('It should return true if valid URL', async () => {
        const response = is_url_valid(TheURLIs);
        expect(response).toBeDefined();
        expect(response).toBe(true);
       
    });
});
describe('Test "is_url_valid()" for invalid url' , () => {
    // I replaced 'https' with 'htttps' to make it invalid
    var TheURLIs = "htttps://skillcrush.com/blog/skills-to-become-a-front-end-developer/";
    test('It should return false if invalid URL ', async () => {
        const response = is_url_valid(TheURLIs);
        expect(response).toBeDefined();
        expect(response).toBe(false);
    });
});