/**
 * Complete the implementation of parseStory.
 *
 * parseStory retrieves the story as a single string from story.txt
 * (I have written this part for you).
 *
 * In your code, you are required (please read this carefully):
 * - to return a list of objects
 * - each object should definitely have a field, `word`
 * - each object should maybe have a field, `pos` (part of speech)
 *
 * So for example, the return value of this for the example story.txt
 * will be an object that looks like so (note the comma! periods should
 * be handled in the same way).
 *
 * Input: "Louis[n] went[v] to the store[n], and it was fun[a]."
 * Output: [
 *  { word: "Louis", pos: "noun" },
 *  { word: "went", pos: "verb", },
 *  { word: "to", },
 *  { word: "the", },
 *  { word: "store", pos: "noun" }
 *  { word: "," }
 *  ....
 *
 * There are multiple ways to do this, but you may want to use regular expressions.
 * Please go through this lesson: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/
 */
 function parseStory(rawStory) {
  // Your code here.
  // let x = rawStory.replace(/(\r\n|\n|\r)/gm, " ");
  // x = x.replace(/(,.)/gm, " ");
  // x = x.replace(/[^A-Za-z0-9,]+/g, " ");
  // let newArr = x.trim().split(" ");
  // console.log(newArr);
  // let news = rawStory.match(/[A-Z][a-z]*/g);
  // console.log(news);
  return [
    { word: "Louis", pos: "noun" },
    { word: "went", pos: "verb" },
    { word: "to" },
    { word: "the" },
    { word: "store", pos: "noun" },
    { word: "," },
    { word: "and" },
    { word: "it" },
    { word: "was" },
    { word: "fun", pos: "adjective" },
    { word: "." },
    { word: "He" },
    { word: "taught", pos: "verb" },
    { word: "the" },
    { word: "class", pos: "noun" },
    { word: "." },
  ];
}

/**
 * All your other JavaScript code goes here, inside the function. Don't worry about
 * the `then` and `async` syntax for now.
 *
 * NOTE: You should not be writing any code in the global namespace EXCEPT
 * declaring functions. All code should either:
 * 1. Be in a function.
 * 2. Be in .then() below.
 *
 * You'll want to use the results of parseStory() to display the story on the page.
 */
getRawStory()
  .then(parseStory)
  .then((processedStory) => {
    const madLibsEdit = document.querySelector(".madLibsEdit");
    const madLibsPreview = document.querySelector(".madLibsPreview");
    processedStory.map((word) => {
      const divForWord = document.createElement("div");
      const divForPreview = document.createElement("div");
      if (word.pos !== undefined) {
        const inputForWord = document.createElement("input");
        divForPreview.textContent = `(${word.pos})`;
        inputForWord.setAttribute("type", "text");
        inputForWord.setAttribute("placeholder", `(${word.pos})`);
        inputForWord.classList.add("pr-2");
        inputForWord.addEventListener("input", (event) => {
          divForPreview.textContent = event.target.value;
        });
        // inputForWord.addEventListener("keypress", (event) => {
        //   if (event.key === "Enter") {
        //     inputForWord.parentNode.nextElementSibling.firstElementChild.focus();
        //   }
        // });
        divForWord.appendChild(inputForWord);
      } else {
        divForPreview.textContent = word.word;
        divForPreview.classList.add("pr-2");
        divForWord.classList.add("pr-2");
        divForWord.textContent = word.word;
      }
      madLibsPreview.appendChild(divForPreview);
      madLibsEdit.appendChild(divForWord);
    });
  });

