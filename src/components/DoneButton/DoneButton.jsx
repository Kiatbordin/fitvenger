import React from 'react';
import { Modal, ButtonToolbar, Button, Rate } from 'rsuite';

export function DoneButton(props){

    const [open, setOpen] = React.useState(false);
    const [score,setScore] = React.useState(0);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleScoreChange = (inputScore) => setScore(inputScore);
    const handleOK = () => {
        setOpen(false);
        console.log(score);
        // Do PUT method for update status to done and rating the activity
    }

    return (
        <div className='DoneButton'>
            <ButtonToolbar>
                <Button onClick={handleOpen} size="md" color="green" appearance="primary">Save</Button>
            </ButtonToolbar>

            <Modal backdrop="static" role="alertdialog" open={open} onClose={handleClose} size="xs">
                <Modal.Body>
                    <h5>Please rate your activity.</h5>
                    <Rate defaultValue={1.5} allowHalf onChange={handleScoreChange} />
                </Modal.Body>

                <Modal.Footer>
                    <Button className='okButt' onClick={handleOK} appearance="primary">
                        Ok
                    </Button>

                    <Button onClick={handleClose} appearance="subtle">
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    );
}