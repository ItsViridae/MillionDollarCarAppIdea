import React, {Component} from 'react';
import Dropzone from '../../dropzone/Dropzone';
import '../../CSSfiles/Upload.css';
import Progress from '../Pages/Progress';

class Upload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            files: [],
            uploading: false,
            uploadProgress: {},
            successfullUploaded: false,
            message: '',
            imageUrl: '',
            images: []
        };

        this.onFilesAdded = this.onFilesAdded.bind(this);
        this.uploadFiles = this.uploadFiles.bind(this);
        this.sendRequest = this.sendRequest.bind(this);
        this.renderActions = this.renderActions.bind(this);
    }

    componentDidMount() {
        this.getImageById();
        this.getAllImages();
    }

    async getImageById(id) {
        await fetch(`https://localhost:44356/api/Image/${id}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/octet-stream'
            },
          })
            .then(response => {
                if (response.url) {
                    this.setState({ imageUrl: response.url })
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    async getAllImages(){
        await fetch(`https://localhost:44356/api/Image/`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/octet-stream'
            },
          })
            .then(response => {
                return response.json();
            })
            .then(response => {
                console.log(response);
                this.setState({images: response});
            })
            .catch(error => {
                console.log(error);
            })
    }

    onFilesAdded(files) {
        this.setState(prevState => ({
            files: prevState.files.concat(files)
        }));
    }

    renderProgress(file) {
        const uploadProgress = this.state.uploadProgress[file.name];
        if (this.state.uploading || this.state.successfullUploaded) {
            return (
                <div className="ProgressWrapper">
                    <Progress progress={uploadProgress ? uploadProgress.percentage : 0} />
                    <img
                        className="CheckIcon"
                        alt="done"
                        src="baseline-check_circle_outline-24px.svg"
                        style={{
                            opacity:
                                uploadProgress && uploadProgress.state === "done" ? 0.5 : 0
                        }}
                    />
                </div>
            );
        }
    }

    renderActions() {
        if (this.state.successfullUploaded) {
            return (
                <button onClick={() =>
                        this.setState({ files: [], successfullUploaded: false })}>
                    Clear
                </button>
            );
        } else {
            return (
                <button
                    disabled={this.state.files.length < 0 || this.state.uploading}
                    onClick={this.uploadFiles}>
                    Upload
                </button>
            );
        }
    }

    async uploadFiles() {
        this.setState({ uploadProgress: {}, uploading: true });
        const promises = [];
        this.state.files.forEach(file => {
            promises.push(this.sendRequest(file));
        });
        try {
            await Promise.all(promises);
            this.setState({ successfullUploaded: true, uploading: false });
            this.setState({ message: "Your Images have been uploaded!" });
        } catch (e) {
            console.log(e);
            //NEEDS Error Handling
            this.setState({ successfullUploaded: true, uploading: false });
        }
    }

    //This shit works, don't touch it!
    sendRequest(file) {
        return new Promise((resolve, reject) => {
            
            const req = new XMLHttpRequest();

            //Add EventListeners for each: 
            //progress
            req.upload.addEventListener("progress", event => {
                if (event.lengthComputable) {
                    const copy = { ...this.state.uploadProgress };
                    copy[file.name] = {
                        state: "pending",
                        percentage: (event.loaded / event.total) * 100
                    };
                    this.setState({ uploadProgress: copy });
                }
            });

            //load
            req.upload.addEventListener("load", event => {
                const copy = { ...this.state.uploadProgress };
                copy[file.name] = { state: "done", percentage: 100 };
                this.setState({ uploadProgress: copy });
                resolve(req.response);
            });

            //error
            req.upload.addEventListener("error", event => {
                const copy = { ...this.state.uploadProgress };
                copy[file.name] = { state: "error", percentage: 0 };
                this.setState({ uploadProgress: copy });
                reject(req.response);
            });

            const formData = new FormData();
            formData.append("file", file, file.name);

            req.open("POST", "https://localhost:44356/api/Image/Upload");
            req.send(formData);
        });
    }

    render() {
        return (
            <div className="Upload">
                <span className="Title">Upload Files</span>
                {/*<div>
                //renders one image
                    <img className="return-image" src={this.state.imageUrl} alt="shit"/>
                </div> */}
                {/* <div>
                //This is how you can map through many images
                    {this.state.images.map(imageString => {
                        return (
                            <div key={imageString}>
                                <img className="return-image" src={`data:image/jpeg;base64,${imageString}`} alt="done" />
                            </div>
                        );
                    })}
                    </div> */}
                <div className="Content">
                    <div>
                        <Dropzone
                            onFilesAdded={this.onFilesAdded}
                            disabled={this.state.uploading || this.state.successfullUploaded}
                        />
                    </div>
                    <div className="Files">
                        {this.state.files.map(file => {
                            return (
                                <div key={file.name} className="Row">
                                    <span className="Filename">{file.name}</span>
                                    {this.renderProgress(file)}
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div><br/>{this.state.message}<br/></div>
                <div className="Actions">
                    {this.renderActions()}
                </div>
            </div>
        );
    }
}
export default Upload;