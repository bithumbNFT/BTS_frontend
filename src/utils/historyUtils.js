// eslint-disable-next-line import/no-extraneous-dependencies
import { createBrowserHistory } from 'history';

export const browserHistory = createBrowserHistory();

export function push(targetUrl) {
  browserHistory.push(targetUrl);
}

export function redirect(targetUrl) {
  browserHistory.replace(targetUrl);
}

export default createBrowserHistory();
