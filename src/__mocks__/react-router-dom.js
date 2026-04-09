const React = require('react');

module.exports = {
  BrowserRouter: ({ children }) => React.createElement(React.Fragment, null, children),
  MemoryRouter: ({ children }) => React.createElement(React.Fragment, null, children),
  Routes: ({ children }) => React.createElement(React.Fragment, null, children),
  Route: ({ element }) => element,
  Link: ({ to, children, className }) =>
    React.createElement('a', { href: to, className }, children),
  useNavigate: () => jest.fn(),
  useLocation: () => ({ pathname: '/' }),
};
