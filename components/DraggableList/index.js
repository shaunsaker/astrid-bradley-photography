import React from 'react';
import PropTypes from 'prop-types';

import { getElementRect } from '../../utils';

export default class DraggableList extends React.Component {
  constructor(props) {
    super(props);

    this.onDragStart = this.onDragStart.bind(this);
    this.onDragOver = this.onDragOver.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.getItemHeight = this.getItemHeight.bind(this);
    this.setItemHeight = this.setItemHeight.bind(this);
    this.setDraggedFromItemIndex = this.setDraggedFromItemIndex.bind(this);
    this.setDraggedToItemIndex = this.setDraggedToItemIndex.bind(this);

    this.state = {
      draggedFromItemIndex: null,
      draggedToItemIndex: null,
      itemHeight: null,
    };
  }

  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
      }),
    ),
    renderItem: PropTypes.func,
    renderItemPlaceholder: PropTypes.func,
    handleDrag: PropTypes.func.isRequired,
  };

  static defaultProps = {};

  componentDidMount() {
    this.getItemHeight();
  }

  onDragStart(event, index) {
    const { dataTransfer } = event;

    this.setDraggedFromItemIndex(index);

    // Do some browser stuff
    dataTransfer.effectAllowed = 'move';
    dataTransfer.setData('text/html', event.target.parentNode); // firefox
    dataTransfer.setDragImage(event.target.parentNode, 20, 20); // chrome
  }

  onDragOver(index) {
    const { draggedFromItemIndex } = this.state;
    const { handleDrag } = this.props;

    this.setDraggedToItemIndex(index);

    handleDrag(draggedFromItemIndex, index);
  }

  getItemHeight() {
    // GET the first item's dimensions
    // GET the height from the dimensions
    // SET it to state
    const { items } = this.props;
    const firstItem = items[0];
    const { id } = firstItem;
    const rect = getElementRect(id);
    const { height } = rect;

    this.setItemHeight(height);
  }

  setItemHeight(itemHeight) {
    this.setState({
      itemHeight,
    });
  }

  setDraggedFromItemIndex(draggedFromItemIndex) {
    this.setState({
      draggedFromItemIndex,
    });
  }

  setDraggedToItemIndex(draggedToItemIndex) {
    this.setState({
      draggedToItemIndex,
    });
  }

  onDragEnd() {
    this.setDraggedFromItemIndex(null);
    this.setDraggedToItemIndex(null);
  }

  render() {
    const { draggedToItemIndex, itemHeight } = this.state;
    const { items, renderItem, renderItemPlaceholder } = this.props;

    return (
      <ul>
        {items.map((item, index) => {
          const { id } = item;
          const placeholderComponent =
            itemHeight &&
            index === draggedToItemIndex &&
            renderItemPlaceholder &&
            renderItemPlaceholder(itemHeight);

          return (
            <li key={id} onDragOver={() => this.onDragOver(index)}>
              {placeholderComponent}

              <div
                id={id}
                draggable
                onDragStart={(event) => this.onDragStart(event, index)}
                onDragEnd={this.onDragEnd}
              >
                {renderItem(item)}
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}
