import React from 'react';
import PropTypes from 'prop-types';

const availableTypes = ['.epub'];

function isAvailableType(file) {
  return file.name.toLowerCase().endsWith(availableTypes);
}

const Label = {
  normal: 'Drag & drop ePub file here',
  formatError: 'Check file format and then try again',
};

class DropZone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: Label.normal,
    };
  }

  componentWillMount() {
    document.addEventListener('drop', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const file = e.dataTransfer.files[0];
      if (isAvailableType(file)) {
        this.props.handleReceivedFile(file);
      } else {
        this.setState({label: Label.formatError});
      }
    });
    document.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (this.containsDropzone(e.target)) {
        e.dataTransfer.dropEffect = "copy";
      } else {
        e.dataTransfer.dropEffect = "none";
        return false;
      }
    });
  }

  containsDropzone(target) {
    let element = target;
    while (element !== null) {
      if (element.attributes['data-dropzone']) {
        return true;
      }
      element = element.parentElement;
    }
    return false;
  }

  render() {
    return (
      <div className="dropzone_background">
        <div data-dropzone className="dropzone">
          <div className={this.state.label !== Label.normal ? "error_color" : ""}>{this.state.label}</div>
          <div>or</div>
          <button type="button" className="button dropzone_import_button" aria-label="Select File" onClick={() => {
            document.getElementById('dropzone_import').click();
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"/>
            </svg>
            <span>Select file...</span>
          </button>
          <input id="dropzone_import" type="file" accept={availableTypes.join('|')} onChange={(e) => {
            const file = e.target.files[0];
            if (file && isAvailableType(file)) {
              this.props.handleReceivedFile(file);
            } else {
              this.setState({label: Label.formatError});
            }
          }} />
        </div>
      </div>
    );
  }
}

DropZone.propTypes = {
  handleReceivedFile: PropTypes.func.isRequired,
};

export default DropZone;
