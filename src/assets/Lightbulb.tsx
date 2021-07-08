import * as React from 'react';
import Svg, { FillProps, Path } from 'react-native-svg';

export default ({ fill }: FillProps) => (
  <Svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <Path
      d="M16.3743 12.4393C17.4445 11.1215 17.9489 9.43339 17.7771 7.74451C17.6053 6.05563 16.7713 4.50366 15.4576 3.42844C14.705 2.82526 13.8275 2.39716 12.8889 2.17518C11.9503 1.95321 10.974 1.94294 10.0309 2.1451C8.97203 2.37931 7.98978 2.87807 7.17591 3.5948C6.36203 4.31152 5.74309 5.22284 5.37689 6.24361C5.0107 7.26439 4.90919 8.36133 5.08185 9.43197C5.25452 10.5026 5.69572 11.512 6.36425 12.3659C6.97354 13.1072 7.32149 14.0286 7.35425 14.9876V15.2534C7.00545 15.5904 6.80439 16.0519 6.79508 16.5368V18.3701C6.79508 18.8563 6.98824 19.3226 7.33205 19.6665C7.67587 20.0103 8.14219 20.2034 8.62842 20.2034C8.62842 20.2034 10.3485 20.2034 11.3784 20.2034C12.4083 20.2034 14.1284 20.2034 14.1284 20.2034C14.6146 20.2034 15.081 20.0103 15.4248 19.6665C15.7686 19.3226 15.9618 18.8563 15.9618 18.3701V16.5368C15.9622 16.0571 15.7746 15.5964 15.4393 15.2534V14.8593C15.466 13.9696 15.7959 13.1158 16.3743 12.4393ZM8.62842 18.3701V16.5368H14.1284V18.3701H8.62842ZM14.9443 11.2934C14.1328 12.2505 13.6621 13.4499 13.6059 14.7034H9.14175C9.05528 13.4335 8.5746 12.2221 7.76675 11.2384C7.28148 10.6294 6.95937 9.90683 6.83082 9.13881C6.70227 8.37079 6.77151 7.58268 7.03202 6.84885C7.29253 6.11502 7.73572 5.45966 8.31976 4.94461C8.9038 4.42956 9.60943 4.07181 10.3701 3.9051C11.044 3.75309 11.7436 3.75539 12.4165 3.91184C13.0894 4.06829 13.7183 4.37484 14.256 4.80856C14.7938 5.24229 15.2265 5.79197 15.5219 6.4165C15.8173 7.04104 15.9676 7.72427 15.9618 8.4151C15.9675 9.46366 15.6077 10.4815 14.9443 11.2934Z"
      fill={fill}
    />
  </Svg>
);