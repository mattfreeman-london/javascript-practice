/// set up sample input
let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

/// set up list of words to look out for
let overusedWords = ['really', 'very', 'basically'];

/// set up unnecessary words list
let unnecessaryWords = ['extremely', 'literally', 'actually' ];

/// split the input into individual words
let storyWords = story.split(' ');

/// variable to return story, removing unwanted words
let betterWords = storyWords.filter(function(word) {
  return !unnecessaryWords.includes(word)
} )

/// set variables to count incidents of over-used words
let reallyCount = 0;
let veryCount = 0;
let basicallyCount = 0;

/// count each unwanted word
for (word of storyWords) {
  if (word === 'really') {
    reallyCount += 1
  } else if (word === 'very') {
    veryCount += 1
  } else if (word === 'basically') {
    basicallyCount += 1
  }
}

/// set variable to count number of sentences in the story
let sentencesCount = 0

/// count sentences
for (word of storyWords) {
  if (word[word.length-1] === '.' || word[word.length-1] === '!') {
    sentencesCount += 1;
  }
};

console.log('word count:', storyWords.length);
console.log('sentences:', sentencesCount);
console.log('Reallys:', reallyCount);
console.log('Verys:', veryCount);
console.log('Basicallys:', basicallyCount);

console.log(betterWords.join(' '))

/// Output:
/// word count: 188
/// sentences: 12
/// Reallys: 2
/// Verys: 5
/// Basicallys: 1
/// Last weekend, I took the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It's really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you cross back into New York! At this point, you are very close to the end.
