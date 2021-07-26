function HeaderPage(props) {
    const { children, title } = props
    return (
        <section className=' m-0 mb-2 bg-warning rounded-bottom'>
            <div className='card-body'>
                <h3><strong>{title}</strong></h3>
                {children}
            </div>
        </section>
    )
}

export default HeaderPage
