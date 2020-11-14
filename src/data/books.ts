/* eslint-disable global-require */
export const books = [
  {
    title: 'Clean Code',
    url:
      'https://www.amazon.com/-/pt/dp/0132350882/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=clean+code&qid=1602799132&sr=8-1',
    cover: require('../assets/books/cleanCode_cover.jpg'),
    thoughts: `Main takeaways: (1) things in a specific 
              context should be as small as possible, classes, 
              functions, etc. (2)
              Good names and tests are extremely 
              important!`,
  },
  {
    title: 'Show your work',
    url:
      'https://www.amazon.com/-/pt/dp/076117897X/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=show+your+work&qid=1602799161&sr=8-1',
    cover: require('../assets/books/showYourWork_cover.jpg'),
    thoughts: `Great book, a quick read with a lot of good insights
              around content output, it inspired me to creating this 
              section of my portfolio.`,
  },
  {
    title: 'Design Patterns',
    url:
      'https://www.amazon.com.br/Design-Patterns-Object-Oriented-Addison-Wesley-Professional-ebook/dp/B000SEIBB8/ref=asc_df_B000SEIBB8/?tag=googleshopp00-20&linkCode=df0&hvadid=379725882390&hvpos=&hvnetw=g&hvrand=17396106931424707150&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001773&hvtargid=pla-406130702825&psc=1',
    cover: require('../assets/books/designPatterns_cover.jpg'),
    thoughts: `Pretty good book, I do feel like it is better used as a side 
              helper when designing projects and a very useful tool to understand
              existing designs using categories`,
  },
];
