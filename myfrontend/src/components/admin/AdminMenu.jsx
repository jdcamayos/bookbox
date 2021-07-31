import HeaderPage from 'components/misc/HeaderPage'
import CardAdmin from 'components/admin/CardAdmin'

function AdminMenu() {
    return (
        <main className='container'>
            <HeaderPage title='Administración' />
            <section>
                <div className='row row-cols-1 row-cols-md-2 g-4'>
                    <div className='col'>
                        <CardAdmin title='Libros' route='/admin/books'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='150'
                                height='150'
                                fill='currentColor'
                                className='bi bi-book-fill'
                                viewBox='0 0 16 16'
                            >
                                <path d='M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z' />
                            </svg>
                        </CardAdmin>
                    </div>
                    <div className='col'>
                        <CardAdmin title='Usuarios' route='/admin/users'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='150'
                                height='150'
                                fill='currentColor'
                                className='bi bi-people-fill'
                                viewBox='0 0 16 16'
                            >
                                <path d='M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z' />
                                <path
                                    fillRule='evenodd'
                                    d='M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z'
                                />
                                <path d='M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z' />
                            </svg>
                        </CardAdmin>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default AdminMenu
