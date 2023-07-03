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
import { defaultContent } from '../../lib/content';
import { useNotesStore } from '../../stores/useNotesStores';

export default function EditorMilkdown() {
  const current = useNotesStore((s) => s.current);

  useEditor((root) =>
    Editor.make()
      .config(nord)
      .config((ctx) => {
        ctx.set(rootCtx, root);

        if (!current) {
          // if no, show default value
          ctx.set(defaultValueCtx, defaultContent);
          return;
        }

        // update with current content
        ctx.set(defaultValueCtx, current.content);
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

  return (
    <div className="h-full">
      <Milkdown />
    </div>
  );
}
