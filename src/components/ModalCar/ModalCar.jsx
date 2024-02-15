import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { Link } from 'react-router-dom'

const ModalCar = ({ show, handleClose }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='col-md-8 col-lg-4 order-md-last'>
            <h4 className='d-flex justify-content-between align-items-center mb-3'>
              <span className='text-primary'>Your cart</span>
              <span className='badge bg-primary rounded-pill'>3</span>
            </h4>
            <ul className='list-group mb-8'>
              <li className='list-group-item d-flex justify-content-between lh-sm'>
                <div>
                  <h6 className='my-0'>Product name</h6>
                  <small className='text-body-secondary'>Brief description</small>
                </div>
                <span className='text-body-secondary'>$12</span>
              </li>
              <li className='list-group-item d-flex justify-content-between lh-sm'>
                <div>
                  <h6 className='my-0'>Second product</h6>
                  <small className='text-body-secondary'>Brief description</small>
                </div>
                <span className='text-body-secondary'>$8</span>
              </li>
              <li className='list-group-item d-flex justify-content-between lh-sm'>
                <div>
                  <h6 className='my-0'>Third item</h6>
                  <small className='text-body-secondary'>Brief description</small>
                </div>
                <span className='text-body-secondary'>$5</span>
              </li>
              <li className='list-group-item d-flex justify-content-between bg-body-tertiary'>
                <div className='text-success'>
                  <h6 className='my-0'>Promo code</h6>
                  <small>EXAMPLECODE</small>
                </div>
                <span className='text-success'>−$5</span>
              </li>
              <li className='list-group-item d-flex justify-content-between'>
                <span>Total (USD)</span>
                <strong>$20</strong>
              </li>
            </ul>
            <form className='card p-2'>
              <div className='input-group'>
                <input type='text' className='form-control' placeholder='Promo code' />
                <button type='submit' className='btn btn-secondary'>
                  Redeem
                </button>
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Link className='btn btn-primary' to='/pay' variant='primary' onClick={handleClose}>
            Pay
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalCar
