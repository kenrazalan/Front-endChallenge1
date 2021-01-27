## Frontend Test

Fork this repository and finish the test, submit a pull request to the repository that our team will be notified of.

The test consists of a simple checkout containing 3 steps (cart, payment and success) [See the Layout] (https://projects.invisionapp.com/prototype/font-test-cji0j0khf005c1t0132358e8k)

** Do it when you want / can (dawn, weekend, etc.) **

### Requirements

- Pixel perfect ([on this link] (https://projects.invisionapp.com/prototype/font-test-cji0j0khf005c1t0132358e8k), you can inspect to see spacing, font, size, etc.)
- The application needs to be responsive, using the concept of mobile-first. Use your imagination to deliver a good desktop experience.
- Render each step in a unique URL (lib of routes).


### Step 1 - Cart:
  - Consume [this endpoint] (http://www.mocky.io/v2/5b15c4923100004a006f3c07) and list the cart items, as well as the cart summary;
  - Keep the JSON content to be used in the next steps;

### Step 2 - Payment:
  - Display a form with credit card fields with validation in each field;
  - Enable the Checkout button only if the form is valid;

### Step 3 - Success:
  - All content must be displayed from the persisted data;
  
### What we will evaluate:
  - Code organization;
  - Messages (in English) and changes in commits;
  - Composition / reuse of components;
  - Unitary tests;
  - The reason for choosing each tech in the stack;
  - How to run your application;)

### Differentials:
  - Split bundle by route (each step has a separate bundle to optimize performance);
  - CSS in JS;
  - React;

### End:
At the end of the test, submit a pull request to the repository that our team will be notified of. If you have any comments, write in the pull request.
