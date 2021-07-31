// import { useState } from 'react'

function InputTag({ tagData, setTagData }) {
    // const [tagData, setTagData] = useState(tags)
    const removeTagData = indexToRemove => {
        setTagData([...tagData.filter((_, index) => index !== indexToRemove)])
    }
    const addTagData = event => {
        if (event.target.value !== '') {
            setTagData([...tagData, event.target.value])
            event.target.value = ''
        }
    }
    const handleKeyUp = event => {
        if (event.key === 'Enter') {
            addTagData(event)
        }
        if (event.key === 'Backspace') {
            removeTagData(tagData.length - 1)
        }
    }
    return (
        <div className='tag-input'>
            <ul className='tags'>
                {tagData.length > 0
                    ? tagData.map((tag, index) => (
                          <li key={index} className='tag'>
                              <span className='tag-title'>{tag}</span>
                              <span
                                  className='tag-close-icon'
                                  onClick={() => removeTagData(index)}
                              >
                                  x
                              </span>
                          </li>
                      ))
                    : null}
            </ul>
            <input
                type='text'
                onKeyUp={handleKeyUp}
                placeholder='Ingrese los tags'
            />
        </div>
    )
}

export default InputTag
