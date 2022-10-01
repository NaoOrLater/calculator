# calculator

Demonstrating fundamental knowledge of JavaScript, HTML, and CSS by creating a calculator app.

Important things learned from this project:
When linking JS files in the <head> of your HTML doc.
Use the defer keyword to load the file after the HTML is parsed, as such:

<head>
  <script src="js-file.js" defer></script>
</head>

Plan out your functions ahead of time in case you need to reuse them as a callback function for other functions in the future.
Example: Having the operator function be reusable so that it can be applied to the operator keys on the keyboard.

Also, practice not having to use === true and === false for my function logic

Nearing the end of the project when adding keyboard functionality, I ended up having the calculator take in both x and \* as operators for multiplication.
Unsure if this would be a good idea. Also made me think of having the functions be more dynamic instead of hard entering values.
Need to be more abstract with my thought process.
