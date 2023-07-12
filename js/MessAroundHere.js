class grabSpecificVerse {

    constructor(category, text) {
      this.cat = category;
      this.tex = text;
  }

    grabTheText() {
          let abc = getVerses();
          loveGodButton.addEventListener("click", this.grabTheText);
          displayResults.innerHTML = `${abc[this.cat][this.tex]}`
        }
  }

  //Create New Instance
    const mitzvahFour = new grabSpecificVerse(Shabbat, 3)


//-----------------------------

// class grabSpecificVerse {
//     book_name;
//     chapter;
//     verse;
//     text;

//     constructor(text, book_name, chapter, verse) {
//       this.book_name = book_name;
//       this.chapter = chapter;
//       this.verse = verse;
//       this.text = text;
//   }

//   grabAllVerses() {
//     getVerses()
//       .then(data => {
//         let verses = data.map(verse => verse.text);
//         displayResults.innerHTML = verses.join('<br>');
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }
// }

// loveGodButton.addEventListener('click', () => {
//   const grabVerse = new grabSpecificVerse();
//   grabVerse.grabAllVerses();
// });