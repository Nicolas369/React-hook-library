import { memo } from "react";

const Tab = memo(function SlowTab() {

  let items = [];
  for (let i = 0; i < 600; i++) {
    items.push(<SlowPost key={i} index={i} />);
  }

  return <ul className="transition-slow-tab">{ items }</ul>;
});

function SlowPost({ index }) {

  let startTime = performance.now();
  while (performance.now() - startTime < 3) {
    // process time 3ms
  }

  return <li className="item">Item #{index + 1}</li>;
}

export default Tab;
