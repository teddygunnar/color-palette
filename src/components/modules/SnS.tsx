import { FC } from "react";

const SnS: FC = () => {
  return (
    <aside className="sns">
      <a title="Twitter" href="https://twitter.com/yui540" target="_blank">
        <i className="fab fa-twitter"></i>
      </a>
      <a
        title="GitHub"
        href="https://github.com/yui540/palette"
        target="_blank"
      >
        <i className="fab fa-github"></i>
      </a>
      <a title="Web" href="https://yui540.graphics" target="_blank">
        <i className="fas fa-globe"></i>
      </a>
    </aside>
  );
};

export default SnS;
