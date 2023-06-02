import { Editor, defaultValueCtx, rootCtx } from '@milkdown/core';
import { block } from '@milkdown/plugin-block';
import { clipboard } from '@milkdown/plugin-clipboard';
import { cursor } from '@milkdown/plugin-cursor';
import { diagram } from '@milkdown/plugin-diagram';
import { history } from '@milkdown/plugin-history';
import { indent } from '@milkdown/plugin-indent';
import { math } from '@milkdown/plugin-math';
import { prism } from '@milkdown/plugin-prism';
import { commonmark } from '@milkdown/preset-commonmark';
import { Milkdown, useEditor } from '@milkdown/react';
import { nord } from '@milkdown/theme-nord';

import '@milkdown/theme-nord/style.css';

const markdown = `
# yomi

Create notes with **Markdown**


> Any fool can write code that a computer can understand. Good programmers write code that humans can understand.

-- Martin Fowler
`;

export default function MilkdownEditor() {
  const { get } = useEditor((root) =>
    Editor.make()
      .config(nord)
      .config((ctx) => {
        ctx.set(rootCtx, root);
        ctx.set(defaultValueCtx, markdown);
      })
      .use(commonmark)
      .use(history)
      .use(clipboard)
      .use(indent)
      .use(block)
      .use(diagram)
      .use(math)
      .use(cursor)
      .use(prism)
  );

  return <Milkdown />;
}
