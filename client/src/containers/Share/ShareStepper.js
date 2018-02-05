import React, { Component } from "react";
import {
  Step,
  Stepper,
  StepLabel,
  StepContent
} from "material-ui/Stepper";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";

import {
  shareUpdateImage,
  shareUpdateTitle,
  shareUpdateDescription,
  toggleImageSelected,
  resetShareCardFields
} from "../../redux/modules/share";

import firebase from "firebase";
import { firebaseAuth } from "../../config/firebase";

import gql from "graphql-tag";
import { graphql, compose } from "react-apollo";

import { connect } from "react-redux";

import Filter from "../../components/FilterField/FilterField";

import { withRouter } from "react-router-dom";

/**
 * Vertical steppers are designed for narrow screen sizes. They are ideal for mobile.
 *
 * To use the vertical stepper with the contained content as seen in spec examples,
 * you must use the `<StepContent>` component inside the `<Step>`.
 *
 * <small>(The vertical stepper can also be used without `<StepContent>` to display a basic stepper.)</small>
 */
class ShareStepper extends Component {
  state = {
    finished: false,
    stepIndex: 0
  };

  openFileDialog = () =>
    document.getElementById("image").click();

  uploadFile = input => {
    // create firebase storage reference
    const ref = firebase.storage().ref();
    // get the file to be uploaded from the input[type="file"]
    const file = input.target.files[0];
    const name = `${+new Date()}-${file.name}`;
    const metadata = {
      contentType: file.type
    };
    const task = ref.child(name).put(file, metadata);
    task
      .then(snapshot => {
        const url = snapshot.downloadURL;
        // set the url in the redux storage
        this.props.shareUpdateImage(url);
        // let the user proceed to the Next step
        this.props.toggleImageSelected(false);
      })
      .catch(error => error.message);
  };

  handleUpdateTitle = ({ target: { value } }) => {
    this.props.updateTitle(value);
  };

  handleUpdateDescription = ({ target: { value } }) => {
    this.props.updateDescription(value);
  };

  handleNext = () => {
    const { stepIndex } = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2
    });
  };

  handlePrev = () => {
    const { stepIndex } = this.state;
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 });
    }
  };

  renderStepActions(step) {
    const { stepIndex } = this.state;

    return (
      <div style={{ margin: "12px 0" }}>
        <RaisedButton
          label={stepIndex === 3 ? "Confirm" : "Next"}
          disableTouchRipple={true}
          disableFocusRipple={true}
          onClick={this.handleNext}
          style={{ marginRight: 12 }}
        />
        {step > 0 && (
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onClick={this.handlePrev}
          />
        )}
      </div>
    );
  }

  render() {
    const { finished, stepIndex } = this.state;

    return (
      <div className="stepperWrapper">
        <Stepper activeStep={stepIndex} orientation="vertical">
          <Step>
            <StepLabel>Add An Image</StepLabel>
            <StepContent>
              <p>
                We live in a visual culture. Upload an image of
                the item you're sharing
              </p>
              <RaisedButton
                label="Select An Image"
                onClick={this.openFileDialog}
              >
                <div className="hideFileInput">
                  {" "}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={this.uploadFile}
                    hidden
                    id="image"
                  />
                </div>
              </RaisedButton>
              {this.renderStepActions(0)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Add a Title & Description</StepLabel>
            <StepContent>
              <p>
                Folks need to know what you're sharing. Give them
                a clue by adding a title & description.
              </p>
              <TextField
                hintText="Title"
                floatingLabelText="Title"
                floatingLabelFixed={true}
              />
              <br />
              <br />
              <TextField
                hintText="Description"
                floatingLabelText="Description"
                floatingLabelFixed={true}
                multiLine={true}
                rows={4}
                rowsMax={4}
              />
              <br />
              {this.renderStepActions(1)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Categorize Your Item</StepLabel>
            <StepContent>
              <Filter />
              {this.renderStepActions(2)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Create an ad</StepLabel>
            <StepContent>
              <p>
                Great! If you're happy with everything, tap the
                button.
              </p>
              {this.renderStepActions(2)}
            </StepContent>
          </Step>
        </Stepper>
        {finished && (
          <p style={{ margin: "20px 0", textAlign: "center" }}>
            <a
              href="#"
              onClick={event => {
                event.preventDefault();
                this.setState({ stepIndex: 0, finished: false });
              }}
            >
              Click here
            </a>{" "}
            to reset the example.
          </p>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  titleUpdate: state.share.titleUpdate,
  descriptionUpdate: state.share.descriptionUpdate,
  imageUrl: state.share.imageUrl,
  itemTags: state.items.itemTags,
  toggled: state.share.toggled
});
const mapDispatchToProps = dispatch => ({
  shareUpdateTitle: text => {
    dispatch(shareUpdateTitle(text));
  },
  shareUpdateDescription: text => {
    dispatch(shareUpdateDescription(text));
  },
  shareUpdateImage: imageUrl => {
    dispatch(shareUpdateImage(imageUrl));
  },
  toggleImageSelected: toggled => {
    dispatch(toggleImageSelected(toggled));
  },
  resetShareCardFields: () => {
    dispatch(resetShareCardFields());
  }
});

const addItem = gql`
  mutation addItem(
    $title: String
    $description: String
    $imageurl: String
    $itemowner: ID
    $tags: [TagInput]
  ) {
    addItem(
      newItem: {
        title: $title
        description: $description
        imageurl: $imageurl
        itemowner: $itemowner
        tags: $tags
      }
    ) {
      created
      id
    }
  }
`;

export default compose(
  graphql(addItem),
  connect(mapStateToProps, mapDispatchToProps)
)(withRouter(ShareStepper));
