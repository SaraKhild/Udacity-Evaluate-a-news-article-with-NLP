// Import the js file to test
import { handleSubmit } from "../js/formHandler"



describe('Test the "handleSubmit()" is functionality existing', () => {
  
    test('Test it is should to be defined', () => {
           expect(handleSubmit).toBeDefined();
});

    test('Test the handleSubmit() should be function', () => {
         expect(typeof handleSubmit).toBe("function");
});

});