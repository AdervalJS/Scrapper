import styled, { css } from 'styled-components';

const CompactItemListResponsive = css`
  #compactItemList .content {
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));

    #itemCompacted {
      margin: 0px;
      width: auto;
    }
  }
`;

const SimpleListResponsive = css`
  #simpleItemList .content {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));

    #itemSimple {
      min-width: 100px;
      height: auto;
      width: auto;
      margin: 0px;

      #itemImage {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;

  #compactItemList .content,
  #simpleItemList .content {
    grid-gap: 10px;
    display: grid;
    overflow-x: hidden;
    padding: 6px;
  }

  ${SimpleListResponsive}
  ${CompactItemListResponsive}
`;

export const Header = styled.div.attrs({
  className: 'header',
})`
  display: flex;

  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export const HeaderOptions = styled.div.attrs({
  className:'header-options'
})`
  display: flex;

  button {
    margin-left: 6px;
  }
`;
