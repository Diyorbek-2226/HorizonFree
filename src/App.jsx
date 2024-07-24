import React, { useState } from 'react'
import { Saidbar } from './components/Saidbar/Saidbar'
import { Home } from './components/Home/Home'
import { Diagrama } from './components/Diagranma/Diagrama'
import { CiMenuBurger } from "react-icons/ci";
import { Modal, Box, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const App = () => {
  const [childOpen, setChildOpen] = useState(false);

  const handleOpen = () => setChildOpen(true);
  const handleClose = () => setChildOpen(false);

  return (
    <header className='flex'>
      <div className="Saidbar w-1/5">
        <div className="menu_bar">
          <div className='  lg:hidden m-start'>
            <Button onClick={handleOpen}><CiMenuBurger /></Button>
            <Modal
              open={childOpen}
              onClose={handleClose}
              aria-labelledby="child-modal-title"
              aria-describedby="child-modal-description"
            >
              <Box sx={style}>
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <Saidbar />
              </Box>
            </Modal>
          </div>
          <div className='hidden lg:inline'>
            <Saidbar />
          </div>
        </div>
      </div>

      <div className="home bg-slate-200 w-4/5">
        <Home />
        <Diagrama />
      </div>
    </header>
  )
}

export default App
