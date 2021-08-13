function UserForm({ form, setForm, background }) {
    const handleInputChange = event => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        })
    }
    const handleInputCheck = () => {
        setForm({
            ...form,
            isAdmin: !form.isAdmin
        })
    }
    return (
        <form className={`text-center card border-0 m-3 ${background ? `bg-${background}` : ''}`}>
            <div className='form-floating mb-1'>
                <input
                    className='form-control'
                    id='floatingFirstName'
                    type='text'
                    name='firstName'
                    value={form.firstName}
                    placeholder='firstName'
                    onChange={handleInputChange}
                />
                <label htmlFor='floatingFirstName'>Nombres</label>
            </div>
            <div className='form-floating mb-1'>
                <input
                    className='form-control'
                    id='floatingLastName'
                    type='text'
                    name='lastName'
                    value={form.lastName}
                    placeholder='lastName'
                    onChange={handleInputChange}
                />
                <label htmlFor='floatingLastName'>Apellidos</label>
            </div>
            <div className='form-floating mb-1'>
                <input
                    className='form-control'
                    id='floatingEmail'
                    type='email'
                    name='email'
                    value={form.email}
                    placeholder='email'
                    onChange={handleInputChange}
                />
                <label htmlFor='floatingEmail'>Correo</label>
            </div>
            <div className='form-floating mb-1'>
                <input
                    className='form-control'
                    id='floatingPassword'
                    type='password'
                    name='password'
                    value={form.password}
                    placeholder='password'
                    onChange={handleInputChange}
                />
                <label htmlFor='floatingPassword'>Nueva contraseña</label>
            </div>
            <div className='form-floating mb-1'>
                <input
                    className='form-control'
                    type='password'
                    name='repeatPassword'
                    value={form.repeatPassword}
                    placeholder='repeatPassword'
                    onChange={handleInputChange}
                />
                <label htmlFor='floatingABS'>Repita contraseña</label>
            </div>
            <div className='form-check'>
                <input
                    className='form-check-input'
                    type='checkbox'
                    name='isAdmin'
                    value={form.isAdmin}
                    checked={form.isAdmin}
                    onChange={handleInputCheck}
                    id='checkIsAdmin'
                />
                <label className='form-check-label' htmlFor='checkIsAdmin'>
                    Es administrador?
                </label>
            </div>
        </form>
    )
}

export default UserForm
