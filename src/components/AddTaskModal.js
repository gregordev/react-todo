import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class AddTaskModal extends React.Component {
    state = {
        open: false,
        error: undefined,
        tasks: this.props.tasks,
        value: ""
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleChange = (e) => {
      this.setState({value: e.target.value, error: undefined});
    };




    render() {
        const addTask = (e) => {
            e.preventDefault();
            const addedTask = this.state.value.trim();
            const error = this.props.addTask({content: addedTask, completed: false});
            this.setState(() => {
                return {error};
            });
            if (!error) {
                this.handleClose();
            }
        };
        return (
            <div className="modal-container">
                <Button className="btn btn-add" color="primary" onClick={this.handleClickOpen}>
                    +
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Add a new task</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {this.state.error && <span>{this.state.error}</span>}
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Name"
                            type="taskInput"
                            fullWidth
                            onChange={this.handleChange}
                            onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                   addTask(e);
                                }
                            }}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={addTask} color="primary">
                            Add
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}
