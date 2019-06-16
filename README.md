Description

This project provides basic autocomplete functionality for a text input field. Triggered by user input, and with 300 ms debounce, the star wars name api will be queried for the current input value, and the results will be listed under the input field. The matching substring in the result is marked in color for easier visibility. 
The application consists of a component for user input, that is linked to the api and receives back the name suggestions. It passes them to the listing component that marks the substring and displays the results.