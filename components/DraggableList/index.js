import React from 'react';
import PropTypes from 'prop-types';

export default class DraggableList extends React.Component {
  constructor(props) {
    super(props);

    this.onDragStart = this.onDragStart.bind(this);
    this.onDragOver = this.onDragOver.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.setDraggedItemIndex = this.setDraggedItemIndex.bind(this);

    this.state = {
      draggedItemIndex: null,
    };
  }

  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
      }),
    ),
    renderItem: PropTypes.func,
    handleDrag: PropTypes.func.isRequired,
  };

  static defaultProps = {};

  onDragStart(event, index) {
    const { dataTransfer } = event;

    this.setDraggedItemIndex(index);

    // Do some browser stuff
    dataTransfer.effectAllowed = 'move';
    dataTransfer.setData('text/html', event.target.parentNode); // firefox
    dataTransfer.setDragImage(event.target.parentNode, 20, 20); // chrome
  }

  onDragOver(index) {
    const { draggedItemIndex } = this.state;
    const { handleDrag } = this.props;

    handleDrag(draggedItemIndex, index);
  }

  setDraggedItemIndex(draggedItemIndex) {
    this.setState({
      draggedItemIndex,
    });
  }

  onDragEnd() {
    this.setDraggedItemIndex(null);
  }

  render() {
    const { items, renderItem } = this.props;

    return (
      <ul>
        {items.map((item, index) => {
          const { id } = item;

          return (
            <li key={id} onDragOver={() => this.onDragOver(index)}>
              <div
                className="drag"
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
