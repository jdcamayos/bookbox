import { Carousel } from 'react-bootstrap'
import Image1 from 'assets/carousel/image1.jpg'
import Image2 from 'assets/carousel/image2.jpg'
import Image3 from 'assets/carousel/image3.jpg'
import Image4 from 'assets/carousel/image4.jpg'

const images = [
    { src: Image1, title: 'Libro recomendado', text: 'Un buen libro' },
    { src: Image2, title: 'Libro recomendado', text: 'Un buena lectura' },
    { src: Image3, title: 'Libro recomendado', text: 'Una frase de libros' },
    { src: Image4, title: 'Libro recomendado', text: 'Otra frase de libros' },
]

export default function HomeCarousel() {
    return (
        <Carousel variant="light">
            {images.map((item, index) => (
                <Carousel.Item key={index} >
                    <img
                        className="d-block"
                        style={{
                            height: '80vh',
                            width: '100%',
                            objectFit: 'cover',
                        }}
                        src={item.src}
                        alt={item.text}
                    />
                    <Carousel.Caption>
                        <div
                            className="card text-white bg-dark mb-3 rounded-3"
                            style={{ maxWidth: '25rem' }}
                        >
                            <div className="card-header h3 text-warning">
                                {item.title}
                            </div>
                            <div className="card-body">
                                <p className="card-text h4 text-warning">
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}
