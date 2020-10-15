/* eslint-disable global-require */
export const books = [
  {
    title: 'Clean Code',
    url:
      'https://www.amazon.com/-/pt/dp/0132350882/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=clean+code&qid=1602799132&sr=8-1',
    cover: require('../assets/books/cleanCode_cover.jpg'),
    thoughts: `Incredible book, main takeaways things in a specific 
              context should be as small as possible, classes, 
              functions, etc. Good names and tests are extremely 
              important!`,
  },
  {
    title: 'Show your work',
    url:
      'https://www.amazon.com/-/pt/dp/076117897X/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=show+your+work&qid=1602799161&sr=8-1',
    cover: require('../assets/books/showYourWork_cover.jpg'),
    thoughts: `Great book, a quick read with a lot of good insights
              around content output, it inspired me on creating this 
              section of my portfolio.`,
  },
];
