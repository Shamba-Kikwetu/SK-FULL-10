import Carousel from 'react-bootstrap/Carousel';
import pic1 from "../../assets/shambakikweru/pic1.jpg"
import pic2 from "../../assets/shambakikweru/pic2.jpg"
import pic3 from "../../assets/shambakikweru/pic3.jpg"
function Frontslider() {
    return (
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <img
                    className="d-block"
                    src={pic1}
                    alt="First slide"
                    style={{width: '100%', height:'900px'}}
                />
                <Carousel.Caption>
                    <h1 style={{marginTop: '-25em' ,fontFamily: 'FellDW' ,fontSize: ''}}>Shamba Kikwetu</h1>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block "
                    src={pic2}
                    alt="Second slide"
                    style={{width: '100%', height:'900px'}}
                />
                <Carousel.Caption>
                    <h5 style={{marginTop: '-30em'}}>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block"
                    src={pic3}
                    alt="Third slide"
                    style={{width: '100%', height:'900px'}}
                />
                <Carousel.Caption>
                    <h5 style={{marginTop: '-30em'}}>Third slide label</h5>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Frontslider;