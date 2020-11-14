import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;
export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const BooksWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 800px;
  padding-left: 10px;
  padding-right: 10px;
  overflow: auto;
  padding-bottom: 15vh;
  margin-left: 300px;

  @media (max-width: 800px) {
    flex-direction: column;
    margin-left: 0px;
  }
`;

export const BookList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const BookCard = styled.li`
  margin-top: 20px;
  max-width: 350px;
  background: rgba(51, 53, 55, 0.6);
  width: 100%;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: #fff;

  img {
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
    width: 170px;
    height: 220px;
  }

  div {
    text-align: left;
    padding-left: 15px;
    padding-right: 10px;
    width: 100%;
    height: 180px;
    display: flex;
    flex-direction: column;
    color: #fff;

    p {
      text-align: left;
      line-height: 1.5;
      margin-top: 8px;
      font-size: 13px;
      font-style: italic;
    }
  }
`;
