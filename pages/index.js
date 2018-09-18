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
import menuStyles from '@reach/menu-button/styles.css';

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
              Your Cats <span aria-hidden>▾</span>
            </MenuButton>
            <MenuList className="kittys">
                <MenuItem onSelect={() => { }}>
                    <img
                        src="https://placekitten.com/100/100"
                        alt="Fluffybuns the destroyer"
                    />
                    <span>Fluffybuns the Destroyer</span>
                </MenuItem>
                <MenuItem onSelect={() => { }}>
                    <img
                        src="https://placekitten.com/120/120"
                        alt="Simon the pensive"
                    />
                    <span>Simon the pensive</span>
                </MenuItem>
            </MenuList>

            <style jsx global>{menuStyles}</style>
          </Menu>
        </div>
    );
  }
};
