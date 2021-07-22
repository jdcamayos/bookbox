export default function CardBook({ title, cover, description }) {
    return (
        <article className='col'>
            <div
                className='card bg-dark text-light mb-3'
                style={{ maxWidth: '530px' }}
            >
                <div className='row g-0'>
                    <div className='col-md-4'>
                        <img
                            src={cover}
                            className='img-fluid rounded-start'
                            alt={title}
                        />
                    </div>
                    <div className='col-md-8'>
                        <div className='card-body'>
                            <h5 className='card-title text-warning'>{title}</h5>
                            <p className='card-text'>{description}</p>
                            <p className='card-text'>
                                <small className='text-muted'>
                                    Last updated 3 mins ago
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}
