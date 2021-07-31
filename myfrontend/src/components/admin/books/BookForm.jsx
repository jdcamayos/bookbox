import { useState } from 'react'

import InputTag from 'components/admin/books/InputTag'

function BookForm({ form, setForm }) {
    const [tagData, setTagData] = useState([])

    const handleInputChange = event => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        })
    }

    return (
        <form className='text-center card border-0 m-3'>
            {form.cover ? (
                <img
                    className='card m-1'
                    src={form.cover}
                    alt='book cover'
                    width='100px'
                    height='100px'
                />
            ) : null}
            <div className='form-floating mb-1'>
                <input
                    className='form-control'
                    id='floatingTitle'
                    type='text'
                    name='title'
                    value={form.title}
                    placeholder='title'
                    onChange={handleInputChange}
                />
                <label htmlFor='floatingTitle'>Titulo</label>
            </div>
            <br />
            <div className='form-floating mb-1'>
                <input
                    className='form-control'
                    id='floatingAuthor'
                    type='text'
                    name='author'
                    value={form.author}
                    placeholder='author'
                    onChange={handleInputChange}
                />
                <label htmlFor='floatingAuthor'>Autor</label>
            </div>
            <br />
            <div className='form-floating mb-1'>
                <input
                    className='form-control'
                    id='floatingDescription'
                    type='text'
                    name='description'
                    value={form.description}
                    placeholder='description'
                    onChange={handleInputChange}
                />
                <label htmlFor='floatingDescription'>Descripción</label>
            </div>
            <br />
            <div className='form-floating mb-1'>
                <input
                    className='form-control'
                    id='floatingDate'
                    type='number'
                    name='date'
                    value={form.date}
                    placeholder='date'
                    onChange={handleInputChange}
                />
                <label htmlFor='floatingDate'>Fecha</label>
            </div>
            <br />
            <div className='form-floating mb-1'>
                <input
                    className='form-control'
                    id='floatingCover'
                    type='url'
                    name='cover'
                    value={form.cover}
                    placeholder='cover'
                    onChange={handleInputChange}
                />
                <label htmlFor='floatingCover'>URL cover</label>
            </div>
            <br />
            <InputTag tagData={tagData} setTagData={setTagData} />
            {/* <button className='btn btn-warning' type='submit'>
                 {_id ? 'Actualizar libro' : 'Crear Libro'} 
            </button> */}
        </form>
    )
}

export default BookForm
