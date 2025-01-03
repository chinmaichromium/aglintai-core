import { type SuggestionProps } from '@tiptap/suggestion';
import React, { Component } from 'react';

import { AiCommand } from './CustomNodes/_common/AiCommand';

class CommandList extends Component<SuggestionProps> {
  state = {
    selectedIndex: 0,
  };

  componentDidUpdate(oldProps: any) {
    if (this.props.items !== oldProps.items) {
      this.setState({
        selectedIndex: 0,
      });
    }
  }

  onKeyDown({ event }: any) {
    if (event.key === 'ArrowUp') {
      this.upHandler();
      return true;
    }

    if (event.key === 'ArrowDown') {
      this.downHandler();
      return true;
    }

    if (event.key === 'Enter') {
      this.enterHandler();
      return true;
    }

    return false;
  }

  upHandler() {
    this.setState({
      selectedIndex:
        (this.state.selectedIndex + this.props.items.length - 1) %
        this.props.items.length,
    });
  }

  downHandler() {
    this.setState({
      selectedIndex: (this.state.selectedIndex + 1) % this.props.items.length,
    });
  }

  enterHandler() {
    this.selectItem(this.state.selectedIndex);
  }

  selectItem(index: number) {
    const item = this.props.items[Number(index)];

    if (item) {
      this.props.command(item);
    }
  }

  render() {
    return (
      <>
        <AiCommand
          isAiCommandVisible={false}
          isAiCommandActive={this.state.selectedIndex === 0}
          isCandidateNameActive={this.state.selectedIndex === 0}
          isRecruiterActive={this.state.selectedIndex === 1}
          onClickAiCommand={{
            onClick: () => {
              this.selectItem(0);
            },
          }}
          onClickCandidateName={{
            onClick: () => {
              this.selectItem(1);
            },
          }}
          onClickRecruiterName={{
            onClick: () => {
              this.selectItem(2);
            },
          }}
        />
      </>
    );
  }
}

export default CommandList;

// {items.map((item, index) => {
//           return (
//             // <button
//             //   className={`item ${
//             //     index === this.state.selectedIndex ? 'is-selected' : ''
//             //   }`}
//             //   key={index}
//             //   onClick={() => this.selectItem(index)}
//             // >
//             //   {item.element || item.title}
//             // </button>
//             <></>
