/* eslint-disable security/detect-object-injection */
import { DatabaseEnums } from '@aglint/shared-types';
import { emailVariablePayloads } from '@aglint/shared-utils';
import { ReactRenderer } from '@tiptap/react';
import tippy from 'tippy.js';

import TempVariableList from './TempVariableList';

export const getTempVariables = (s: DatabaseEnums['email_slack_types']) => ({
  items: ({ query }) => {
    return emailVariablePayloads[s].filter((item) =>
      item.toLowerCase().startsWith(query.toLowerCase()),
    );
  },

  render: () => {
    let component;
    let popup;

    return {
      onStart: (props) => {
        component = new ReactRenderer(TempVariableList, {
          props,
          editor: props.editor,
        });

        if (!props.clientRect) {
          return;
        }

        popup = tippy('body', {
          getReferenceClientRect: props.clientRect,
          appendTo: () => document.body,
          content: component.element,
          showOnCreate: true,
          interactive: true,
          trigger: 'manual',
          placement: 'bottom-start',
        });
      },

      onUpdate(props) {
        component.updateProps(props);

        if (!props.clientRect) {
          return;
        }

        popup[0].setProps({
          getReferenceClientRect: props.clientRect,
        });
      },

      onKeyDown(props) {
        if (props.event.key === 'Escape') {
          popup[0].hide();

          return true;
        }

        return component.ref?.onKeyDown(props);
      },

      onExit() {
        popup[0].destroy();
        component.destroy();
      },
    };
  },
});
