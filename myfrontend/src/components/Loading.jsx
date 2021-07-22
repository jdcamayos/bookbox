import { Spinner } from 'react-bootstrap'

export default function Loading() {
    return (
        <div className='d-flex align-items-center justify-content-center'>
            <Spinner animation='grow' variant='warning' />
        </div>
    )
}
