/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite klasę "Movie", kuri sukuria objektus su 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnis nei 100 000 000 mln USD, tada gražins true, kitu atveju false.
------------------------------------------------------------------------------------------------------ */


class Movie {
    constructor(title, director, budget) {
      this.title = title;
      this.director = director;
      this.budget = budget;
    }
    wasExpensive = () => {
      let expensive = (this.budget > 100000000)
      return "This film was expensive: " + expensive;
    }
  
  
  
  
  }
  
  let film1 = new Movie("Spider-Man", "Sam-Raimi", 100000001)
  let film2 = new Movie("Rush Hour", "Brett Ratner", 950000)
  
  console.log(film1)
  console.log(film1.wasExpensive())
  
  console.log(film2)
  console.log(film2.wasExpensive())