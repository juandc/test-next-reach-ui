import React from 'react';
import {
    AlertDialog,
    AlertDialogLabel,
    AlertDialogDescription,
    AlertDialogOverlay,
    AlertDialogContent
} from '@reach/alert-dialog';
import {
    Menu,
    MenuButton,
    MenuLink,
    MenuList,
    MenuItem
} from '@reach/menu-button';
// import * as styles from '@reach/menu-button/styles.css';

export default class Home extends React.Component {
  constructor() {
    super()
    this.cancelRef = React.createRef();
    this.state = { showDialog: false };
    this.open = () => this.setState({ showDialog: true });
    this.close = () => this.setState({ showDialog: false });
  }
  
  render() {
    return (
        <div>
          <button onClick={this.open}>
              Delete something
          </button>

          {this.state.showDialog && (
            <AlertDialog leastDestructiveRef={this.cancelRef}>
              <AlertDialogLabel>Please Confirm!</AlertDialogLabel>

              <AlertDialogDescription>
                Are you sure you want to delete something? This action
                is permanent, and we're totally not just flipping a
                field called "deleted" to "true" in our database, we're
                actually deleting something.
              </AlertDialogDescription>

              <div className="alert-buttons">
                <button onClick={this.close}>
                  Yes, delete
                </button>{" "}
                <button ref={this.cancelRef} onClick={this.close}>
                  Nevermind, don't delete.
                </button>
              </div>
            </AlertDialog>
          )}

          <Menu>
            <MenuButton>
              Actions <span aria-hidden>▾</span>
            </MenuButton>
            <MenuList>
              <MenuItem onSelect={() => alert("Download")}>Download</MenuItem>
              <MenuItem onSelect={() => alert("Copy")}>Create a Copy</MenuItem>
              <MenuItem onSelect={() => alert("Mark as Draft")}>Mark as Draft</MenuItem>
              <MenuItem onSelect={() => alert("Delete")}>Delete</MenuItem>
              <MenuLink
                component="a"
                href="https://reach.tech/workshops"
              >Attend a Workshop</MenuLink>
            </MenuList>
          </Menu>

          {/* <style jsx global>{`${styles}`}</style> */}
        </div>
    );
  }
};