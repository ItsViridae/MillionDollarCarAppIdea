import React, { Component } from 'react'
import './Dropzone.css'

class Dropzone extends Component {
    constructor(props) {
        super(props);

        this.state = { highlight: false };
        this.fileInputRef = React.createRef();

        //binds to fxn
        this.openFileDirectory = this.openFileDirectory.bind(this);
        this.onFilesAdded = this.onFilesAdded.bind(this);
        this.onDragOver = this.onDragOver.bind(this);
        this.onDragLeave = this.onDragLeave.bind(this);
        this.onDrop = this.onDrop.bind(this);
    }

    openFileDirectory() {
        if (this.props.disabled) return;
        this.fileInputRef.current.click();
    }

    onFilesAdded(event) {
        if (this.props.disabled) return;
        const files = event.target.files;
        if (this.props.onFilesAdded) {
            const array = this.fileListToArray(files);
            this.props.onFilesAdded(array);
        }
    }

    fileListToArray(list) {
        const array = [];
        for (var i = 0; i < list.length; i++) {
            array.push(list.item(i));
        }
        return array;
    }

    onDragOver(event) {
        event.preventDefault();

        if (this.props.disabled) return;

        this.setState({ highlight: true });
    }

    onDragLeave() {
        this.setState({ highlight: false });
    }

    onDrop(event) {
        event.preventDefault();

        if (this.props.disabled) return;

        const files = event.dataTransfer.files;
        if (this.props.onFilesAdded) {
            const array = this.fileListToArray(files);
            this.props.onFilesAdded(array);
        }
        this.setState({ highlight: false });
    }

    render() {
        return (
            <div className={`Dropzone ${this.state.highlight ? "Highlight" : ""}`}
                onDragOver={this.onDragOver}
                onDragLeave={this.onDragLeave}
                onDrop={this.onDrop}
                onClick={this.openFileDirectory}
                style={{ cursor: this.props.disabled ? "default" : "pointer" }}>
            <img
                alt="upload"
                className="Icon"
                src="baseline-cloud_upload-24px.svg"
                />
                <input
                    ref={this.fileInputRef}
                    className="FileInput"
                    type="file"
                    multiple
                    onChange={this.onFilesAdded}
                />
            <span>Upload Files</span>
        </div>
        );
    }
}

export default Dropzone