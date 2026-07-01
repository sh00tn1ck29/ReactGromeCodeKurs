const rootElem = document.querySelector('#root');

const element = (
  <div class="greeting">
    <div class="greeting__title">Hello, world!</div>
    <div class="greeting__text">I'm learning React</div>
  </div>
);

ReactDOM.render(element, rootElem);
