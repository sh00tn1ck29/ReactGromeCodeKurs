const rootElem = document.querySelector('#root');
const element = /*#__PURE__*/React.createElement("div", {
  className: "greeting"
}, /*#__PURE__*/React.createElement("div", {
  className: "greeting__title"
}, "Hello, world!"), /*#__PURE__*/React.createElement("div", {
  className: "greeting__text"
}, "I'm learning React"));
ReactDOM.render(element, rootElem);
