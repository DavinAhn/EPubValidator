import React from 'react';
import PropTypes from 'prop-types';

const availableTypes = ['.epub'];

function isAvailableType(file) {
  return file.name.toLowerCase().endsWith(availableTypes);
}

const Label = {
  normal: 'Drag & drop ePub file here',
  active: 'Drop it here!',
  error: 'Check file format and then try again',
};

class DropZone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: Label.normal,
      isActive: false,
    };
  }

  componentWillMount() {
    document.addEventListener('drop', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const file = e.dataTransfer.files[0];
      let label = Label.normal;
      if (isAvailableType(file)) {
        this.props.handleReceivedFile(file);
      } else {
        label = Label.error;
      }
      this.setState({
        label,
        isActive: false,
      });
    });
    document.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (!this.props.isProcessing) {
        const needsActive = this.containsDropzone(e.target);
        this.setState({
          label: needsActive ? Label.active : Label.normal,
          isActive: needsActive,
        });
        if (needsActive) {
          e.dataTransfer.dropEffect = "copy";
          return true;
        }
      }
      e.dataTransfer.dropEffect = "none";
      return false;
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
      <div className={`dropzone_background ${this.props.isProcessing ? 'dropzone_processing' : ''} ${this.state.isActive ? "dropzone_active" : ""}`}>
        <div data-dropzone className="dropzone">
          <div className={`dropzone_waiting_label ${this.props.isProcessing ? 'hidden' : ''}`}>
            <div className={this.state.label === Label.error ? "error_color" : ""}>{this.state.label}</div>
            <div>or</div>
            <button type="button" className="button dropzone_import_button" aria-label="Select File" onFocus={(e) => {
              e.target.blur();
              document.getElementById('dropzone_import').click();
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"/>
              </svg>
              <span>Select file...</span>
            </button>
            <input id="dropzone_import" type="file" accept={availableTypes.join('|')} onChange={(e) => {
              let label = Label.normal;
              if (!this.props.isProcessing && e.target.files.length > 0) {
                const file = e.target.files[0];
                if (isAvailableType(file)) {
                  this.props.handleReceivedFile(file);
                } else {
                  label = Label.error;
                }
              }
              this.setState({
                label,
                isActive: false,
              });
            }} />
          </div>
          <div className={`dropzone_processing_label ${this.props.isProcessing ? '' : 'hidden'}`}>
            <div>Processing the uploaded ePub.</div>
          </div>
        </div>
      </div>
    );
  }
}

DropZone.propTypes = {
  handleReceivedFile: PropTypes.func.isRequired,
  isProcessing: PropTypes.bool.isRequired,
};

export default DropZone;
