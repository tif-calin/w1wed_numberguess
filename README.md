## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
    - This is your pseudocode
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
6) Think about how to validate each of your steps

## plan
1) create html outline
    - game rules section
    - main game section: input section, guess-button, too low/high/correct display
    - hearts/lives left 
    - stats (best score, average score, games played)
2) style html elements
3) create compareNumbers function and relevant tests
4) guess-button handler
    - tells if too high or too low or correct
    - removes a heart if not correct 
    - update game stats on game end
    - if game state is over (either win or lose), change to "Play Again"
5) play again resets hearts, score