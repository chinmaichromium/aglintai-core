import { Divider, IconButton, Stack } from '@mui/material';
import Mention from '@tiptap/extension-mention';
import { Placeholder } from '@tiptap/extension-placeholder';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

import { useJobAssistantContext } from '@/src/context/JobAssistant';

import suggetion from '../utils/suggetions';

let shiftEnabled = false;
// let isPopUpOpen = null;
function ChatEditor({
  value,
  onClick,
  onChange,
  getEditorRef,
  dataList,
}: {
  value: string;
  onClick: () => void;
  // eslint-disable-next-line no-unused-vars
  onChange: (x: { text: string; html: string; wordCount: number }) => void;
  getEditorRef: any;
  dataList: any[];
}) {
  let { isPopUpOpen, setIsPopUpOpen } = useJobAssistantContext();
  let editor = useEditor({
    autofocus: 0,
    extensions: [
      StarterKit,

      Mention.configure({
        HTMLAttributes: {
          class: 'mention',
        },
        suggestion: {
          ...suggetion,
          items: ({ query }) => {
            return dataList.filter((item) =>
              String(item.first_name)
                .toLowerCase()
                .startsWith(query.toLowerCase()),
            );
          },
          allowSpaces: true,
        },
      }),
      Placeholder.configure({
        placeholder: 'Chat with assistant',
        emptyEditorClass: 'is-editor-empty',
      }),

      // DisableEnter,
    ],
    onUpdate({ editor }) {
      if (onChange) {
        let value: {
          text: string;
          html: string;
          wordCount: number;
        } = {
          text: '',
          html: '',
          wordCount: 0,
        };
        if (!editor.isEmpty) {
          const text = editor.getText();
          value = {
            text,
            html: editor.getHTML(),
            wordCount: text.length,
          };
        }
        onChange(value);
      }
    },
    content: value,
  });

  if (!editor) {
    return null;
  }

  const resetText = () => {
    editor.commands.clearContent(true);
  };

  getEditorRef(() => editor);
  return (
    <Stack
      border={`1px solid`}
      borderRadius={'8px'}
      sx={{
        '& div': {
          width: '100%',
        },
        '& .tiptap p': {
          fontSize: '1rem',
          // margin: '1px',
          // p: '3px',
        },
        '& .ProseMirror-focused': {
          outline: 0,
        },
        '.tiptap p.is-editor-empty:first-child::before ': {
          color: '#adb5bd',
          content: 'attr(data-placeholder)',
          float: 'left',
          height: 0,
          'pointer-events': 'none',
        },
        '& .ProseMirror': {
          minHeight: `${1}em`,
          maxHeight: `${5}em`,
          overflow: 'auto',
          width: '100%',
          // wordBreak: 'break-word',
          whiteSpace: 'nowrap !important',
        },
      }}
      borderColor={'grey.400'}
      padding={'1px'}
      direction={'row'}
      alignItems={'center'}
      maxHeight={`${5}rem`}
      px={'15px'}
    >
      <EditorContent
        inputMode='text'
        onKeyDown={(e) => {
          if (e.key === '@') {
            setIsPopUpOpen(true);
          }
          if (e.key === 'Enter' && isPopUpOpen) {
            setIsPopUpOpen(false);
            return null;
          }
          if (e.key === 'Shift') {
            shiftEnabled = true;
          }
          if (!shiftEnabled && e.key === 'Enter' && value.trim().length !== 0) {
            // console.log('message sent');
            onClick();
            resetText();

            if (!shiftEnabled) {
              e.preventDefault();
            }
          }
        }}
        onKeyUp={(e) => {
          if (e.key === 'Shift') {
            shiftEnabled = false;
          }
        }}
        editor={editor}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation='vertical' />
      <IconButton
        type='button'
        sx={{ p: '10px' }}
        aria-label='search'
        disabled={!value.trim()}
        onClick={onClick}
      >
        <SendIcon />
      </IconButton>
    </Stack>
  );
}

export default ChatEditor;

export function SendIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
      role='img'
      className='iconify iconify--iconoir'
      width='25'
      height='25'
      preserveAspectRatio='xMidYMid meet'
      viewBox='0 0 24 24'
    >
      <path
        fill='none'
        stroke='currentColor'
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-width='1.5'
        d='M22 12L3 20l3.563-8L3 4zM6.5 12H22'
      ></path>
    </svg>
  );
}
