\/ Displays Title and imdbRating only
const displayFilter = (showArr) => {
  let filtered = [];
  showArr.forEach((ep)=>{
    let newObj = {};
    if (ep["Title"] && ep["imdbRating"]) {
      newObj["Title"] = ep["Title"];
      newObj["imdbRating"] = ep["imdbRating"];
      filtered.push(newObj);
    }
  });
  return filtered;
}

// Rating
const sortByRating = (showArr) => {
  const cb = (a, b) => {
    let firstRating = parseFloat(a.imdbRating);
    let secondRating = parseFloat(b.imdbRating);
    return secondRating - firstRating;
  }
  return showArr.sort(cb);
}

// Alphabetical sort by Title
const sortByTitle = (showArr) => {
  const cb = (a, b) => {
    return a["Title"].localeCompare(b["Title"]);
  }
  return showArr.sort(cb);
}

//Titles matching a first letter
const LetterFilter = (showArr, char) => {
  return showArr.reduce((acc, ep)=>{
    if (ep["Title"][0].toLowerCase() === char.toLowerCase()) {
      acc.push(ep);
    }
    return acc;
  }, []);
}

// console.log(displayFilter(episodes));
// console.log(sortByTitle(episodes));
// console.log(LetterFilter(episodes, "t"));
