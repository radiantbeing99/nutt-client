import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Pretendard Variable';
        font-weight: 45 920;
        font-style: normal;
        font-display: swap;
        src: local('Pretendard Variable'), url('./woff2/PretendardVariable.woff2') format('woff2-variations');
      }
      `}
  />
);

export default Fonts;
