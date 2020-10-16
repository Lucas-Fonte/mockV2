/* eslint-disable global-require */
import React, { useEffect, useState } from 'react';
import { BookCard, BookList, BooksWrapper, Container, Content } from './styles';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import { timeout } from '../../utils/tools/timeout';
import { DrawerMenu } from '../../components/DrawerMenu';
import { books } from '../../data/books';

const Books: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadContent = async () => {
      await timeout(2000);
      setLoaded(true);
    };

    loadContent();
  }, []);

  return (
    <Container>
      <DrawerMenu />
      <Header />
      <Content>
        <Loader loaded={loaded}>
          <BooksWrapper>
            <BookList>
              {books.map((book) => (
                <a key={book.title} href={book.url} target="__blank">
                  <BookCard>
                    <img src={book.cover} alt={book.title} />
                    <div>
                      <h2>{book.title}</h2>
                      <p>{book.thoughts}</p>
                    </div>
                  </BookCard>
                </a>
              ))}
            </BookList>
          </BooksWrapper>
        </Loader>
      </Content>
    </Container>
  );
};

export { Books };
